import cro from "../assets/images/conversion/cro.svg";
import dataDriven from "../assets/images/conversion/dataDriven.svg";
import landingPage from "../assets/images/conversion/landingPage.svg";

import dataDrivenGif from "../assets/gifs/dataDriven.gif";
import croGif from "../assets/gifs/cro.gif";
import landingPageGif from "../assets/gifs/landingPage.gif";

// digital page assets
import product from "../assets/images/digital/product.svg";
import market from "../assets/images/digital/market.svg";
import growth from "../assets/images/digital/growth.svg";

import producGif from "../assets/gifs/product.gif";
import marketGif from "../assets/gifs/market.gif";
import growthGif from "../assets/gifs/growth.gif";

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

export const digitalOptimisationData = {
  title: "Our 3-Step Product Launch & Growth Framework",
  step: [
    {
      id: 1,
      image: product,
      heading: "Product Development",
      detail1:
        "We collaborate with your team to rapidly prototype, test, and refine your product using human-centered design principles.",
      gif: producGif,
      headingList: [
        "Customer Research & Persona Development – Identify key user needs and pain points.",
        "Rapid Prototyping & Usability Testing – Build and test interactive mockups before development",
        "MVP Development Roadmap – Define the core features to launch efficiently.",
      ],
      subHeading: "Why This Matters:",
      list: [
        "Ensures you build what your users actually need.",
        "Saves time and resources by validating ideas before launch.",
      ],
    },
    {
      id: 2,
      image: market,
      heading: "Go-To-Market (GTM) & Marketing Strategy",
      detail1:
        "We create a holistic launch plan that combines growth marketing, paid media, and organic strategies to drive user acquisition",
      gif: marketGif,
      headingList: [
        "Brand Positioning & Messaging – Craft a compelling story that resonates with your audience",
        "Paid & Organic Marketing Strategy – Set up performance-driven campaigns for maximum reach.",
        "App Store & Web Optimization – Ensure high conversion rates from your landing pages & app store listings",
      ],
      subHeading: "Why This Matters:",
      list: [
        "Maximize your visibility and reach from the start.",
        "Drives targeted, high-intent users to your product.",
      ],
    },
    {
      id: 3,
      image: growth,
      heading: "Analytics, Growth, & Optimization",
      detail1:
        "A successful launch is only the beginning. We set up the right tracking and analytics to ensure continuous improvement.",
      gif: growthGif,
      headingList: [
        "Event Tracking & Conversion Analytics – Implement Google Analytics, Firebase, or Adjust for accurate performance tracking.",
        "A/B Testing & CRO – Optimize landing pages, onboarding, and purchase flows for higher conversions.",
        "Growth & Monetization Strategy –  Leverage retention loops, referral programs, and pricing models to maximize lifetime value (LTV).",
      ],
      subHeading: "Why This Matters:",
      list: [
        "Ensures every marketing dollar is optimized for ROI.",
        "Helps you scale with data-backed growth strategies.",
      ],
    }
  ]
};
