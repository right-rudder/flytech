import WhoAreUs from "../components/WhoAreUs.astro";
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
    imagePath: "/src/assets/plane-orange-ground-usa-flag.webp",
    imageAlt: "FlyTech Flight School campus and facilities",
    headerH1: `Why Choose <strong class="text-primary-600">FlyTech?</strong>`,
    paragraph: `FlyTech isn’t just a flight school — it's a tight-knit team of local aviators, instructors, and mentors passionate about helping the next generation of pilots succeed. With modern training tools, hands-on experience, and a supportive environment, FlyTech offers a better, smarter way to learn to fly.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/#enroll",
        primary: true,
      },
      {
        name: "Discovery Flight",
        link: "/discovery-flight",
        primary: true,
      },
    ],
  },

  advantagesInfo: {
    title: "Why Pilots Choose FlyTech",
    upperheading: "The FlyTech Advantage",
    description:
      "At FlyTech Pilot Academy, we’re redefining flight training through innovation, accessibility, and a strong community of aviators. With modern aircraft, immersive technology, and a flexible program designed around your lifestyle, we’re committed to making your path to the skies faster, more efficient, and more enjoyable.",
    advantages: [
      {
        title: "Modern Training Aircraft",
        description:
          "Train in the Sling NGT, one of the fastest-growing training aircraft in the U.S., known for its low fuel burn and tech-rich cockpit environment.",
      },
      {
        title: "Integrated iPad Flight Bag",
        description:
          "From day one, you'll use an iPad as your primary flight bag—streamlining planning, navigation, checklists, and post-flight debriefing with ForeFlight.",
      },
      {
        title: "Advanced Garmin & Video Feedback",
        description:
          "Garmin avionics and cockpit cameras record every maneuver and communication. Post-flight video reviews help accelerate your skills and confidence.",
      },
    ],
    imagePath: "/src/assets/N900FT_2.webp", // Update with actual image path
    imageAlt: "Cessna 172 parked at Speedway Flight Training during sunset",
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
      link: "/#enroll",
      primary: true,
    },
    imagePath: "/src/assets/student-receiving-signed-shirt.webp",
    imageAlt: "FlyTech Flight School student smiling in front of an airplane",
  },

  gMaps: [
    {
      location: "St Joseph, MO",
      inverted: false,
      body: "Come visit us at our St Joseph location. We are located at Rosecrans Memorial Airport KSTJ.",
      gMapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.5819612487417!2d-94.90576712397086!3d39.771493394657824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c00533898f9425%3A0x31ee2a79086483c0!2sFlyTech%20Pilot%20Academy!5e0!3m2!1sen-US!2sus!4v1754590913913!5m2!1sen-US!2sus",
    },
  ],

  whoAreUs: {
    upperHeading: "Who We Are",
    title: "A Community of Pilots Making Flight Training Accessible",
    imagePath: "/src/assets/students_groundschool.webp",
    imageAlt:
      "FlyTech Flight School instructors and students standing in front of an airplane",
    descriptions: [
      "FlyTech is a community built by local recreational, commercial, and military pilots, united by a mission to make flight training more accessible, efficient, and enjoyable for everyone.",
      "We recognized how difficult it used to be to become a pilot—and we set out to change that. With advancements in technology and evolving regulations, it’s never been a better time to start flying.",
      "As a Part 61 flight school, we give you the flexibility to train at your own pace, or follow one of our recommended timelines (6, 9, 12, or 18 months) to fit your lifestyle.",
      "We’ve streamlined the path to your license without compromising on safety or quality—making it more affordable, more efficient, and more enjoyable.",
    ],
    bullets: [
      {
        title: "Experienced Instructors",
        numbers: "10+",
      },
      {
        title: "Pilots in Our Community",
        numbers: "100+",
      },
      {
        title: "Flexible Training Schedules",
        numbers: "4 Options",
      },
      {
        title: "Years of Combined Aviation Insight",
        numbers: "50+",
      },
    ],
  },
};

export default whyData;
