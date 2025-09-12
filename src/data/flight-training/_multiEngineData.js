import { COMPANY_NAME } from "../../consts";

const multiEngineData = {
  pageTitle: `Multi-Engine Rating Course | ${COMPANY_NAME}, Saint Joseph, MO`,
  pageDescription:
    "Earn your  Rating at FlyTech Pilot Academy in Saint Joseph, MO. Master twin-engine aircraft operations and expand your career opportunities with expert training.",
  pageKeywords:
    " rating Saint Joseph MO, twin-engine pilot training Saint Joseph, flight school Saint Joseph MO, commercial pilot training Saint Joseph, aviation school Saint Joseph MO,  certification Saint Joseph",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/placeholder-img.webp",
    imageAlt: "FlyTech Pilot Academy student by a  airplane",
    headerH1: ` <br>RATING</span>`,
    paragraph: `Take your flying skills to the next level with FlyTech Pilot Academy's  Rating program. Learn to operate twin-engine aircraft with confidence and precision.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/#enroll",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Expand Your Skills with a",
    heading: " Rating",
    subHeading:
      "A  Rating allows you to fly aircraft with more than one engine, increasing your capabilities and career opportunities.",

    title: "Overview",
    description: `
      The  Rating (MER) program at FlyTech Pilot Academy is designed for pilots who want to expand their skill set by learning to fly twin-engine aircraft. This rating is essential for those pursuing a career in commercial aviation and offers a deeper understanding of complex aircraft systems.
      <br/>
      <br/>
      During the course, you will receive hands-on training in  aerodynamics, emergency procedures, engine-out operations, and aircraft performance calculations. You will learn how to safely manage engine failures, asymmetrical thrust, and other challenges unique to  flying.
      <br/>
      <br/>
      By the end of this program, you will have mastered the skills needed to pass the FAA  checkride and confidently operate  aircraft in various flight conditions.`,

    keyPoints: [
      "Master Twin-Engine Aircraft Operations",
      "Learn Advanced Emergency Procedures",
      "Increase Career Opportunities in Commercial Aviation",
      "Comprehensive Ground & Flight Training",
    ],

    addons: [
      {
        title: " Commercial Pilot",
        description:
          "With the  add-on to your commercial rating, you can unlock new career opportunities in commercial aviation. Our integrated training program prepares you for the demands of a professional pilot career. We start training with checkride date set.",
        duration: "~7-10 days",
      },
    ],

    cta: {
      imagePath: "/src/assets/placeholder-img.webp",
      imageAlt: "Female pilot smiling",
      title: "Enroll in the  Rating Program",
      description:
        "Advance your aviation skills and career opportunities by earning your  Rating at FlyTech Pilot Academy.",
      button: {
        name: "Enroll Now",
        link: "/#enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to get a  Rating?",
        answer:
          "Most students complete their MER in 1-2 weeks, depending on training frequency and proficiency and having completed Commercial Pilot Certificate.",
      },
      {
        question:
          "Do I need a Commercial Pilot License before getting a  Rating?",
        answer:
          "No, you can obtain a  Rating with a Private Pilot License, but it is often pursued alongside a Commercial Pilot License.",
      },
      {
        question: "What can I do with a  Rating?",
        answer:
          "With an MER, you can fly  aircraft, increasing job opportunities in commercial aviation, charter operations, and corporate flying.",
      },
    ],
  },
};

export default multiEngineData;
