const fleetPage = {
  data: {
    // SEO Header Stuff
    pageDescription:
      "Find answers to common questions about FlyTech Pilot Academy’s flight training programs, enrollment process, costs, scheduling, and more. Get clarity before you take off.",
    pageKeywords:
      "FlyTech FAQ, flight school questions, pilot training info, aviation program answers, pilot license, discovery flights, private pilot, commercial pilot, Saint Joseph MO",

    // Top header
    header: {
      imagePath: "/src/assets/stock-tadeu-jnr-kAzSa_azENM-unsplash.webp", // Consider updating with a relevant FAQ image
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

    fleet: {
      planes: [
        {
          name: "Cessna 172 Skyhawk",
          tail: "N733AJ",
          model: "C172",
          summary:
            "1976 CESSNA 172N Fixed wing single engine (4 seats / 1 engine)",
          year: 1976,
          manufacture: "Cessna",
          engine: "LYCOMING O-320 SERIES (Reciprocating)",
          weight: "Less than 12,500 lbs",
          horsepower: "180 hp",
          airworthiness: "Standard",
          speed: "105 mph",
          imagePath: "/images/fleet/cessna-172.jpg",
          imageAlt: "Cessna 172 Skyhawk aircraft",
          description:
            "The Cessna 172 Skyhawk is the world’s most popular training aircraft, known for its reliability and ease of handling. Perfect for new pilots.",
          features: [
            "Four-seat capacity",
            "High-wing design for stability",
            "Simple avionics for easy navigation",
          ],
          images: [
            {
              imagePath: "/images/fleet/cessna-172-side.jpg",
              imageAlt: "Cessna 172 side view",
            },
            {
              imagePath: "/images/fleet/cessna-172-cockpit.jpg",
              imageAlt: "Cessna 172 cockpit",
            },
          ],
        },
        {
          name: "2023 Sling LSA",
          tail: "N900FT",
          model: "LSA 2023",
          summary:
            "2023 SLING AIRCRAFT (PTY) LTD SLING LSA Fixed wing single engine (2 seats / 1 engine)",
          year: 2023,
          manufacture: "Sling Aircraft",
          engine: "ROTAX 912 iS (4 Cycle)",
          weight: "Less than 12,500 lbs",
          horsepower: "100 hp",
          airworthiness: "Light Sport / Acrobatic",
          speed: "120 mph",
          imagePath: "/images/fleet/sling-lsa.jpg",
          imageAlt: "Sling LSA aircraft on runway",
          description:
            "The Sling LSA is a modern, lightweight sport aircraft offering exceptional efficiency and handling. Ideal for training and recreational flying, it combines advanced avionics with a sleek design.",
          features: [
            "Two-seat configuration",
            "All-metal low-wing design",
            "Modern glass cockpit avionics",
          ],
          images: [
            {
              imagePath: "/images/fleet/sling-lsa-side.jpg",
              imageAlt: "Sling LSA side view",
            },
            {
              imagePath: "/images/fleet/sling-lsa-cockpit.jpg",
              imageAlt: "Sling LSA cockpit",
            },
          ],
        },
      ],
    },
    fleetGrid: {
      title: "",
      description: "",
      imagePath: "",
      imageAlt: "",
      fleet: {},
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

export default fleetPage;
