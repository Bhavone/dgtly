import ETND from "../../../assets/images/herosection/etndlogo.svg";
import DGTLY from "../../../assets/images/herosection/dgtlylogo.svg";
import "./services.scss";
import FadeUp from "../../../hooks/FadeUp";

export default function Services1() {
  const data = [
    {
      image: ETND,
      para: "CTA Digital is a UX consulting agency founded by the Ex-Google offering the all-time-popular UX workshop formats, refined over years of testing with the Google UX team, including mobile UX audits, Mobile Labs, and Google Design Sprints.",
    },
    {
      image: DGTLY,
      para: "DGTLY is a consultancy helping customers with conversion rate optimisation, growth consulting, and digital strategy across diverse industries. We help businesses optimize their web and app experiences to drive high engagement, maximize conversions, and achieve sustainable ROI.",
    },
  ];

  return (
    <section className="container services">
      <div className="table">
        <FadeUp>
          <h1>Brought To You By</h1>
        </FadeUp>
        <div className="elements">
          {data.map((ele, index) => (
            <div className="block-wrapper" key={index}>
              <div className="block">
                <div className="image">
                  <img src={ele.image} alt="Service Image" />
                </div>
                <div className="text">
                  <FadeUp>
                    <p className="p1">{ele.para}</p>
                  </FadeUp>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
