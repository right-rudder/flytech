const homePage = {
  data: {
    //SEO Header Stuff
    pageDescription:
      "FlyTech Pilot Academy offers flight training in Saint Joseph, MO. We provide modern instruction in private pilot training, sport pilot certificates, instrument and commercial ratings, and more.",
    pageKeywords:
      "pilot academy, flight training, sport pilot license, private pilot, instrument rating, commercial pilot training, Saint Joseph, Kansas, FlyTech",

    //top header
    header: {
      imagePath: "/src/assets/placeholder-img.webp",
      imageAlt: "FlyTech Pilot Academy team on the runway",
      headerH1: `MODERN FLIGHT TRAINING FOR ALL`,
      paragraph:
        "FlyTech Pilot Academy offers accessible and flexible pilot training using modern aircraft, advanced simulators, and one-on-one mentorship. Whether you want to fly for fun or pursue a professional career, FlyTech helps you reach your goals.",
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-at-FlyTech",
          primary: true,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },

    airlinesCloud: {
      airlines: [],
    },

    whyElite: {
      upperHeading: "Why FlyTech Pilot Academy",
      heading: "Our Commitment",
      descriptions: [
        "Founded in 2024, FlyTech Pilot Academy was established by a group of recreational, commercial, and military pilots to bring structured, accessible flight training to smaller communities starting in St. Joseph, MO.",
        "FlyTech offers flexible Part 61 training programs, allowing students to train at their own pace or follow structured timelines. We provide Sport, Private, Instrument, and Commercial certifications using cutting-edge tools and mentorship.",
        "Our team is committed to quality over quantity, prioritizing safety, mentorship, and operational efficiency to help students become confident and capable pilots.",
      ],
      bullets: [
        {
          title: "Mentor-Focused Instructors",
          descriptions: [
            "Our CFIs are experienced professionals focused on personalized, one-on-one instruction and student mentorship.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75...",
        },
        {
          title: "Modern Training Tools",
          descriptions: [
            "Train with advanced aircraft, full-motion flight simulators, and current avionics such as ForeFlight and Garmin systems.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75...",
        },
        {
          title: "Community-Driven Mission",
          descriptions: [
            "FlyTech was created by pilots in your own backyard to make quality aviation training accessible in underserved areas.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75...",
        },
        {
          title: "Flexible Flight Schedules",
          descriptions: [
            "Choose from recommended programs lasting 6, 9, 12, or 18 months—or create your own training schedule.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75...",
        },
      ],
      imagePath: "/src/assets/placeholder-img.webp",
      imageAlt: "FlyTech Pilot Academy aircraft and instructors",
    },

    quizCTA: {
      upperHeading: "Take Our Quiz",
      heading: "Is Aviation Right For You?",
      descriptions: [
        "Flight training can feel overwhelming at first. At FlyTech, we make the journey clear and achievable by answering your questions early on.",
        "Our affordable discovery flight is your first step. Whether you train for a career or hobby, your journey starts here—with safety, mentorship, and community at the core.",
        `Take our quiz to explore if becoming a pilot is the right path for you and learn more about training with FlyTech Pilot Academy.`,
      ],
      imageLegend: `Luke Poulos<br><small class="text-white font-normal text-sm">Founder & CEO</small>`,
      imagePath: "/src/assets/placeholder-img.webp",
      imageAlt: "FlyTech Pilot Academy 172 instrument panel",
      quizModal: true,
    },

    blogfeed: {
      upperHeading: "Flight Training Insights",
      heading: "FlyTech News",
      description:
        "Stay updated with training tips, student success stories, and aviation insights from FlyTech Pilot Academy.",
    },

    flyWithUsCTA: {
      imagePath: "/src/assets/placeholder-img.webp",
      imageAlt: "FlyTech team on the runway preparing a discovery flight",
      headerH1: `<span class="text-accent-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
      paragraph:
        "Fly over St. Joseph landmarks like the Chiefs training camp and more during your discovery flight. Experience the thrill of flying and see if the skies are calling you.",
      buttons: [
        {
          name: "Schedule Today",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },

    testimonials: {
      upperHeading: "Voices from FlyTech",
      heading: "Our Students Love Us",
      headingText: [
        "At FlyTech Pilot Academy, we prioritize creating a supportive and safe learning environment where students thrive.",
        "Here’s what some of our students have to say about their training experiences.",
      ],
      buttonText: "Leave Us a Review",
      buttonLink: "https://g.co/kgs/TLWS5Yz",
      reviews: [
        // You can paste your full testimonials array here if needed
      ],
    },
  },
};

export default homePage;
