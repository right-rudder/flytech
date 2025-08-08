import { COMPANY_NAME } from "../../consts";

const instrumentRatingData = {
  pageTitle: `Instrument Rating | ${COMPANY_NAME}`,
  pageDescription:
    "Earn your Instrument Rating with FlyTech Flight School and fly safely in low-visibility conditions. Master IFR procedures, advanced navigation, and weather interpretation with expert instruction.",
  pageKeywords:
    "instrument rating flight school, IFR certification Missouri, advanced pilot training, fly in low visibility, aviation school, FAA instrument training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/stock-max-nustedt-_uwWKY22_HA-unsplash.webp",
    imageAlt: "Pilot flying with G1000 avionics during instrument flight",
    headerH1: `Elevate Your Skills with an <strong class="text-primary-600">Instrument Rating</strong>`,
    paragraph: `Enhance your ability to fly in clouds, rain, and low-visibility environments with FlyTech’s structured Instrument Training program. Learn precision navigation, ATC communication, and weather strategy from certified professionals.`,
    buttons: [
      {
        name: "Start Training",
        link: "/enroll-at-FlyTech",
        primary: true,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Advance Your Aviation Skills",
    heading: "Instrument Rating Program",
    subHeading:
      "Learn to fly under Instrument Flight Rules (IFR) and expand your capabilities, safety, and career opportunities as a pilot.",

    title: "Program Overview",
    description: `
      FlyTech’s Instrument Rating program is designed for pilots ready to take their skills to the next level. Flying under IFR allows you to safely operate in challenging weather conditions and improves your precision, situational awareness, and decision-making.
      <br/><br/>
      Whether you're flying for career advancement or personal mastery, our program blends simulator and in-aircraft instruction to prepare you for real-world scenarios. You’ll master approaches, holding patterns, IFR communications, flight planning, and more.
      <br/><br/>
      Training is flexible—choose to fly in your own airplane, ours, or our full-motion simulator, all guided by experienced Certified Flight Instructors (CFIs). We support local and travel-based training within 60 miles of KSTJ.`,

    keyPoints: [
      "Fly confidently in clouds, rain, and reduced visibility",
      "Master IFR procedures, precision navigation, and weather management",
      "Flexible training options: your aircraft, FlyTech’s fleet, or full-motion simulator",
      "Certified instructors and modern avionics: Garmin G3X, GTN 650, G5",
      "Meets FAA requirements for Instrument Rating and career advancement",
    ],

    cta: {
      imagePath: "/src/assets/stock-mateusz-suski-ilz44HzYh5I-unsplash.webp",
      imageAlt: "Pilot flying in instrument conditions",
      title: "Upgrade Your Flying",
      description:
        "Add an Instrument Rating to your pilot certificate with FlyTech’s expert instruction and flexible training options. Gain the confidence and capability to fly in all kinds of weather.",
      button: {
        name: "Schedule Your First Session",
        link: "/enroll-at-FlyTech",
      },
    },

    pricing: {
      title: "Training Options & Rates",
      options: [
        {
          title: "Train in Your Own Aircraft",
          price: "$60/hour",
          description:
            "Receive instruction in your aircraft from a Certified Flight Instructor. A one-time $249 registration and insurance fee applies. Instrument and Commercial dual training rate.",
        },
        {
          title: "Train in FlyTech Aircraft",
          price: "$185/hour",
          description:
            "Wet rate (fuel included). 9% sales tax applies to aircraft rental (not to fuel or CFI). CFI rate is $60/hour for Instrument and Commercial dual instruction.",
        },
        {
          title: "Full-Motion Simulator",
          price: "$50/hour",
          description:
            "FAA-certified for Instrument Training. Features both traditional 6-pack and Garmin G1000 avionics. Available in St. Joseph, MO. Includes yoke and stick configurations. For dual time only.",
        },
        {
          title: "Travel Training",
          price: "TBD/hour",
          description:
            "Our CFIs can travel within 60 miles of KSTJ to train you in your aircraft. Pricing depends on location and time. Aircraft ferrying also available at standard rates.",
        },
      ],
    },

    equipment: {
      title: "Aircraft & Avionics",
      features: [
        "✔ Garmin G3X Touch EFIS",
        "✔ Garmin G5 with backup battery",
        "✔ Garmin GTN 650 GPS/Nav/Comm",
        "✔ Angle of Attack Indicator",
        "✔ Red LED Cabin Lighting",
        "✔ Rotax 912 ULS (100 hp) & Rotax 912iS engines",
        "✔ Whirlwind Carbon Fiber Propeller",
        "✔ Automatic Carb Heat & Electric Pitch Trim",
        "✔ Pushrod Aileron & Elevator Controls",
      ],
    },

    faqs: [
      {
        question: "What is an Instrument Rating?",
        answer:
          "An Instrument Rating allows a pilot to fly under Instrument Flight Rules (IFR), enabling safer flight in poor visibility, clouds, or adverse weather conditions.",
      },
      {
        question: "Is the simulator approved for FAA instrument time?",
        answer:
          "Yes. Our full-motion simulator is certified and can be used toward the flight time requirements for your Instrument Rating.",
      },
      {
        question: "Can I use my own aircraft?",
        answer:
          "Absolutely. We offer instruction in your aircraft at a reduced hourly rate. Just be sure your plane is IFR-equipped and insured.",
      },
      {
        question: "How long does Instrument Training take?",
        answer:
          "Most students complete their Instrument Rating within 2–4 months, depending on frequency and prior experience.",
      },
    ],
  },
};

export default instrumentRatingData;
