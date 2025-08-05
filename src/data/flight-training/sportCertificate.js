import { COMPANY_NAME } from "../../consts";

const sportPilotData = {
  pageTitle: `Sport Pilot Certificate | ${COMPANY_NAME}`,
  pageDescription:
    "Earn your Sport Pilot Certificate at FlyTech Flight School. Learn to fly light sport aircraft with less training time and no medical certificate required.",
  pageKeywords:
    "sport pilot certificate, light sport aircraft, learn to fly, FAA sport license, fly small planes, pilot training Missouri",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/placeholder-img.webp",
    imageAlt: "Light sport aircraft flying in Missouri skies",
    headerH1: `Get Started with a <strong class="text-primary-600">Sport Pilot Certificate</strong>`,
    paragraph: `Looking for a fun, affordable, and efficient way to become a pilot? The Sport Pilot Certificate is ideal for flying light aircraft with fewer training hours and simpler requirements.`,
    buttons: [
      {
        name: "Start Flying",
        link: "/enroll-at-FlyTech",
        primary: true,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Fly Light. Fly Free.",
    heading: "Sport Pilot Certificate",
    subHeading:
      "Perfect for recreational pilots, the Sport Pilot Certificate lets you fly smaller, lighter aircraft with less training time and lower costs.",

    title: "Program Overview",
    description: `
      Introduced in 2004, the Sport Pilot Certificate is a streamlined FAA pilot license designed for those who want to fly small, lightweight aircraft for fun or personal travel. It’s a great option if you're looking for a faster, more affordable path to the skies—without compromising safety or enjoyment.
      <br/><br/>
      Sport pilots are limited to flying aircraft with no more than two seats and a maximum takeoff weight under 1,320 lbs. The training requires fewer hours than a traditional Private Pilot certificate and can often be completed without an FAA medical certificate—just a valid U.S. driver’s license is enough.
      <br/><br/>
      FlyTech’s Sport Pilot program covers all FAA-required dual and solo flight time, cross-country navigation, and checkride preparation—getting you safely and confidently into the air.`,

    keyPoints: [
      "Only 20 hours of total flight time required (minimum FAA requirement)",
      "Ideal for flying small, two-seat aircraft under 1,320 lbs",
      "15 hours of dual instruction with a certified instructor",
      "5 hours of supervised solo flight, including cross-country",
      "No FAA medical certificate required (with valid U.S. driver’s license)",
      "Perfect for recreational flying and personal adventure",
    ],

    cta: {
      imagePath: "/src/assets/placeholder-img.webp",
      imageAlt: "Student pilot pre-flighting a light sport aircraft",
      title: "Take Flight, Your Way",
      description:
        "Join FlyTech and earn your Sport Pilot Certificate with fewer hours, lower cost, and maximum fun. Start flying light sport aircraft today.",
      button: {
        name: "Enroll Today",
        link: "/enroll-at-FlyTech",
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
          "Yes! You’ll complete at least one solo cross-country over 75 NM with two different landings. Sport pilots can fly cross-country as long as they stay within allowed airspace.",
      },
    ],
  },
};

export default sportPilotData;
