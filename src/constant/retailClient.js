import challenge from "../assets/images/finTechClient/challenge.svg";
import solution from "../assets/images/finTechClient/solution.svg";
import results from "../assets/images/finTechClient/results.svg";

export const retailClientData = {
  title: "Optimizing App for a Pure Play Retail Client",
  steps: [
    {
      id: 1,
      image: challenge,
      heading: "Challenge",
      detail:
        "A retail app faced low revenue growth and user retention, impacting revenue.",
    },

    {
      id: 2,
      image: solution,
      heading: "Solution",
      list: [
        "Conducted a comprehensive UX audit, identifying key areas for improvement",
        "Implemented technical optimizations to enhance app performance.",
        "Developed personalized monetization strategies to boost user engagement and lifetime value.",
      ],
    },
    {
      id: 3,
      image: results,
      heading: "Results",
      list: [
        "Achieved a 30% increase in organic installs.",
        "Improved retention rates by 25%.",
        "Increased app revenue without additional ad spend.",
      ],
    },
  ],
};
