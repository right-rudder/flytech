import { COMPANY_NAME } from "../../consts";

const certifiedFlightInstructorData = {
  pageTitle: `Certified Flight Instructor (CFI) | ${COMPANY_NAME}`,
  pageDescription:
    "Launch your career as a flight instructor with FlyTech Flight School’s Certified Flight Instructor (CFI) program. Gain the experience and skills needed to teach the next generation of pilots.",
  pageKeywords:
    "certified flight instructor Missouri, CFI training Saint Joseph, flight instructor certification, become a CFI, flight school, pilot instructor training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/stock-ben-bracken-XeVFehBtCXo-unsplash.webp",
    imageAlt:
      "FlyTech Flight School student and flight instructor in a Cessna airplane cockpit",
    headerH1: `Certified Flight <br>INSTRUCTOR (CFI)</span>`,
    paragraph: `Become a leader in aviation with FlyTech Flight School’s CFI program. Gain valuable experience while teaching aspiring pilots and advancing your own career.`,
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
    upperHeading: "Start Your Career as a",
    heading: "Certified Flight Instructor",
    subHeading:
      "Becoming a Certified Flight Instructor (CFI) allows you to gain valuable flight experience while teaching new pilots the skills they need to succeed.",

    title: "Overview",
    description: `
      The Certified Flight Instructor (CFI) program at FlyTech Flight School is designed for pilots looking to advance their careers by teaching others how to fly. This program equips you with the instructional skills, flight proficiency, and teaching techniques necessary to become an FAA-certified instructor.
      <br/><br/>
      FlyTech offers an <strong>accelerated (~4-8 weeks)</strong> and a <strong>flexible (at-your-own pace)</strong> CFI training program. Our flight instructors will guide you through the process of becoming a proficient flight instructor, preparing you for a rewarding career in aviation.
      <br/><br/>
      As a CFI, you will develop expertise in aerodynamics, flight instruction principles, and student pilot training strategies. You’ll also refine your communication skills to effectively teach flight maneuvers, emergency procedures, and airspace regulations.
      <br/><br/>
      Upon completion of this program, you will be prepared to pass the FAA Certified Flight Instructor checkride and begin your career as a flight instructor—gaining flight hours and advancing toward airline or corporate pilot opportunities.`,

    keyPoints: [
      "FlyTech offers accelerated and flexible CFI training programs to fit your schedule.",
      "Gain Valuable Flight Experience While Teaching",
      "Refine Your Instructional & Communication Skills",
      "Prepare for the FAA Certified Flight Instructor Checkride",
      "Start Your Career in Aviation with a CFI Position",
    ],

    addons: [
      {
        title: "Certified Flight Instructor Instruments (CFII)",
        description:
          "Expand your teaching capabilities with the Certified Flight Instructor Instruments (CFII) add-on. This advanced training allows you to instruct students in instrument flying techniques and procedures. We offer accelerated and flexible CFII training options to fit your schedule.",
      },
      {
        title: "Multi-Engine Instructor (MEI)",
        description:
          "Elevate your flight instruction skills with the Multi-Engine Instructor (MEI) add-on. Learn to teach multi-engine aircraft operations and systems to aspiring pilots. Our MEI training program provides the knowledge and experience needed to become a proficient multi-engine flight instructor. Contact us to learn more about our MEI training options.",
        duration: "~2 months",
      },
    ],

    cta: {
      imagePath:
        "/src/assets/stock-steward-masweneng-n9By7oBszM0-unsplash.webp",
      imageAlt: "Female pilot smiling",
      title: "Enroll in the CFI Program",
      description:
        "Start your journey as a Certified Flight Instructor at FlyTech Flight School and gain the experience needed for a successful aviation career.",
      button: {
        name: "Enroll Now",
        link: "/enroll-at-FlyTech",
      },
    },

    faqs: [
      {
        question:
          "How long does it take to become a Certified Flight Instructor?",
        answer:
          "Most students complete their CFI training in 4-8 weeks, depending on proficiency and study schedule.",
      },
      {
        question: "Do I need a Commercial Pilot License before becoming a CFI?",
        answer:
          "Yes, a Commercial Pilot License (CPL) is required before obtaining a Certified Flight Instructor (CFI) certification.",
      },
      {
        question: "What can I do with a CFI certification?",
        answer:
          "As a CFI, you can teach student pilots, build valuable flight hours, and gain experience for future airline or corporate pilot opportunities.",
      },
    ],

    pricing: {
      assumptions: [
        { item: "TAA SEL (WET)", rate: "$185/hr" },
        { item: "Instructor Rate", rate: "$60/hr" },
        { item: "Sim Time", rate: "$50/hr" },
        { item: "Group Ground School", rate: "$30/hr" },
        { item: "CFI Checkride", rate: "$1,200" },
      ],
      estimatedTotal: "$12,062.50",
      breakdown: [
        {
          category: "Dual Flight Time",
          details: "15 hrs @ $185/hr",
          total: "$2,775",
        },
        {
          category: "Flight Instruction",
          details: "15 hrs @ $60/hr",
          total: "$900",
        },
        {
          category: "Simulator Time",
          details: "27.5 hrs @ $50/hr",
          total: "$1,375",
        },
        {
          category: "Sim Instruction",
          details: "27.5 hrs @ $60/hr",
          total: "$1,650",
        },
        {
          category: "Pre/Post Flight Briefing",
          details: "14 hrs @ $60/hr",
          total: "$840",
        },
        {
          category: "Ground School",
          details: "30 hrs @ $60/hr",
          total: "$1,800",
        },
        { category: "Checkride", details: "One-time", total: "$1,200" },
      ],
    },
  },
};

export default certifiedFlightInstructorData;
