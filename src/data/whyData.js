import { COMPANY_NAME } from "../consts";

const whyData = {
  pageTitle: `Why Choose FlyTech Flight School in Saint Joseph, MO? | ${COMPANY_NAME}`,
  pageDescription:
    "FlyTech Flight School in Saint Joseph, MO offers real-world airspace experience, personalized instruction, and cutting-edge aircraft. Learn to fly with confidence in an environment designed to accelerate your success.",
  pageKeywords:
    "flight school Saint Joseph MO, pilot training Missouri, Sling NGT training aircraft, Garmin avionics, ForeFlight, flight school near Kansas City, real-world flight training Missouri",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/placeholder-img.webp",
    imageAlt: "FlyTech Flight School campus and facilities",
    headerH1: `Why Choose <strong class="text-primary-600">FlyTech?</strong>`,
    paragraph: `FlyTech isn’t just a flight school — it's a tight-knit team of local aviators, instructors, and mentors passionate about helping the next generation of pilots succeed. With modern training tools, hands-on experience, and a supportive environment, FlyTech offers a better, smarter way to learn to fly.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll-at-FlyTech",
        primary: true,
      },
      {
        name: "Discovery Flight",
        link: "/discovery-flight",
        primary: true,
      },
    ],
  },

  pageSummary: {
    title: "Why Choose FlyTech?",
    paragraphs: [
      "FlyTech is built by pilots for pilots. We combine cutting-edge training aircraft, real-world airspace exposure, and a mission-driven team to make flight training safer, faster, and more effective.",
      "From your first takeoff to advanced maneuvers, you’ll benefit from a personalized learning experience, Garmin-integrated cockpit tools, and post-flight video debriefs that accelerate your growth. Whether flying for fun or pursuing a career, FlyTech is your launchpad.",
    ],
    buttons: [
      {
        name: "Learn More",
        link: "#info",
        primary: true,
      },
    ],
  },

  contentSplit: {
    upperHeading: "Get Started",
    heading: "Launch Your Aviation Journey with Confidence",
    descriptions: [
      "At FlyTech, you’ll train in uncongested airspace while gaining experience in nearby controlled environments — preparing you for real-world flying from day one.",
      "Our instructors use Garmin avionics, ForeFlight tools, and personalized video debriefs to help you learn faster and retain more — all while flying the technologically advanced Sling NGT aircraft.",
      "Join a school that adapts to your schedule, supports your goals, and puts your success at the center of everything we do.",
    ],
    bulletsTitle: "The FlyTech Advantage",
    bullets: [
      {
        title: "Local, Passionate Instructors",
        descriptions: [
          "Train with instructors who are deeply rooted in the local community and invested in your growth every step of the way.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Advanced Training Aircraft",
        descriptions: [
          "Learn in the Sling NGT — a sleek, fuel-efficient, tech-rich aircraft built for modern pilot training.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Integrated iPad Training Tools",
        descriptions: [
          "Harness industry-leading tools like ForeFlight and Garmin avionics for real-time flight planning, weather, navigation, and post-flight learning.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Video Debriefing System",
        descriptions: [
          "Replay your flights with audio and cockpit visuals to boost learning retention and build confidence faster.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Flexible, Student-Centered Scheduling",
        descriptions: [
          "Train at your own pace with flexible scheduling options designed for students balancing school, work, or family.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Supportive Training Environment",
        descriptions: [
          "FlyTech offers a non-intimidating, encouraging environment where your success is the shared mission of every instructor and team member.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
    ],
    finalSection: {
      heading: "Ready for Takeoff?",
      descriptions: [
        "Whether you're just discovering aviation or you're ready to pursue a full-time pilot career, FlyTech has the tools, team, and tech to help you get there.",
        "Start your training in a place where you're more than a student — you're part of a community committed to your future in the skies.",
      ],
    },
    finalButton: {
      name: "Get Started",
      link: "/enroll-at-FlyTech",
      primary: true,
    },
    imagePath: "/src/assets/placeholder-img.webp",
    imageAlt: "FlyTech Flight School student smiling in front of an airplane",
  },
};

export default whyData;
