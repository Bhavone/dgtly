import FadeUp from "../../hooks/FadeUp";

import "./partnerWithUs.scss";

const PartnerWithUs = () => {
  return (
    <div className="container partnerWithUsContainer">
      <FadeUp>
        <h2 className="commonHeading">Partner with Us</h2>
      </FadeUp>

      <div className="partnerDetail">
        <FadeUp>
          <p className="partnerContent">
            At DGTLY.IO, we combine rigorous UX analysis with strategic growth
            consulting to transform your app into a user-centric,
            revenue-generating platform. Our tailored approach ensures that
            every aspect of your app aligns with industry best practices and
            user expectations.
          </p>
        </FadeUp>

        <FadeUp>
          <p className="partnerContentDetail">
            Let&apos;s collaborate to elevate your app&apos;s performance and
            achieve sustainable growth. 🚀
          </p>
        </FadeUp>
      </div>
    </div>
  );
};

export default PartnerWithUs;
