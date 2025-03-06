import cro from "../assets/images/conversion/cro.svg";
import dataDriven from "../assets/images/conversion/dataDriven.svg";
import landingPage from "../assets/images/conversion/landingPage.svg";

import dataDrivenGif from "../assets/gifs/dataDriven.gif";
import croGif from "../assets/gifs/cro.gif";
import landingPageGif from "../assets/gifs/landingPage.gif";

export const conversionOptimisationData = {
  title: "Our 3 Step Conversion Rate Optimisation Framework",
  step: [
    {
      id: 1,
      image: dataDriven,
      heading: "Data-Driven User Research",
      detail1:
        "We analyze user behavior, traffic sources, and drop-offs to pinpoint friction in the customer journey.",
      detail2:
        "Using user testing and experiments, we uncover what is good, key elements to enhance to increase conversions, and drive growth.",
      gif: dataDrivenGif,
      subHeading: "Here's how the research analysis benefits you:",
      list: [
        "Fix Leaks in Your Funnel - We pinpoint where users abandon the journey and optimize those areas for better flow.",
        "Increase Conversions - By refining key elements, we ensure more visitors take action—whether it's signing up, purchasing, or engaging.",
      ],
    },

    {
      id: 2,
      image: landingPage,
      heading: "Landing Page & Conversion Funnel Audits",
      detail1:
        "We audit your conversion funnel—from landing pages to checkout—to identify bottlenecks and streamline the user journey. Using data-driven insights, we optimize every touchpoint for clarity, engagement, and higher conversions.",

      gif: landingPageGif,
      subHeading: "Here's how the audit benefits you: ",
      space: true,
      list: [
        "By optimizing every interaction, we help you turn passive visitors into engaged buyers—unlocking higher growth and retention for your business.",
      ],
    },
    {
      id: 3,
      image: cro,
      heading: "CRO Recommendations",
      detail1:
        "We provide tailored recommendations based on industry best practices, ensuring key pages and elements are designed for maximum engagement and conversion. Our approach includes:",
      detail2: "Page & Element Redesigns  ",
      detail3: "  Best-in-Class Inspiration ",
      detail4: " Impact vs. Value Analysis",
      gif: croGif,
      subHeading: "Here's how the CRO recommendations benefit you:",
      list: [
        "By refining your landing pages, checkout flows, and user journeys, we help you unlock higher revenue and better ROI—without increasing ad spend.",
      ],
    },
  ],
};
