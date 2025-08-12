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
      title: "Our Fleet",
      description:
        "At FlyTech Pilot Academy, we pride ourselves on maintaining a modern and reliable fleet of aircraft and simulators to provide our students with the best possible training experience. Our fleet is regularly inspected and maintained to ensure safety, performance, and comfort.",
      imagePath: "/images/fleet/fleet-overview.jpg",
      imageAlt: "Overview of FlyTech Pilot Academy's fleet",
      features: [
        {
          title: "Advanced Avionics",
          description:
            "Our airplanes are equipped with state-of-the-art avionics systems, ensuring precision navigation and enhanced safety.",
        },
        {
          title: "High Performance",
          description:
            "Experience unmatched performance with powerful engines and aerodynamic designs that deliver exceptional speed and agility.",
        },
        {
          title: "Fuel Efficiency",
          description:
            "Designed with sustainability in mind, our aircraft offer superior fuel efficiency, reducing environmental impact.",
        },
        {
          title: "Comfort and Luxury",
          description:
            "From spacious cabins to premium interiors, our airplanes provide a comfortable and enjoyable flying experience.",
        },
      ],
      others: [
        {
          title: "ForeFlight",
          description:
            "FlyTech is a ForeFlight school. Safety meets convenience with advanced runway and obstacle analysis, flight records, and access to FlyTech’s airplane handbook, pre-flight documents, and digital SOPs directly on students’ and CFIs’ iPads. We monitor student progress through logs, records, and usage data—also valuable for business forecasting. ForeFlight is included in the tuition.",
          imagePath: "/images/fleet/foreflight-logo.png",
          imageAlt: "ForeFlight logo",
        },
        {
          title: "In and Out of Cockpit Video",
          description:
            "The FlyTech VIRB Ultra 30 Aviation In-Cockpit Bundle enhances training by recording high-quality video and audio from every flight. Stereo headset audio cables capture pilot communications and ATC transmissions directly in your footage. A propeller filter ensures clear visuals, while the lightweight cage mount secures the camera inside the cockpit—perfect for reviewing and sharing your flights.",
          imagePath: "/images/fleet/garmin-virb-ultra-30.jpg",
          imageAlt: "Garmin VIRB Ultra 30 aircraft camera",
        },
      ],
      planes: [
        {
          name: "Cessna 172 Skyhawk",
          tail: "N733AJ",
          model: "C172",
          summary:
            "1976 CESSNA 172N — Fixed-wing single engine (4 seats / 1 engine)",
          year: 1976,
          manufacture: "Cessna",
          engine: "Lycoming O-320 Series (Reciprocating)",
          weight: "Less than 12,500 lbs",
          horsepower: "180 hp",
          airworthiness: "Standard",
          speed: "105 mph",
          imagePath: "/images/fleet/cessna-172.jpg",
          imageAlt: "Cessna 172 Skyhawk aircraft",
          description:
            "The Cessna 172 Skyhawk is the world’s most popular training aircraft, celebrated for its reliability, forgiving handling, and excellent safety record. It’s the perfect choice for both new and experienced pilots looking to refine their skills.",
          features: [
            "Four-seat capacity",
            "High-wing design for stability and visibility",
            "Simple yet reliable avionics",
          ],
          avionics: [
            "Garmin GNS 430 GPS/NAV/COM",
            "Dual NAV/COM radios",
            "VOR with glideslope",
          ],
          equipment: [
            "Dual yoke controls",
            "Manual flaps",
            "Standard six-pack instrument layout",
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
            "2023 SLING AIRCRAFT (PTY) LTD SLING LSA — Fixed-wing single engine (2 seats / 1 engine)",
          year: 2023,
          manufacture: "Sling Aircraft",
          engine: "Rotax 912 iS (4 Cycle)",
          weight: "Less than 12,500 lbs",
          horsepower: "100 hp",
          airworthiness: "Light Sport / Acrobatic",
          speed: "120 mph",
          imagePath: "/images/fleet/sling-lsa.jpg",
          imageAlt: "Sling LSA aircraft on runway",
          description:
            "The Sling LSA is a cutting-edge, lightweight sport aircraft designed for agility, efficiency, and comfort. With modern glass cockpit avionics, excellent fuel economy, and responsive handling, it’s ideal for both training and recreational flying.",
          features: [
            "Two-seat configuration",
            "All-metal low-wing design",
            "Modern glass cockpit avionics",
          ],
          avionics: [
            "Garmin G3X Touch EFIS",
            "Garmin GTX 335 Transponder",
            "Garmin G5 with integral battery",
            "Garmin GTN 650",
            "Angle of Attack indicator",
            "Internal Red LED Cabin Light",
          ],
          equipment: [
            "Rotax 912 ULS (100 hp) & Rotax 912iS",
            "Whirlwind Carbon Fiber Prop",
            "Automatic Carb Heat & Electrically Operated Pitch Trim",
            "Aileron and Elevator Pushrod Controls",
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
      simulators: [
        {
          name: "Redbird FMX",
          description:
            "The Redbird FMX is a full-motion flight simulator designed to prepare students for real-world flying. Training here builds confidence, decision-making skills, and the ability to handle any situation in the air.",
          imagePath: "/images/fleet/redbird-fmx.jpg",
          imageAlt: "Redbird FMX flight simulator",
          images: [
            {
              imagePath: "/images/fleet/redbird-fmx-side.jpg",
              imageAlt: "Redbird FMX side view",
            },
            {
              imagePath: "/images/fleet/redbird-fmx-cockpit.jpg",
              imageAlt: "Redbird FMX cockpit",
            },
          ],
          features: [
            "Full-motion flight simulator",
            "Realistic cockpit environment",
            "Advanced avionics simulation",
          ],
        },
      ],
    },

    testimonials: {
      title: "What our pilots say",
      description:
        "Hear from our students about their experiences training with FlyTech Pilot Academy.",
      testimonials: [
        {
          name: "Daniel Lamaster",
          role: "",
          feedback:
            "Flying the Sling NGT with FlyTech was an exhilarating experience. The aircraft’s reliability and performance are unmatched!",
          imagePath: "",
          imageAlt: "Daniel Lamaster, Pilot",
        },
        {
          name: "Conner Musser",
          role: "",
          feedback:
            "The Sling NGT was a joy to fly. FlyTech’s attention to detail made my training seamless and enjoyable.",
          imagePath: "",
          imageAlt: "Conner Musser, Pilot",
        },
        {
          name: "George Hawkins",
          role: "",
          feedback:
            "As an aviation enthusiast, I was thrilled by the availability. The team truly understands a pilot’s needs.",
          imagePath: "",
          imageAlt: "George Hawkins, Pilot",
        },
        {
          name: "Elijah Leininger",
          role: "",
          feedback:
            "The avionics and technology in the Sling NGT are next-level! This aircraft is packed with innovation. Anyone would be impressed by its advanced features.",
          imagePath: null,
          imageAlt: "Elijah Leininger, Pilot",
        },
        {
          name: "David Ayers",
          role: "",
          feedback:
            "As a pilot, I’ve experienced firsthand how Avi Technology enhances the Sling NGT. The advanced avionics, efficiency, and safety features make a noticeable difference. Adding real-world applications.",
          imagePath: null,
          imageAlt: "David Ayers, Pilot",
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

export default fleetPage;
