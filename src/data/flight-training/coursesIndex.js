import { COMPANY_NAME } from "../../consts";

const coursesIndex = {
  data: {
    // SEO Header Stuff
    pageTitle: `Training Programs | ${COMPANY_NAME}`,
    pageDescription:
      "Discover FlyTech Pilot Academy’s comprehensive pilot training programs. From Private Pilot License to advanced certifications like Instrument Rating, , and Certified Flight Instructor, our expert-led courses are designed to help you achieve your aviation dreams.",
    pageKeywords:
      "flight training courses Missouri, aviation certifications, private to commercial pilot,  rating training, CFI courses Saint Joseph, aviation school programs",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/stock-pierre-goiffon-t56w7xguZWA-unsplash.webp",
      imageAlt:
        "Photograph of a FlyTech Pilot Academy aircraft soaring over the Missouri landscape",
      headerH1: `Flight <br> training <strong class="text-primary-600">PROGRAMS</strong>`,
      paragraph: `Join FlyTech Pilot Academy and take your first step towards a successful aviation career. Whether you're starting with a discovery flight or pursuing advanced ratings, we’re here to support you every step of the way.`,
      buttons: [
        {
          name: "Our programs",
          link: "#programs",
          primary: true,
        },
      ],
    },
  },
};

export default coursesIndex;
