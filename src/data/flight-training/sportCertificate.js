import { COMPANY_NAME } from "../../consts";

const sportPilotData = {
  pageTitle: `Sport Pilot Certificate | ${COMPANY_NAME}`,
  pageDescription:
    "Earn your Sport Pilot Certificate at FlyTech Pilot Academy. Learn to fly light sport aircraft with less training time and no medical certificate required.",
  pageKeywords:
    "sport pilot certificate, light sport aircraft, learn to fly, FAA sport license, fly small planes, pilot training Missouri",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/IMG_0608.webp",
    imageAlt: "Light sport aircraft flying in Missouri skies",
    headerH1: `Get Started with a <strong class="text-primary-600">Sport Pilot Certificate</strong>`,
    paragraph: `Looking for a fun, affordable, and efficient way to become a pilot? The Sport Pilot Certificate is ideal for flying light aircraft with fewer training hours and simpler requirements.`,
    buttons: [
      {
        name: "Start Flying",
        link: "/#enroll",
        primary: true,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Fly Light. Fly Free.",
    heading: "Sport Pilot Certificate",
    subHeading:
      "The Sport Pilot Certificate is the most accessible way to begin your aviation journey. Designed in 2004 to reduce training time and cost, it allows you to fly light, simple aircraft for recreation or personal travel. It’s the perfect option for anyone who wants to get in the air quickly, safely, and affordably.",

    title: "Program Overview",
    description: `
      Introduced in 2004, the Sport Pilot Certificate is a streamlined FAA license designed for those who want to fly small, lightweight aircraft for fun or personal travel. It’s a great option if you're looking for a faster, more affordable path to the skies,without compromising safety or enjoyment.
      <br/><br/>
      Sport pilots are limited to flying aircraft with no more than two seats and a maximum takeoff weight under 1,320 lbs. The training requires fewer hours than a traditional Private Pilot certificate and can often be completed without an FAA medical certificate,just a valid U.S. driver’s license is enough.
      <br/><br/>
      FlyTech’s Sport Pilot program covers all FAA-required dual and solo flight time, cross-country navigation, and checkride preparation,getting you safely and confidently into the air.`,

    keyPoints: [
      "Minimum of 20 hours total flight time",
      "15 hours dual instruction with a Certified Flight Instructor",
      "5 hours solo flight including a cross-country",
      "No FAA medical certificate required (with valid U.S. driver’s license)",
      "Designed for flying light sport aircraft under 1,320 lbs",
    ],

    cta: {
      imagePath: "/src/assets/student-in-front-of-slinger.webp",
      imageAlt: "Student pilot pre-flighting a light sport aircraft",
      title: "Take Flight, Your Way",
      description:
        "Join FlyTech and earn your Sport Pilot Certificate with fewer hours, lower cost, and maximum fun. Start flying light sport aircraft today.",
      button: {
        name: "Start Flying Today",
        link: "/discovery-flight",
      },
    },

    faqs: [
      {
        question: "What is a Sport Pilot Certificate?",
        answer:
          "It's a streamlined FAA license that allows you to fly small, two-seat light sport aircraft during daylight hours under good weather conditions.",
      },
      {
        question: "How many flight hours are required?",
        answer:
          "You must log at least 20 total hours, including 15 hours of dual instruction and 5 hours of solo flight time.",
      },
      {
        question: "Is a medical certificate required?",
        answer:
          "No FAA medical certificate is needed if you hold a valid U.S. driver’s license and meet its health standards.",
      },
      {
        question: "Can I fly cross-country with a Sport Pilot license?",
        answer:
          "Yes, you’ll complete at least one solo cross-country over 75 NM with two landings. You may fly cross-country under Sport Pilot rules within approved airspace.",
      },
    ],

    pricing: {
      assumptions: [
        { item: "TAA SEL (WET)", rate: "$185/hr" },
        { item: "Non-TAA SEL (Cherokee, WET)", rate: "$155/hr" },
        { item: "Twin (estimate)", rate: "$300/hr" },
        { item: "Instructor Rate", rate: "$60/hr" },
        { item: "Group Ground School", rate: "$30/hr" },
        { item: "Sim Time", rate: "$50/hr" },
        { item: "Enrollment / Orientation", rate: "$99 one-time" },
        { item: "Online Ground School", rate: "$300 annual" },
        { item: "Written Exam (est.)", rate: "$175" },
        { item: "Medical Exam (1st/2nd Class)", rate: "$300" },
        { item: "Solo Insurance (Optional)", rate: "$300 annual" },
        { item: "Enrollment Kit (Optional)", rate: "$2,000 one-time" },
      ],
      estimatedTotal: "$22,048",
      breakdown: [
        {
          category: "Flight & Sim Hours",
          details: "60 hrs @ $185/hr",
          total: "$11,100",
        },
        {
          category: "Flight Instruction",
          details: "40 hrs @ $60/hr",
          total: "$2,400",
        },
        {
          category: "Checkride Prep",
          details: "10 hrs @ $60/hr",
          total: "$600",
        },
        {
          category: "General Ground School",
          details: "15 hrs @ $60/hr",
          total: "$900",
        },
        {
          category: "Group Ground School",
          details: "8 hrs @ $30/hr",
          total: "$240",
        },
        { category: "Sim Time", details: "2.5 hrs @ $50/hr", total: "$125" },
        {
          category: "Checkride Interview Prep",
          details: "5 hrs @ $60/hr",
          total: "$300",
        },
        {
          category: "Pre/Post Flight Instruction",
          details: "15 hrs @ $60/hr",
          total: "$900",
        },
        {
          category: "Enrollment & Orientation",
          details: "One-time",
          total: "$199",
        },
        { category: "FAA Checkride", details: "", total: "$1,000" },
        { category: "Enrollment Kit (Optional)", details: "", total: "$2,500" },
        { category: "Medical Exam", details: "", total: "$250–$500" },
        { category: "Written Exam", details: "", total: "$175" },
        { category: "Online Ground School", details: "", total: "$399–$499" },
        { category: "Radio Comms App", details: "", total: "$60" },
        { category: "ForeFlight EFB", details: "", total: "$200" },
        { category: "Renter’s Insurance", details: "", total: "$350" },
      ],
    },
  },
};

export default sportPilotData;
