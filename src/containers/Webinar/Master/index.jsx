import Turn from "../../../assets/images/herosection/turn.svg";
import Proven from "../../../assets/images/herosection/proven.svg";
import Level from "../../../assets/images/herosection/level.svg";
import Case from "../../../assets/images/herosection/case.svg";

import "./master.scss";
import FadeUp from "../../../hooks/FadeUp";

export default function Master() {
  const data = [
    {
      image: Turn,
      text: "Web-to-App Funnels",
      para: "Turn web visitors into loyal app users.",
    },
    {
      image: Proven,
      text: "In-App UX",
      para: "Proven strategies to engage users & cut churn.",
    },
    {
      image: Level,
      text: "AI-Driven Experiments:",
      para: "Level up user research & hypothesis testing.",
    },
    {
      image: Case,
      text: "Winning Insights:",
      para: "Case studies from top-performing apps & websites.",
    },
  ];
  return (
    <>
      <section className=" container about">
        <div className="table">
         {/* <FadeUp>  */}
            <h1>What Will You Master?</h1>
          {/* </FadeUp> */}
          <div className="elements">
            {data.map((ele, index) => (
              <div key={index} className="sub-elements">
                <div className="block" key={index}>
                  <div className="image">
                    <img src={ele.image} alt="" />
                  </div>
                  <div className="text">
                    <FadeUp>
                      <p className="p1">{ele.text}</p>
                    </FadeUp>
                    <FadeUp>
                      <p className="p2">{ele.para}</p>
                    </FadeUp>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
