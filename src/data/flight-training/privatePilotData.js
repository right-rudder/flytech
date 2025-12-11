import { COMPANY_NAME } from "../../consts";

const privatePilotData = {
  pageTitle: `Private Pilot License | ${COMPANY_NAME}, Saint Joseph, MO`,
  pageDescription:
    "Begin your aviation journey with FlyTech’s Private Pilot Certificate program. Learn from expert instructors, master essential flight skills, and earn your wings with confidence.",
  pageKeywords:
    "private pilot certificate Missouri, Saint Joseph flight school, learn to fly, FAA pilot license, aviation training, beginner pilot program",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/cockpit-flying-slinger.webp",
    imageAlt: "A FlyTech Pilot Academy aircraft in flight over Missouri",
    headerH1: `Private <strong class="text-primary-600">Pilot Certificate</strong>`,
    paragraph: `Take the first step toward the skies with FlyTech’s Private Pilot Certificate. Train with experienced instructors and gain the flight hours and skills needed to fly confidently and safely.`,
    buttons: [
      {
        name: "Start Flying Today",
        link: "/discovery-flight",
        primary: true,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Take Off With a",
    heading: "Private Pilot License",
    subHeading:
      "Whether you're flying for fun or aiming for a professional career, the Private Pilot Certificate is where every pilot’s journey begins.",

    title: "Program Overview",
    description: `
      The Private Pilot Certificate is the most common, and most essential, first step in aviation. At FlyTech, you’ll train under FAA-certified instructors through a proven curriculum that balances in-depth ground school with hands-on flight experience.
      <br/><br/>
      You'll learn the fundamentals of aerodynamics, aircraft systems, weather theory, FAA regulations, radio communication, and flight planning. Practical training includes day and night flights, solo navigation, instrument work, and cross-country routes, building real-world confidence in the cockpit.
      <br/><br/>
      By the end of the program, you’ll have logged at least 40 hours of flight time and be fully prepared to pass your FAA checkride. Whether you’re pursuing aviation professionally or recreationally, FlyTech will help you earn your wings and take flight with skill and confidence.`,

    keyPoints: [
      "Minimum of 40 flight hours (including 20 with an instructor and 10 solo)",
      "Cross-country and night flying experience included",
      "FAA-approved curriculum led by certified instructors",
      "Simulated instrument flight training",
      "Preparation for FAA checkride within 60 days of exam",
    ],

    pricing: {
      assumptions: [
        { item: "TAA SEL (WET)", rate: "$185/hr" },
        { item: "Instructor Rate", rate: "$60/hr" },
        { item: "Sim Time", rate: "$50/hr" },
        { item: "Ground School", rate: "$60/hr" },
        { item: "Checkride (Examiner Fee)", rate: "$1,200" },
      ],
      estimatedTotal: "$17,925",
      breakdown: [
        {
          category: "Flight Time (Dual)",
          details: "25 hrs @ $185/hr",
          total: "$4,625",
        },
        {
          category: "Flight Time (Solo)",
          details: "15 hrs @ $185/hr",
          total: "$2,775",
        },
        {
          category: "Instruction (Flight)",
          details: "25 hrs @ $60/hr",
          total: "$1,500",
        },
        {
          category: "Simulator Time",
          details: "5 hrs @ $50/hr",
          total: "$250",
        },
        {
          category: "Simulator Instruction",
          details: "5 hrs @ $60/hr",
          total: "$300",
        },
        {
          category: "Ground Instruction",
          details: "30 hrs @ $60/hr",
          total: "$1,800",
        },
        {
          category: "Pre/Post Briefings",
          details: "20 hrs @ $60/hr",
          total: "$1,200",
        },
        { category: "Checkride Fee", details: "One-time", total: "$1,200" },
        {
          category: "Additional Misc. Costs",
          details: "Books, materials, headset, etc.",
          total: "$4,275",
        },
      ],
    },

    cta: {
      imagePath:
        "/src/assets/stock-steward-masweneng-n9By7oBszM0-unsplash.webp",
      imageAlt: "Female pilot smiling",
      title: "Ready to Become a Pilot?",
      description:
        "Join FlyTech and earn your Private Pilot Certificate through expert-led training and real-world flight experience. Your journey to the skies starts here.",
      button: {
        name: "Enroll Now",
        link: "/#enroll",
      },
    },

    faqs: [
      {
        question: "What are the age requirements to begin training?",
        answer:
          "You can begin training at 14, fly solo at 16, and must be at least 17 to obtain your Private Pilot Certificate.",
      },
      {
        question: "How long does it take to earn the certificate?",
        answer:
          "Most students complete the program in 3–6 months, depending on their schedule and training frequency.",
      },
      {
        question: "Do I need prior flying experience?",
        answer:
          "Not at all! This program is designed for beginners with no previous flight experience.",
      },
      {
        question: "Do I need a medical certificate?",
        answer:
          "Yes. A valid driver’s license or an FAA medical certificate is required, depending on your specific certification path.",
      },
    ],
  },
};

export default privatePilotData;
