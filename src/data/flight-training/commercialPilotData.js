import { COMPANY_NAME } from "../../consts";

const commercialPilotData = {
  pageTitle: `Commercial Pilot | ${COMPANY_NAME}`,
  pageDescription:
    "Launch your professional aviation career with FlyTech Flight School’s Commercial Pilot License (CPL) program. Gain the skills and experience to fly for hire.",
  pageKeywords:
    "commercial pilot license Missouri, flight school Saint Joseph, CPL certification, professional pilot training, aviation career, commercial aviation training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/simulator-with-student.webp",
    imageAlt:
      "FlyTech Flight School student and flight instructor in a Cessna airplane cockpit",
    headerH1: `Fly high with a <br> <strong class="text-primary-600" >Commercial PILOT Certificate</strong>`,
    paragraph: `Turn your passion for flying into a career with FlyTech Flight School's Commercial Pilot License program. Gain the expertise needed to fly professionally and get paid to do what you love.`,
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
    upperHeading: "Become a Professional Pilot with a",
    heading: "Commercial Pilot License",
    subHeading:
      "A CPL allows you to fly for hire, opening doors to careers in airlines, charter flights, corporate aviation, and more.",

    title: "Overview",
    description: `
      The Commercial Pilot License (CPL) program at FlyTech Flight School is designed for pilots who want to take their skills to a professional level. This program provides advanced flight training, in-depth aeronautical knowledge, and real-world experience to prepare you for a career in aviation.
      <br/><br/>
      You will refine your piloting skills, master precision maneuvers, and develop the knowledge necessary for safe and efficient commercial flight operations. The course covers advanced aerodynamics, performance-based navigation, emergency procedures, and FAA regulations.
      <br/><br/>
      Upon completion, you will be fully prepared to pass the FAA Commercial Pilot checkride. Whether you plan to become an airline pilot, charter pilot, or flight instructor, this certification is an essential step toward achieving your aviation career goals.`,

    keyPoints: [
      "Earn a License to Fly for Hire",
      "Master Advanced Flight Maneuvers",
      "Develop Professional-Level Aviation Knowledge",
      "Comprehensive Flight & Ground Training",
    ],

    cta: {
      imagePath:
        "/src/assets/stock-randy-dautzenberg-UgVWw4BjH7g-unsplash.webp",
      imageAlt: "Female pilot smiling",
      title: "Enroll in the Commercial Pilot Program",
      description:
        "Take the next step in your aviation career. Join FlyTech Flight School's Commercial Pilot program and train to become a professional pilot.",
      button: {
        name: "Enroll Now",
        link: "/#enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to get a Commercial Pilot License?",
        answer:
          "Most students complete their CPL in 2-3 months, depending on training frequency and flight hours logged.",
      },
      {
        question: "Do I need an Instrument Rating before starting?",
        answer:
          "Yes, an Instrument Rating is required before obtaining a Commercial Pilot License.",
      },
      {
        question: "What can I do with a Commercial Pilot License?",
        answer:
          "With a CPL, you can work as a commercial pilot in charter flights, corporate aviation, flight instruction, and more.",
      },
    ],

    pricing: {
      assumptions: [
        { item: "TAA SEL (WET)", rate: "$185/hr" },
        { item: "Instructor Rate", rate: "$60/hr" },
        { item: "Sim Time", rate: "$50/hr" },
        { item: "Group Ground School", rate: "$30/hr" },
        { item: "Commercial Checkride + Written", rate: "$1,200" },
      ],
      estimatedTotal: "$23,487.50",
      breakdown: [
        {
          category: "Remaining PIC Time Required",
          details: "50 hrs @ $185/hr",
          total: "$9,250",
        },
        {
          category: "Dual Hours (Sling, Right Seat)",
          details: "30 hrs @ $185/hr",
          total: "$5,550",
        },
        {
          category: "Flight Instruction (Dual Hours)",
          details: "30 hrs @ $60/hr",
          total: "$1,800",
        },
        { category: "Sim Time", details: "27.5 hrs @ $50/hr", total: "$1,375" },
        {
          category: "Sim Instruction",
          details: "27.5 hrs @ $60/hr",
          total: "$1,650",
        },
        {
          category: "Pre/Post Flight Instruction",
          details: "14 hrs @ $60/hr",
          total: "$840",
        },
        {
          category: "Ground School",
          details: "30 hrs @ $60/hr",
          total: "$1,800",
        },
        { category: "Checkride (FAA)", details: "One-time", total: "$1,200" },
      ],
    },
  },
};

export default commercialPilotData;
