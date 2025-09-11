import { COMPANY_NAME } from "../../consts";

const rustyPilotICP = {
  pageTitle: `Rusty Pilot & IPC Program | ${COMPANY_NAME}`,
  pageDescription:
    "Haven’t flown in a while? Regain your skills and confidence with FlyTech’s Rusty Pilot and Instrument Proficiency Check (IPC) programs. Brush up on regulations, sharpen your flying skills, and get back in the cockpit with expert support.",
  pageKeywords:
    "rusty pilot Missouri, Saint Joseph flight school, instrument proficiency check, IPC training, flight review, pilot refresher program",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/cockpit-flying-slinger.webp",
    imageAlt: "FlyTech Pilot Academy instructor and pilot during IPC training",
    headerH1: `Rusty Pilot & <strong class="text-primary-600">IPC Program</strong>`,
    paragraph: `If it’s been months or years since you last flew, FlyTech can help you shake off the rust. Our Rusty Pilot and IPC programs are designed to refresh your knowledge, restore your confidence, and prepare you for safe flying again, whether for VFR or IFR operations.`,
    buttons: [
      {
        name: "Schedule Your Session",
        link: "/#enroll",
        primary: true,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Get Back in the Cockpit With",
    heading: "Rusty Pilot & Instrument Proficiency",
    subHeading:
      "From a simple Flight Review to a full Instrument Proficiency Check, FlyTech helps you return to flying safely and confidently.",

    title: "Program Overview",
    description: `
      FlyTech’s Rusty Pilot program is tailored for aviators who have been out of the cockpit and want to return. We’ll review essential FAA regulations, airspace updates, weather briefing, and flight planning before moving into hands-on flying.
      <br/><br/>
      For instrument-rated pilots, our IPC program offers both simulator and in-aircraft training to sharpen IFR procedures. You'll practice holding patterns, instrument approaches, missed approaches, and cross-country planning with modern avionics and our Redbird MCX simulator.
      <br/><br/>
      By the end of the program, you’ll meet the FAA requirements for either a Flight Review or IPC, ensuring you’re current, confident, and safe to fly again.`,

    keyPoints: [
      "Customized ground and flight training based on your needs",
      "Covers FAA Flight Review or Instrument Proficiency Check requirements",
      "Includes Redbird MCX simulator time for IFR refresh",
      "Focus on confidence-building and safe flying habits",
      "Flexible scheduling to match your availability",
    ],

    pricing: {
      assumptions: [
        { item: "Aircraft Rental (WET)", rate: "$185/hr" },
        { item: "Instructor Rate", rate: "$60/hr" },
        { item: "Simulator Time", rate: "$50/hr" },
        { item: "Ground School", rate: "$60/hr" },
      ],
      estimatedTotal: "Varies – $845 to $2,500+ depending on experience",
      breakdown: [
        {
          category: "Ground Instruction",
          details: "2–6 hrs @ $60/hr",
          total: "$120–$360",
        },
        {
          category: "Flight Instruction",
          details: "2–6 hrs @ $60/hr",
          total: "$120–$360",
        },
        {
          category: "Aircraft Rental",
          details: "2–6 hrs @ $185/hr",
          total: "$370–$1,110",
        },
        {
          category: "Simulator Training",
          details: "1–3 hrs @ $50/hr",
          total: "$50–$150",
        },
      ],
    },

    cta: {
      imagePath:
        "/src/assets/stock-steward-masweneng-n9By7oBszM0-unsplash.webp",
      imageAlt: "Pilot reviewing flight plan with instructor",
      title: "Ready to Shake Off the Rust?",
      description:
        "Join FlyTech’s Rusty Pilot & IPC programs to regain proficiency, restore your confidence, and return to the skies with expert guidance.",
      button: {
        name: "Book Your Session",
        link: "/#enroll",
      },
    },

    faqs: [
      {
        question: "Do I need to start from scratch?",
        answer:
          "Not at all. Our Rusty Pilot and IPC programs are designed to build on your existing certificate and experience, tailored to your specific needs.",
      },
      {
        question: "How long will it take?",
        answer:
          "Most pilots refresh their skills in 2–6 flights, but it depends on your goals and how long you’ve been away from flying.",
      },
      {
        question: "What if I only need a Flight Review?",
        answer:
          "We can complete a Flight Review (BFR) during your Rusty Pilot program, ensuring you meet FAA requirements to act as PIC again.",
      },
      {
        question: "Is simulator training required?",
        answer:
          "Simulator sessions aren’t required but are strongly recommended, especially for instrument-rated pilots preparing for an IPC.",
      },
    ],
  },
};

export default rustyPilotICP;
