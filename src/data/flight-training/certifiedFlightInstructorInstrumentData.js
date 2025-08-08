import { COMPANY_NAME } from "../../consts";

const certifiedFlightInstructorInstrumentsData = {
  pageTitle: `Certified Flight Instructor – Instrument (CFII) | ${COMPANY_NAME}`,
  pageDescription:
    "Expand your flight instructor credentials with FlyTech Flight School’s Certified Flight Instructor – Instrument (CFII) program. Learn to teach instrument flying skills and prepare pilots for IFR proficiency.",
  pageKeywords:
    "certified flight instructor instrument Missouri, CFII training Saint Joseph, instrument flight instructor certification, become a CFII, IFR instructor course, advanced flight training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/stock-steward-masweneng-n9By7oBszM0-unsplash.webp",
    imageAlt:
      "FlyTech Flight School instructor and student practicing instrument flight in a Cessna cockpit",
    headerH1: `Certified Flight Instructor – <strong class="text-primary-600">Instrument (CFII)</strong>`,
    paragraph: `Advance your aviation career by becoming a Certified Flight Instructor – Instrument. Gain the knowledge and skills to teach pilots advanced IFR techniques and help them succeed in challenging flight conditions.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll-at-FlyTech",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Advance Your Career as a",
    heading: "Certified Flight Instructor – Instrument",
    subHeading:
      "A CFII certification allows you to teach pilots how to safely and effectively operate under instrument flight rules (IFR), opening doors to more advanced instruction opportunities.",

    title: "Overview",
    description: `
      The Certified Flight Instructor – Instrument (CFII) program at FlyTech Flight School is designed for licensed flight instructors who want to expand their teaching qualifications to include instrument training.
      <br/><br/>
      Our program covers advanced instrument flying principles, IFR regulations, navigation systems, instrument approaches, and teaching techniques specific to instrument students.
      <br/><br/>
      FlyTech offers both an <strong>accelerated (~3–6 weeks)</strong> and a <strong>flexible (at-your-own-pace)</strong> CFII training program, so you can fit your studies into your schedule.
      <br/><br/>
      By completing the CFII course, you’ll be prepared to pass the FAA CFII checkride and help your students gain the skills they need to fly confidently in IMC (Instrument Meteorological Conditions).
    `,

    keyPoints: [
      "Teach pilots to operate under Instrument Flight Rules (IFR)",
      "Accelerated and flexible training options available",
      "In-depth instruction on IFR procedures, approaches, and navigation",
      "Preparation for the FAA CFII checkride",
      "Expand your career opportunities and earning potential",
    ],

    // addons: [
    //   {
    //     title: "Multi-Engine Instructor (MEI)",
    //     description:
    //       "Enhance your instructor credentials further by adding the Multi-Engine Instructor (MEI) rating. This allows you to teach multi-engine operations in both VFR and IFR environments.",
    //     duration: "~2 months",
    //   },
    // ],

    cta: {
      imagePath: "/src/assets/stock-max-nustedt-_uwWKY22_HA-unsplash.webp",
      imageAlt: "Smiling pilot holding headset in cockpit",
      title: "Enroll in the CFII Program",
      description:
        "Advance your instructional skills and become an expert in teaching IFR procedures with FlyTech’s CFII program.",
      button: {
        name: "Enroll Now",
        link: "/enroll-at-FlyTech",
      },
    },

    faqs: [
      {
        question: "How long does it take to earn a CFII rating?",
        answer:
          "Most students complete their CFII training in 3–6 weeks, depending on proficiency and training frequency.",
      },
      {
        question: "Do I need a CFI certificate before getting my CFII?",
        answer:
          "Yes. You must already hold a Certified Flight Instructor certificate before pursuing the CFII rating.",
      },
      {
        question: "What can I do with a CFII certification?",
        answer:
          "You can train pilots in instrument flight procedures, help them earn their instrument rating, and prepare them for IFR proficiency checks.",
      },
    ],

    pricing: {
      assumptions: [
        { item: "TAA SEL (WET)", rate: "$185/hr" },
        { item: "Instructor Rate", rate: "$60/hr" },
        { item: "Sim Time", rate: "$50/hr" },
        { item: "Group Ground School", rate: "$30/hr" },
        { item: "CFII Checkride", rate: "$1,200" },
      ],
      estimatedTotal: "$9,875.00",
      breakdown: [
        {
          category: "Dual Flight Time",
          details: "12 hrs @ $185/hr",
          total: "$2,220",
        },
        {
          category: "Flight Instruction",
          details: "12 hrs @ $60/hr",
          total: "$720",
        },
        {
          category: "Simulator Time",
          details: "25 hrs @ $50/hr",
          total: "$1,250",
        },
        {
          category: "Sim Instruction",
          details: "25 hrs @ $60/hr",
          total: "$1,500",
        },
        {
          category: "Pre/Post Flight Briefing",
          details: "10 hrs @ $60/hr",
          total: "$600",
        },
        {
          category: "Ground School",
          details: "20 hrs @ $60/hr",
          total: "$1,200",
        },
        { category: "Checkride", details: "One-time", total: "$1,200" },
      ],
    },
  },
};

export default certifiedFlightInstructorInstrumentsData;
