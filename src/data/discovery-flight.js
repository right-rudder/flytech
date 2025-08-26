import PageSummary from "../components/PageSummary.astro";

const discoveryFlight = {
  data: {
    //SEO Header Stuff
    pageTitle: "Discovery Flight | FlyTech Pilot Academy, Saint Joseph, MO",
    pageDescription:
      "Book a Flight at FlyTech Pilot Academy in Saint Joseph, MO. Experience the thrill of flying and see if becoming a pilot is right for you!",
    pageKeywords:
      "Discovery Flight, Flight School, Flight Training, Pilot Training, Learn to Fly, Private Pilot, Sport Pilot, Recreational Pilot, Flight Instructor, Flight Instruction, Flight School Saint Joseph, MO, Kankakee Flight School, Kankakee Flight Training, Saint Joseph Pilot Training, Saint Joseph Learn to Fly, Saint Joseph Private Pilot, Saint Joseph Sport Pilot, Saint Joseph Recreational Pilot, Saint Joseph Flight Instructor, Saint Joseph Flight Instruction",
    //

    //top header
    header: {
      stars: true,

      imagePath: "/src/assets/plane-hangar-back-sunset.webp",
      imageAlt: "FlyTech Pilot Academy flight over Saint Joseph, MO",
      headerH1: `Discovery <strong class="text-primary-600">Flight</strong>`,
      paragraph:
        "Fly at FlyTech and See if Flying is for You! Book a Flight Today!",
      buttons: [],
    },

    pageSummary: {
      title: "Experience a Discovery Flight at FlyTech",
      paragraphs: [
        "There’s no better way to see if flying is right for you than with a Discovery Flight at FlyTech. From the moment you step into the cockpit, you’ll feel what it’s like to be in control of an aircraft, guided by one of our experienced instructors.",
        "During your flight, you’ll learn the basics of handling the controls, explore the skies above, and enjoy breathtaking views,all while gaining a true sense of what pilot training is like. It’s the perfect first step whether you’re curious about aviation or ready to begin your journey toward becoming a pilot.",
      ],
      buttons: [],
    },

    form: {
      upperHeading: "Book a Flight",
      heading: "Let's Get You in the Air!",
      description: "Fill out the form below to book your discovery flight.",
      info: [
        {
          title: "What to Expect",
          paragraphs: [
            "Your Discovery Flight is designed to give you a taste of what it's like to be a pilot. You'll spend approximately 60 minutes in the air with one of our certified flight instructors, who will guide you through the basics of flying and answer any questions you may have. You'll also have the opportunity to take the controls and experience the thrill of flying firsthand.",
            "During your discovery flight, you'll sit in the pilot seat, and the FAA Certified Flight Instructor at your side will allow you to fly for the majority of the flight. A discovery flight is a great option if you’re considering an aviation career. At the end of the flight, the instructor will be able to answer any questions that you may have.",
          ],
        },
        {
          title: "What Happens After the Flight?",
          paragraphs: [
            "So, you've completed your discovery flight and are ready to take the next step? FlyTech is here to help you take flight towards your aviation dreams and attain your goals. Let's dive into what happens after your first flight with us.",
          ],
        },
      ],
      nextSteps: [
        {
          title: "Create a Training Plan",
          description:
            "Work with a certified flight instructor (CFI) to set a schedule, review the syllabus, and address any questions.",
        },
        {
          title: "Complete Prerequisites",
          description:
            "Get your medical exam, study materials, and start ground school to prepare for your written exam.",
        },
        {
          title: "Begin Flight Training",
          description:
            "Start logging flight hours, attending ground school, and mastering essential piloting skills with your CFI.",
        },
        {
          title: "Pass Your Checkride",
          description:
            "Prepare with stage checks and ensure you're confident and ready to earn your pilot's license.",
        },
        {
          title: "Continue Your Aviation Journey",
          description:
            "Keep learning with advanced ratings like an instrument or commercial certificate. Whether for fun or career, we’re here to support you.",
        },
      ],
      button: {
        text: "Contact Us",
        link: "/contact",
      },
    },
  },
};
export default discoveryFlight;
