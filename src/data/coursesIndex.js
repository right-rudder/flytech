import { COMPANY_NAME } from "../consts";

const coursesIndex = {
  data: {
    // SEO Header Stuff
    pageTitle: `Training Programs | ${COMPANY_NAME}`,
    pageDescription:
      "Discover FlyTech Flight School’s comprehensive pilot training programs. From Private Pilot License to advanced certifications like Instrument Rating, Multi-Engine, and Certified Flight Instructor, our expert-led courses are designed to help you achieve your aviation dreams.",
    pageKeywords:
      "flight training courses Missouri, aviation certifications, private to commercial pilot, multi-engine rating training, CFI courses Saint Joseph, aviation school programs",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/placeholder-img.webp",
      imageAlt:
        "Photograph of a FlyTech Flight School aircraft soaring over the Missouri landscape",
      headerH1: `Pilot <br>PROGRAMS</span>`,
      paragraph: `Join FlyTech Flight School and take your first step towards a successful aviation career. Whether you're starting with a discovery flight or pursuing advanced ratings, we’re here to support you every step of the way.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-at-FlyTech",
          primary: false,
        },
        {
          name: "Program Guide",
          link: "/path",
          primary: false,
        },
      ],
    },
  },
};

export default coursesIndex;
