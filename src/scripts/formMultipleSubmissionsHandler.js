export function setupFormHandler({
  formId,
  webhookURL,
  apiKey,
  accountId,
  redirectUrl = "/contact-confirmation",
  excludedFields = [
    "first-name",
    "last-name",
    "email",
    "phone",
    "confirm-email",
    "agree-terms",
  ],
  toggleId = "terms-toggle",
  hiddenInputId = "agree-terms",
  submitBtnId = "submit-btn",
}) {
  console.log("[FormHandler] Initializing...");
  const form = document.getElementById(formId);
  const toggle = document.getElementById(toggleId);
  const hiddenInput = document.getElementById(hiddenInputId);
  const submitBtn = document.getElementById(submitBtnId);

  if (!form) return console.error(`[FormHandler] Form "${formId}" not found`);
  if (!toggle)
    return console.error(`[FormHandler] Toggle "${toggleId}" not found`);
  if (!hiddenInput)
    return console.error(
      `[FormHandler] Hidden input "${hiddenInputId}" not found`,
    );
  if (!submitBtn)
    return console.error(
      `[FormHandler] Submit button "${submitBtnId}" not found`,
    );

  const thumb = toggle.querySelector(".terms-thumb");
  if (!thumb)
    return console.error("[FormHandler] Thumb element not found inside toggle");

  // ---- Toggle setup ----
  let isChecked = false;
  toggle.addEventListener("click", () => {
    isChecked = !isChecked;
    hiddenInput.value = isChecked ? "yes" : "no";
    toggle.setAttribute("aria-checked", String(isChecked));

    toggle.classList.toggle("bg-primary-500", isChecked);
    toggle.classList.toggle("bg-gray-200", !isChecked);
    thumb.classList.toggle("translate-x-3.5", isChecked);
    thumb.classList.toggle("translate-x-0", !isChecked);

    submitBtn.disabled = !isChecked;
    submitBtn.classList.toggle("cursor-not-allowed", !isChecked);
    submitBtn.classList.toggle("bg-gray-400", !isChecked);
    submitBtn.classList.toggle("btn-primary", isChecked);
  });

  // start disabled
  submitBtn.disabled = true;
  submitBtn.classList.add("cursor-not-allowed", "bg-gray-400");
  submitBtn.classList.remove("btn-primary");

  // ---- Form submit ----
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    if (formData.get("confirm-email")?.trim()) return; // honeypot

    const urlEncodedBody = new URLSearchParams(formData).toString();

    const metadata = {};
    for (const [key, value] of formData.entries()) {
      if (!excludedFields.includes(key))
        metadata[key] = value?.trim?.() ?? value;
    }

    const jsonBody = {
      first_name: formData.get("first-name")?.trim() || "",
      last_name: formData.get("last-name")?.trim() || "",
      email: formData.get("email")?.trim() || "",
      phone: formData.get("phone")?.trim() || "",
      campaign: "contact",
      account_random_id: accountId,
      metadata,
    };

    try {
      const [ghlRes, portalRes] = await Promise.all([
        fetch(webhookURL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: urlEncodedBody,
        }),
        fetch("https://portal.rightruddermarketing.com/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-api-key": apiKey,
          },
          body: JSON.stringify(jsonBody),
        }),
      ]);

      if (ghlRes.ok && portalRes.ok) window.location.href = redirectUrl;
      else
        console.error("Submission failed", {
          ghlStatus: ghlRes.status,
          portalStatus: portalRes.status,
        });
    } catch (err) {
      console.error("[FormHandler] Submission error:", err);
    }
  });
}
