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
    title: "Essential Training Materials",
    categories: [
      {
        name: "New Enrolling Student",
        items: [
          {
            title: "New Student Interview Guide",
            link: "https://flystj.com/wp-content/uploads/2025/03/2-New-Student-Interview-Guide.pdf",
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
            link: "https://flystj.com/wp-content/uploads/2025/03/Pilot-Operating-Handbook-Rev-3.2.pdf",
            type: "PDF",
          },
          {
            title: "Maneuvers Manual",
            link: "https://flystj.com/wp-content/uploads/2025/03/Sling-LSA-Maneuver-Guide.pdf",
            type: "PDF",
          },
          {
            title: "Sling 912iS Checklist",
            link: "https://flystj.com/wp-content/uploads/2025/07/Updated-Sling-Checklist.pdf",
            type: "PDF",
          },
        ],
      },
    ],
  },

  // Additional Sections
  medicalResources: {
    title: "Aviation Medical Examiners",
    providers: [
      {
        name: "Dr. Sam Barton, DO",
        specialty: "Aviation Medical Examiner",
        phone: "816-632-2139",
        link: "https://www.cameronregional.org/physician/sam-barton-do",
      },
      {
        name: "Aaron Florkowski, MD",
        specialty: "Colorblind Testing",
        phone: "913-787-6724",
        link: "https://kansascityame.com/",
      },
    ],
  },

  recommendedGear: {
    title: "Recommended Student Gear",
    description: "Check out our Amazon wishlist for recommended equipment:",
    link: {
      text: "View Gear List",
      url: "https://www.amazon.com/hz/wishlist/ls/3BBJYS4D00N6I?ref_=wl_share",
    },
  },

  videoResources: {
    title: "Helpful Training Videos",
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

  youtubeChannels: {
    title: "Recommended YouTube Channels",
    channels: [
      {
        name: "Pilot Debrief",
        link: "https://youtube.com/@pilot-debrief",
      },
      {
        name: "Blancolirio",
        link: "https://youtube.com/@blancolirio",
      },
      {
        name: "Mentour Pilot",
        link: "https://youtube.com/@mentourpilot",
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
