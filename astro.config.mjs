import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://flystj.com",
  integrations: [tailwind(), sitemap(), react()],
  redirects: {
    "/n900ft/": "/about/fleet/",
    "/training/": "/flight-training/",
    "/faq/": "/about/faq/",
    "/financing/": "/about/financing/",
    "/housing/": "/about/housing/",
    "/pricing/": "/",
    "/fleet/": "/about/fleet/",
    // "/contact/": "/",
    "/aviation-resources/": "/current-students/",
    "/mcx-sim/": "/about/fleet/",
    // '/about/financing/': '/',
    "/about-us/": "/about/",
    "/sign-in/": "/current-students/",
    "/explore-flight-pass/": "/discover-flight/",
    "/sling-ngt-cockpit/": "/about/fleet/",
    "/loan-option-payment-computation-202506-flytech/": "/",
    "/wp-content/uploads/2024/06/FlyTech_Invitation_June_28_11am.pdf": "/",
    "/wp-content/uploads/2025/03/Sling-Checklist-912iS.pdf": "/",
    "/wp-content/uploads/2025/07/Updated-Sling-Checklist.pdf": "/",
    "/wp-content/uploads/2025/03/VFR-Syllabus-V1.pdf": "/",
    "/wp-content/uploads/2025/03/Sling-LSA-Maneuver-Guide.pdf": "/",
    "/wp-content/uploads/2025/03/FlyTech-Private-Pilot-Check-ride-Checklist.pdf":
      "/",
    "/wp-content/uploads/2025/06/Loan-Option-Payment-Computation-202506-FlyTech.pdf":
      "/",
    "/wp-content/uploads/2025/03/Private-Pilot-Everything-You-Need-To-Know.pdf":
      "/",
    "/wp-content/uploads/2025/03/Private-Pilot-Syllabus-Gold-Seal-Online-Ground-School.pdf":
      "/",
    "/wp-content/uploads/2025/03/Sling-2-LSA-Maintenance-Manual-Rev-2.9.pdf":
      "/",
  },
});
