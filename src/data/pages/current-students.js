const currentStudents = {
  // SEO Header Stuff
  pageTitle: "New Student Resources | FlyTech Pilot Academy",
  pageDescription:
    "Essential resources for new students at FlyTech Pilot Academy. Download manuals, checklists, syllabi, and more to start your pilot training journey in Saint Joseph, MO.",
  pageKeywords:
    "pilot training, flight school resources, student pilot, private pilot materials, Sling LSA, aviation manuals, flight training documents",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/N900FT.webp",
    imageAlt:
      "FlyTech Flight School Sling aircraft parked on ramp at Rosecrans Memorial Airport",
    headerH1: `NEW STUDENT</br><span class="text-primary-600">RESOURCES</span>`,
    paragraph:
      "Everything you need to begin your aviation journey with FlyTech Pilot Academy. Download essential documents, watch instructional videos, and access recommended materials to prepare for your training.",
    buttons: [
      {
        name: "Enroll Now",
        link: "/enroll-at-FlyTech",
        primary: true,
      },
    ],
  },

  // Page Content Sections
  resources: {
    upperheading: "Essential ",
    title: "Essential Training Materials",
    description:
      "Download these essential documents to prepare for your training at FlyTech Pilot Academy. These resources will help you get started with your flight training and familiarize yourself",
    categories: [
      {
        name: "New Enrolling Student",
        description:
          "Download these essential documents to prepare for your training at FlyTech Pilot Academy.",
        items: [
          {
            title: "New Student Interview Guide",
            link: "students/2-New-Student-Interview-Guide.pdf",
            type: "PDF",
          },
          {
            title: "Ground School",
            link: "https://drive.google.com/file/d/1T5dL1VipVh8Ba15kUuv5Yz6MNW6iFSxF/view?usp=drive_link",
            type: "PDF",
          },
          {
            title: "Liability Waiver",
            link: "https://drive.google.com/file/d/1WdtvAY_NFuowfp1xK3s1my1kvFPR87nG/view?usp=drive_link",
            type: "PDF",
          },
        ],
      },

      {
        name: "Aircraft Documentation",
        items: [
          {
            title: "Airplane Manual",
            link: "students/Pilot-Operating-Handbook-Rev-3.2.pdf",
            type: "PDF",
          },
          {
            title: "Maneuvers Manual",
            link: "students/Sling-LSA-Maneuver-Guide.pdf",
            type: "PDF",
          },
          {
            title: "Sling 912iS Checklist",
            link: "students/Updated-Sling-Checklist.pdf",
            type: "PDF",
          },
          {
            title: "Sling 2 and Sling LSA Maintenance",
            link: "students/Sling-2-LSA-Maintenance-Manual-Rev-2.9.pdf",
            type: "PDF",
          },
        ],
      },
      {
        name: "Recommended Student Gear",
        description: "Check out our Amazon wishlist for recommended equipment:",
        items: [
          {
            title: "View Gear List",
            link: "https://www.amazon.com/hz/wishlist/ls/3BBJYS4D00N6I?ref_=wl_share",
            type: "PDF",
          },
        ],
      },
    ],
  },

  other: {
    upperheading: "Others Resources",
    title: "Useful Documents",
    description:
      "These documents are useful for all students at FlyTech Pilot Academy. Download them to access important information about your training and the aircraft you'll be flying.",
    categories: [
      {
        name: "Useful Documents",
        items: [
          {
            title: "Liability waiver",
            description: "Please sign this waiver before your first flight.",
            link: "https://drive.google.com/file/d/1WdtvAY_NFuowfp1xK3s1my1kvFPR87nG/view",
            type: "PDF",
          },
          {
            title: "Private Pilot Certificate",
            description:
              "Everything you need to know about becoming a Private Pilot.",
            link: "students/Private-Pilot-Everything-You-Need-To-Know.pdf",
            type: "PDF",
          },
          {
            title: "Gold Seal Sign up",
            description:
              "Sign up for Gold Seal Online Ground School to access comprehensive training materials.",
            link: "students/Gold-Seal-Sign-Up.pdf",
            type: "PDF",
          },
          {
            title: "Media consent form",
            description:
              "Please sign this form to allow us to use your images and videos for promotional purposes.",
            link: "students/FlyTech-Media-Consent-Form.pdf",
            type: "PDF",
          },
          {
            title: "Private Pilot Syllabus",
            description:
              "Download the Private Pilot Syllabus to understand the training structure and requirements.",
            link: "students/Private-Pilot-Syllabus-Gold-Seal-Online-Ground-School.pdf",
            type: "PDF",
          },
          {
            title: "ForeFlight W&B File for N900FT",
            description:
              "Download the ForeFlight weight and balance file for the Sling NGT (N900FT).",
            link: "https://login.foreflight.com/login?next=https%3A%2F%2Fplan.foreflight.com%2Fwb%2Fshare%2Faccept%2Ff0a74aEkEhzk",
            type: "PDF",
          },
          {
            title: "Airman Certification Standards",
            description:
              "Download the FAA's Airman Certification Standards for Private Pilot.",
            link: "https://www.faa.gov/training_testing/testing/acs",
            type: "PDF",
          },
          {
            title: "Private Pilot Check-Ride Checklist",
            description:
              "Download the checklist to prepare for your Private Pilot check-ride.",
            link: "students/FlyTech-Private-Pilot-Check-ride-Checklist.pdf",
            type: "PDF",
          },
          {
            title: "VFR Syllabus Overview",
            description:
              "Download the VFR Syllabus to understand the training structure for Visual Flight Rules.",
            link: "students/VFR-Syllabus-V1.pdf",
            type: "PDF",
          },
          {
            title: "3 Parking and Access",
            description:
              "Download the parking and access information for FlyTech Pilot Academy.",
            link: "students/3-Parking-and-Access.pdf",
            type: "PDF",
          },
          {
            title: "Student renters insurance needed for solo cross-country",
            description:
              "Students are required to carry at least $250,000 / 25,000 in Bodily injury and property damage.  Additionally the Physical damage to Non-Owned aircraft minimum is $20,000. This will roughly cost you roughly $336 per year.",
            link: "https://ap-aerospace.my.site.com/APAerospace/s/requestquote?c__step=Search",
            type: "PDF",
          },
        ],
      },
    ],
  },
  // Additional Sections
  medicalResources: {
    upperheading: "Medical",
    title: "Aviation Medical Examiners",
    description:
      "If you need to obtain an aviation medical certificate, here are some local AMEs who can assist you",
    categories: [
      {
        name: "Aviation Medical Examiner",
        description: "Find a local AME for your aviation medical needs.",
        items: [
          {
            title: "Dr. Sam Barton, DO",
            specialty: "Aviation Medical Examiner",
            phone: "816-632-2139",
            link: "https://www.cameronregional.org/physician/sam-barton-do",
          },
          {
            title: "Aaron Florkowski, MD",
            specialty: "Colorblind Testing",
            phone: "913-787-6724",
            link: "https://kansascityame.com/",
          },
        ],
      },
    ],
  },

  videoResources: {
    upperheading: "Videos",
    title: "Helpful Training Videos",
    description:
      "Watch these instructional videos to familiarize yourself with the Sling NGT and flight training procedures. These resources will help you prepare for your first lesson and understand the aircraft you'll be flying.",
    categories: [
      {
        name: "Videos",
        description:
          "Watch these instructional videos to prepare for your training.",
        items: [],
        videos: [
          {
            title: "Pre Flight The Sling NGT",
            youtubeId: "ArhGt5JgDHU",
          },
          {
            title: "Sling NGT Cockpit Tour",
            youtubeId: "mQ53FsBfvHA",
          },
          {
            title: "Student Solo Flight",
            youtubeId: "FSliFHlpze0",
          },
        ],
      },
      {
        name: "YouTube Channels",
        items: [
          {
            title: "Pilot Debrief",
            link: "https://youtube.com/@pilot-debrief",
          },
          {
            title: "Blancolirio",
            link: "https://youtube.com/@blancolirio",
          },
          {
            title: "Mentour Pilot",
            link: "https://youtube.com/@mentourpilot",
          },
          {
            title: "Aero news network",
            link: "https://www.youtube.com/@aerotvnetwork",
          },
          {
            title: "Air safety institute",
            link: "https://www.youtube.com/@airsafetyinstitute",
          },
          {
            title: "74 Gear",
            link: "https://www.youtube.com/@74gear",
          },
        ],
      },
    ],
  },

  pageSummary: {
    title: "Ready to Begin Your Aviation Journey?",
    paragraphs: [
      "These resources are designed to help you succeed in your flight training. Download the materials, watch the videos, and come prepared for your first lesson.",
      "If you have any questions about these resources or your training program, don't hesitate to contact your instructor.",
    ],
    buttons: [
      {
        name: "Contact Instructors",
        link: "/contact",
        primary: false,
      },
      {
        name: "Schedule Next Lesson",
        link: "/schedule",
        primary: true,
      },
    ],
  },
};

export default currentStudents;
