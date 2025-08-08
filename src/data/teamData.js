import { COMPANY_NAME } from "../consts";

const teamData = {
  pageTitle: `The FlyTech Crew | ${COMPANY_NAME}`,
  pageDescription:
    "Discover the dedicated team behind FlyTech Flight School. Our leadership and certified flight instructors are committed to providing exceptional training and support to help you achieve your aviation goals.",
  pageKeywords:
    "FlyTech Flight School team, flight instructors, aviation experts, leadership team, certified flight instructors, aviation training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/stock-pierre-goiffon-t56w7xguZWA-unsplash.webp",
    imageAlt:
      "FlyTech Flight School student and flight instructor in a Cessna airplane cockpit",
    headerH1: `Meet our <strong class="text-primary-600">TEAM</strong>`,
    paragraph: `Get to know the passionate and experienced team at FlyTech Flight School. Our leadership and certified flight instructors are dedicated to helping you succeed in your aviation journey.`,
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

  // Program Details
  details: {
    upperHeading: "Meet the Crew",
    heading: "Leadership Team",
    subHeading:
      "Our leadership team consists of skilled and experienced aviation experts who have a deep passion for the flight training and are dedicated to delivering exceptional training and support to our students.",

    leadership: [
      {
        imagePath: "/src/assets/lute-1.webp",
        imageAlt: "Lute Atieh Pilot, Managing Partner at FlyTech Flight School",
        name: "Lute Atieh",
        title: "Pilot, Managing Partner",
        summary:
          "Lute Atieh is a Pilot and Managing Partner at FlyTech Flight School. With extensive experience in aviation, Lute is dedicated to providing high-quality flight training and ensuring the safety and success of all students. His leadership and expertise in the field make him a vital part of the FlyTech team, as he works tirelessly to foster a supportive and effective learning environment for aspiring pilots.",
      },
      {
        imagePath: "/src/assets/Daniel-Lamaster.webp",
        imageAlt:
          "Daniel Lamaster Chief Flight Instructor at FlyTech Flight School",
        name: "Daniel Lamaster",
        title: "Chief Flight Instructor",
        summary:
          "Daniel Lamaster is the Chief Flight Instructor at FlyTech Flight School. With a wealth of experience in flight training, Daniel is committed to providing exceptional instruction and mentorship to students. His expertise in aviation and dedication to safety ensure that students receive the highest quality training. As a leader in the FlyTech team, Daniel plays a crucial role in shaping the next generation of skilled pilots.",
      },
      {
        imagePath: "/src/assets/Travis.webp",
        imageAlt:
          "Travis Hawkins partner and Director of Technology at FlyTech Flight School",
        name: "Travis Hawkins",
        title: "Pilot, Partner, Director of Technology",
        summary:
          "Travis Hawkins is a seasoned pilot and the Director of Technology at FlyTech Flight School. With a passion for aviation and technology, he brings a unique blend of skills to the team. Travis is dedicated to enhancing the flight training experience through innovative solutions and ensuring that students receive top-notch instruction. His commitment to excellence and safety in aviation makes him an invaluable asset to FlyTech.",
      },
      {
        imagePath: "/src/assets/Jason.webp",
        imageAlt:
          "Jason Chase Partner, Dir of H.S. Partnerships at FlyTech Flight School",
        name: "Jason Chase",
        title: "Partner, Dir of H.S. Partnerships, Student Pilot",
        summary:
          "Jason Chase is a Partner and Director of High School Partnerships at FlyTech Flight School. With a focus on building strong relationships with high schools, he plays a crucial role in expanding opportunities for students interested in aviation. As a student pilot himself, Jason understands the challenges and rewards of flight training, and he is committed to helping aspiring pilots achieve their goals. His passion for aviation and dedication to education make him a key member of the FlyTech team.",
      },
      {
        imagePath: "/src/assets/Dan-Batliner-980x980.webp",
        imageAlt:
          "Dan Batliner P.E. Partner, Student Pilot at FlyTech Flight School",
        name: "Dan Batliner P.E.",
        title: "Partner, Student Pilot",
        summary:
          "Dan Batliner P.E. is a Partner and Student Pilot at FlyTech Flight School. With a background in engineering, Dan brings a unique perspective to the aviation field. His commitment to learning and passion for flight make him an integral part of the FlyTech team. As a student pilot, Dan is dedicated to advancing his skills and knowledge in aviation, while also contributing to the growth and success of the flight school.",
      },
    ],

    heading2: "Our Certified Flight Instructors",
    subHeading2:
      "At FlyTech, our dedicated instructors prioritize delivering top-notch flight training to students. They combine their extensive aviation expertise, passion for the field, and commitment to creating a safe and supportive learning atmosphere. By doing so, they enable students to reach their aspirations and develop into proficient pilots.",

    team: [
      {
        img: "/src/assets/IMG_1279-3.webp",
        name: "Conner Musser",
        title: "Flight Instructor",
      },
      {
        img: "/src/assets/David-Ayers-980x991.webp",
        name: "David Ayers",
        title: "Flight Instructor",
      },
    ],

    cta: {
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
  },
};

export default teamData;
