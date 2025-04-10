import StickyBox from "react-sticky-box";
import Star from "../../../assets/images/herosection/star.svg";
import Calandar from "../../../assets/images/herosection/Calander.svg";
import Time from "../../../assets/images/herosection/time.svg";
import "./solution.scss";
import Reserve from "../../../components/Reserve";
import CountDownTimer from "../../../components/CountDownTimer";
import FadeUp from "../../../hooks/FadeUp";

const Solution = ({ zIndexSetUp, setZIndexSetUp }) => {
  return (
    <section className="container solution">
      <div className="subSolution">
        <div className="text">
          <div className="upperText">
            <FadeUp>
              <p>
                Every second a user hesitates, you lose revenue. Discover how to
                keep them engaged.
              </p>
            </FadeUp>
            <FadeUp>
              <p className="para1">
                Join <span id="name1">Anna Potanina </span>(ex-Google UX Lead,
                Founder of <span id="digital">Call to Action Digital</span>) and
                <span id="name2"> Bhavna Taneja</span> (ex-Google UX, Founder of{" "}
                <span id="dgtly">DGTLY</span>) as they share high-impact
                strategies used by top-performing apps and websites.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="para1">
                Learn directly from these award-winning UX experts who have
                empowered leading global organizations. You&apos;ll gain
                actionable strategies, exclusive insights from top-performing
                apps, and practical tools to instantly enhance user engagement,
                drive higher conversions, and significantly boost your revenue.
                Don&apos;t miss your chance to transform your web and app
                experiences into powerful growth engines.
              </p>
            </FadeUp>
          </div>
          <div className="lowerText">
            <div className="element">
              <div className="block">
                <FadeUp>
                  <p className="heading">WHO SHOULD ATTEND?</p>
                </FadeUp>
                <div className="imageAndtext">
                  <img src={Star} alt="" />

                  <FadeUp>
                    <p className="para2">
                      CMOs, Heads of Growth, Product Managers, UX Designers
                      Anyone looking to increase app and web conversions,
                      retention, and revenue
                    </p>
                  </FadeUp>
                </div>
              </div>
            </div>
            <div className="element">
              <div className="block">
                <FadeUp>
                  <p className="heading">WHY SHOULD YOU ATTEND?</p>
                </FadeUp>
                <div className="imageAndtext">
                  <img src={Star} alt="" />

                  <FadeUp>
                    <p className="para2">
                      The speakers are award-winning experts who have empowered
                      thousands of leading organizations and mentored C-suite
                      executives, industry practitioners, and postgraduate
                      scholars.
                    </p>
                  </FadeUp>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Make the timer sticky */}
        <StickyBox
          offsetTop={100}
          offsetBottom={10}
          className="stickyBox"
          style={{ zIndex: zIndexSetUp ? "15" : "" }}
        >
          <div className="timer">
            <CountDownTimer />
            <div className="calendar">
              <div className="dateAndtime">
                <div className="date">
                  <img src={Calandar} alt="" />
                  <p>25 April, 2025</p>
                </div>
                <div className="time">
                  <div className="imageWrapper">
                    {" "}
                    <img src={Time} alt="" />
                  </div>

                  {/* <p>3:00PM - 4:30PM</p> */}
                  <p>1pm to 2:30 pm (Singapore time)</p>
                </div>
              </div>
              <div className="limitedCapacityonly">
                <h1>Limited Capacity Only</h1>
                <p>Only 50 of 200 slots left</p>
              </div>
              <div className="register">
                <Reserve zIndexSetUp={zIndexSetUp} setZIndexSetUp={setZIndexSetUp}/>
                <p id="content">
                  Can&apos;t attend? Register to get the recording. Let&apos;s
                  improve your apps and websites for users!
                </p>
              </div>
            </div>
          </div>
        </StickyBox>
      </div>
    </section>
  );
};

export default Solution;
