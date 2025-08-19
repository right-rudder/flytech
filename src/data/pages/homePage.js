const homePage = {
  data: {
    //SEO Header Stuff
    pageDescription:
      "FlyTech Pilot Academy offers flight training in Saint Joseph, MO. We provide modern instruction in private pilot training, sport pilot certificates, instrument and commercial ratings, and more.",
    pageKeywords:
      "pilot academy, flight training, sport pilot license, private pilot, instrument rating, commercial pilot training, Saint Joseph, Kansas, FlyTech",

    //top header
    header: {
      imagePath: "/src/assets/plane-wing-view-sky.webp",
      imageAlt: "FlyTech Pilot Academy team on the runway",
      headerH1: `MODERN <strong class="text-primary-500"> FLIGHT TRAINING </strong> <br> FOR ALL`,
      paragraph:
        "FlyTech Pilot Academy offers accessible and flexible pilot training using modern aircraft, advanced simulators, and one-on-one mentorship. Whether you want to fly for fun or pursue a professional career, FlyTech helps you reach your goals.",
      buttons: [
        {
          name: "Enroll Now",
          link: "#enroll",
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
      airlines: [
        {
          imagePath: "/src/assets/sling_logo.webp",
          imageAlt: "Sling Aircraft Logo",
          link: "https://www.google.com/",
        },
        {
          imagePath: "/src/assets/foreflight_logo-480x241.webp",
          imageAlt: "ForeFlight Logo",
          link: "https://www.google.com/",
        },
        {
          imagePath: "/src/assets/garmin_logo-300x150.webp",
          imageAlt: "Garmin Logo",
          link: "https://www.google.com/",
        },
        {
          imagePath: "/src/assets/fly_four_forces_logo-1.webp",
          imageAlt: "Fly Four Forces Logo",
          link: "https://www.google.com/",
        },
        {
          imagePath: "/src/assets/aopa-logo.webp",
          imageAlt: "AOPA Logo",
          link: "https://www.google.com/",
        },
        {
          imagePath: "/src/assets/Screenshot-2025-03-15-at-11.47.30 AM.webp",
          imageAlt: "Lightspeed Logo",
          link: "https://www.google.com/",
        },
        {
          imagePath:
            "/src/assets/Stratus-Tagline-Color-CMYK-300-Outline-980x165.webp",
          imageAlt: "Stratuss Financial Logo",
          link: "https://www.google.com/",
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
      imagePath:
        "/src/assets/discovery-flight-pilot-and-student-inside-N900FT-flying-4.webp", // Update with actual image path
      imageAlt: "Cessna 172 parked at Speedway Flight Training during sunset",
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
      imagePath: "/src/assets/student-shaking-hands-certificate.webp",
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
      imagePath: "/src/assets/student-holding-certificate.webp",
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
      imagePath: "/src/assets/PPL-980x653.webp",
      imageAlt: "FlyTech team on the runway preparing a discovery flight",
      headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
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
      buttonLink: "#enroll",
      reviews: [
        {
          title: "Tailored Training with a Personal Touch",
          body: "I am just about to finish up my private pilot license training at FlyTech. Everyone has been friendly, knowledgeable, and really cares about tailoring flight training to fit the individual student. They are also located at an airport that makes training convenient and effective.",
          author: "Corey K.",
        },
        {
          title: "Supportive Instructors, Unmatched Experience",
          body: "FlyTech was the perfect place to finish my Private Pilot License. The instructors were supportive, skilled, and truly wanted me to succeed. I couldn’t have asked for a better experience!",
          author: "Kolin W.",
        },
        {
          title: "Professional Team, Outstanding Training",
          body: "I’ve been pleased with my experience at FlyTech. It was awesome to see one of my son’s former colleagues join the instructor team—Connor Musser. The professionalism and quality of instruction here are top-notch.",
          author: "Steve C.",
        },
        {
          title: "State-of-the-Art Simulator for IFR Proficiency",
          body: "FlyTech's new full-motion flight simulator is an excellent tool for staying IFR proficient. The AATD Redbird at Hillyard Tech Center, along with instructors like Daniel and Lute, makes for a fantastic training experience.",
          author: "Caleb H.",
        },
        {
          title: "Brand New Tech & Expert Instructors",
          body: "Great flight school with a brand-new, state-of-the-art airplane! The staff is professional, knowledgeable, and truly dedicated to student success.",
          author: "J. Rice",
        },
        {
          title: "A Team That Feels Like Family",
          body: "I'm nearing my checkride for my private pilot license, and I have to commend Daniel, Connor, Eli, and Lute. They offer a wonderful level of professionalism and a supportive learning environment.",
          author: "Sam J.",
        },
        {
          title: "Cutting-Edge Planes & Exceptional Training",
          body: "FlyTech has a brand-new plane decked out with the latest Garmin tech, but what really stands out is their incredible team. They make learning enjoyable and effective—highly recommend!",
          author: "Stephen B.",
        },
        {
          title: "10/10 for Career & Passion in Aviation",
          body: "FlyTech deserves 10 stars! The staff’s expertise helps aspiring pilots gain the skills needed to break into the industry. Whether for a career or a passion, you won’t regret choosing FlyTech.",
          author: "Cole B.",
        },
        {
          title: "A Welcoming Aviation Family",
          body: "FlyTech is simply amazing. They treat students like family and make everyone feel welcome. If you’re considering a pilot’s license, start here—you won’t regret it.",
          author: "Amy N.",
        },
        {
          title: "Exceeds Expectations in Every Way",
          body: "FlyTech has exceeded my expectations! From one-on-one ground training to flight experience, it’s a blessing for our community and aspiring aviators.",
          author: "Bob B.",
        },
        {
          title: "The Best Flight School in the Midwest",
          body: "FlyTech is the best flight school in the Midwest. The instructors are highly educated, and the academy itself is excellent in every way.",
          author: "Mark C.",
        },
        {
          title: "Professionalism at Its Finest",
          body: "From the owners to the CFIs, FlyTech is nothing but professional! Whether you want a discovery flight or full licensure, there’s no better place.",
          author: "Anthony B.",
        },
      ],
    },
  },
};

export default homePage;
