import { COMPANY_NAME, PHONE_NUMBER } from "../consts";

const groundSchoolData = {
  pageTitle: `In-Person Ground School Sessions in Saint Joseph, MO | ${COMPANY_NAME}`,
  pageDescription:
    "Join FlyTech's in-person ground school sessions led by experienced instructors. Open to all student pilots—whether you're enrolled in a school or not. Just $50 for 3 hours of training in Saint Joseph, MO.",
  pageKeywords:
    "ground school Saint Joseph MO, pilot ground school, aviation classes Saint Joseph, flight training Saint Joseph, FlyTech Flight School ground school, aviation knowledge classes",

  // Top Header
  header: {
    stars: false,
    imagePath: "/src/assets/ground-school-students-4.webp",
    imageAlt: "FlyTech students participating in a ground school session",
    headerH1: `Ground School at <br>FlyTech`,
    paragraph: `Join our in-person ground school sessions in Saint Joseph, MO—open to anyone who wants to sharpen their aviation knowledge. Whether you're training at FlyTech, another school, or haven’t started flight training yet, our $50, 3-hour sessions are a great way to build your confidence and understanding. Each session is led by our instructor Dolly Woodhall and covers essential topics for every student pilot.`,
    buttons: [
      {
        name: "Sign Up Now",
        link: "#enroll",
        primary: true,
      },
      {
        name: "Call to Register",
        link: `tel:${PHONE_NUMBER}`,
        primary: true,
      },
    ],
  },
};

export default groundSchoolData;
