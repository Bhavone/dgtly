import Reuben from "../../../assets/images/herosection/reuben.svg";
import Vivian from "../../../assets/images/herosection/vivian.svg";
import FadeUp from "../../../hooks/FadeUp";

import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      para: "I worked with Anna on a number of high profile talks she gave at Developer events. She bought a vast amount of passion and experience to every engagement as well as a brilliantly collaborative mindset which was a pleasure to work with.<br/>A UX legend", // Added <br/> for line break
      image: Reuben,
      para1: "Reuben Milne",
      para2: "Conversions Conference MC",
    },
    {
      para: "My students really enjoyed the sharing and presentation at my Design Thinking and Innovation class at SMU earlier. All the insights were not just useful but actionable - Thank you Bhavna for sharing this on your session with us.",
      image: Vivian,
      para1: "Vivian Koh",
      para2:
        "VK Transformation Owner, Singapore Management University Educator",
    },
  ];
  return (
    <>
      <section className="container testimonials">
        <div className="testimonials-wrapper">
          {data.map((ele, index) => (
            <div className="block" key={index}>
              <FadeUp>
                <p dangerouslySetInnerHTML={{ __html: ele.para }} />
              </FadeUp>
              <div className="imageAndText">
                <div className="image">
                  <img src={ele.image} alt={ele.para1} />{" "}
                  {/* Add descriptive alt text */}
                </div>
                <div className="text">
                  <FadeUp>
                    <p className="p2">{ele.para2}</p>
                  </FadeUp>

                  <FadeUp>
                    <p className="p1">{ele.para1}</p>
                  </FadeUp>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
