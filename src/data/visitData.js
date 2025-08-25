import { COMPANY_NAME } from "../consts";

const visitData = {
  pageTitle: `Visit FlyTech Pilot Academy in Saint Joseph, MO | ${COMPANY_NAME}`,
  pageDescription:
    "Visit FlyTech Pilot Academy in Saint Joseph, MO, and explore our state-of-the-art aviation training facilities. Schedule a tour today to kickstart your pilot training journey.",
  pageKeywords:
    "flight school Saint Joseph MO, visit FlyTech, aviation training Saint Joseph, flight school tour Saint Joseph, pilot training facilities Saint Joseph MO",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/placeholder-img.webp",
    imageAlt: "FlyTech Pilot Academy campus and facilities",
    headerH1: `Visit US`,
    paragraph: `Explore FlyTech Pilot Academy and see firsthand our state-of-the-art facilities and training environment. Schedule a visit today and take the first step towards your aviation career.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/#enroll",
        primary: false,
      },
      {
        name: "Contact Us",
        link: "/contact",
        primary: false,
      },
    ],
  },

  // Visit Details
  details: {
    upperHeading: "Plan Your Visit",
    heading: "Welcome to FlyTech",
    subHeading:
      "We invite you to visit FlyTech Pilot Academy and experience our exceptional training environment. Our team is excited to show you around and answer any questions you may have.",
  },
};

export default visitData;
