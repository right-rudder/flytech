const faqPage = {
  data: {
    // SEO Header Stuff
    pageDescription:
      "Find answers to common questions about FlyTech Pilot Academy’s flight training programs, enrollment process, costs, scheduling, and more. Get clarity before you take off.",
    pageKeywords:
      "FlyTech FAQ, flight school questions, pilot training info, aviation program answers, pilot license, discovery flights, private pilot, commercial pilot, Saint Joseph MO",

    // Top header
    header: {
      imagePath: "/src/assets/stock-mateusz-suski-ilz44HzYh5I-unsplash.webp", // Consider updating with a relevant FAQ image
      imageAlt: "Student pilot and instructor reviewing FAQ documents",
      headerH1: `FREQUENTLY <strong class="text-primary-500">ASKED QUESTIONS</strong>`,
      paragraph:
        "Got questions? We’ve compiled answers to the most common inquiries about our programs, costs, timelines, eligibility, and more. Whether you're just curious or ready to enroll, this page will guide you.",
      buttons: [
        {
          name: "Contact Us",
          link: "/contact",
          primary: true,
        },
        {
          name: "Explore Training Options",
          link: "/programs",
          primary: true,
        },
      ],
    },

    flyWithUsCTA: {
      imagePath: "/src/assets/PPL-980x653.webp",
      imageAlt: "FlyTech aircraft preparing for a discovery flight",
      headerH1: `<span class="text-primary-600">Still Have Questions?</br></span>Experience It Firsthand`,
      paragraph:
        "Book a Discovery Flight and get a firsthand feel for flying with FlyTech. It’s the perfect way to decide if aviation is right for you — and we’ll be happy to answer your questions in person.",
      buttons: [
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },
  },
};

export default faqPage;
