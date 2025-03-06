import appUx from "../assets/images/conversion/appUx.svg";
import appPerformance from "../assets/images/conversion/appPerformance.svg";
import appAnalytics from "../assets/images/conversion/appAnalytics.svg";

import appUxGif from "../assets/gifs/appUx.gif";
import appPerformanceGif from "../assets/gifs/appPerformance.gif";
import appAnalyticsGif from "../assets/gifs/appAnalytics.gif";

export const ourServiceInclude = {
  title: "Our Services Include",
  step: [
    {
      id: 1,
      image: appUx,
      heading: "App UX Audit & Optimization",
      detail1:
        "We conduct a thorough analysis of your app's user experience, assessing over 360 parameters, including homepage design, navigation, search functionality, product listings, and checkout processes. This audit identifies usability issues and provides 30 prioritized, research-backed recommendations for improvement, each accompanied by best-practice examples from leading apps.",

      gif: appUxGif,
      subHeading: "How this benefits your business",
      list: [
        "Enhances user satisfaction and retention.",
        "Identifies and resolves usability issues hindering conversion",
        "Provides a competitive performance benchmark against industry leaders.",
      ],
    },

    {
      id: 2,
      image: appPerformance,
      heading: "App Performance & Store Optimization",
      detail1:
        "We evaluate your app's technical performance, focusing on load times, crash rates, and API responsiveness. Additionally, our App Store Optimization services improve your app's visibility and conversion rates by analyzing and enhancing your app's store listing.",

      gif: appPerformanceGif,
      subHeading: "How this benefits your business",
      list: [
        "Ensures a seamless and reliable user experience.",
        "Increases organic downloads through improved store visibility.",
        "Boosts user trust and app ratings.",
      ],
    },
    {
      id: 3,
      image: appAnalytics,
      heading: "App Analytics and Measurement Audit",
      detail1:
        "A well-implemented analytics infrastructure accurately tracks your audience across various channels. Without full implementation of Analytics, you may experience inaccurate data and unreliable insights. We ensure accuracy and reliability in data collection (including Event Tracking Implementation and Reporting.",

      gif: appAnalyticsGif,
      subHeading: "How this benefits your business",
      list: [
        "Accurate Tracking - Capture every interaction and conversion across all channels.",
        "Smarter Decisions - Base critical business moves on complete, reliable data.",
        "Maximize ROI - Identify what truly drives growth and invest in winning campaigns.",
      ],
    },
  ],
};
