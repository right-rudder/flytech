import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

export default function FAQs({ faqs, type }) {
  const [openList, setOpenList] = useState([]);

  const handleClick = (event) => {
    const id = event.target.id;
    if (openList.includes(id)) {
      setOpenList(openList.filter(item => item !== id));
    } else {
      setOpenList([...openList, id]);
    }
  }

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <p
            style={{
              marginTop: "3rem",
              textTransform: "uppercase",
              fontSize: "1.125rem", // lg:text-lg
              fontFamily: '"Open Sans Variable", sans-serif',
              fontWeight: "700",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#57b553", // text-primary-500
              maxWidth: "768px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {type}
          </p>

          <h2
            style={{
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
              fontSize: "2.25rem", // text-4xl
              lineHeight: "2.5rem",
              fontFamily: '"Kanit", sans-serif',
              fontWeight: "700",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#1c401d", // text-primary-900
              maxWidth: "768px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Frequently Asked Questions
          </h2>

          <dl
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "none",
                  overflow: "hidden",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    fontWeight: "600",
                    color: "#52525b", // text-primary-800 alternative
                    listStyle: "none",
                  }}
                  className="w-full flex justify-between items-center gap-4 px-4 pt-4 transition-colors duration-300 ease-in-out hover:bg-gray-50"
                  onClick={handleClick}
                  id={"faq-" + faq.title}
                >
                  {faq.title}
                  <BiChevronRight className={`size-6 transition-all duration-500 ease-in-out ${openList.includes("faq-" + faq.title) ? "rotate-90" : "rotate-0"}`} />
                </button>
                <div
                  style={{ color: "#4b5563" }} // text-gray-700
                  className={`transition-all pt-4 px-4 duration-500 ease-in-out ${
                    openList.includes("faq-" + faq.title)
                      ? "max-h-[1000px] opacity-100 pb-4"
                      : "max-h-0 opacity-0 pb-0"
                  }`}
                  dangerouslySetInnerHTML={{ __html: faq.content }}
                />
              </div>
            ))}
          </dl>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "3rem",
            color: "#4b5563", // text-gray-600
          }}
        >
          If you have any additional questions please send us an email to{" "}
          <a
            href="/contact"
            style={{ color: "#52525b", textDecoration: "underline" }}
          >
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}
