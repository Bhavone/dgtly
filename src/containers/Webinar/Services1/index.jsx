import React from 'react';
import ETND from "../../../assets/images/herosection/etndlogo.svg";
import DGTLY from "../../../assets/images/herosection/dgtlylogo.svg";
import "./services.scss";

export default function Services1() {
    const data = [
        {
            image: ETND, 
            para: "CTA Digital is a UX consulting agency founded by the ex-Google offering the all-time-popular UX workshop formats, refined over years of testing with the Google UX team, including Mobile UX audits, Mobile Labs, and Google Design Sprints."
        },
        {
            image: DGTLY, 
            para: "DGTLY is a consultancy helping customers with conversion rate optimisation, growth consulting, and digital strategy across diverse industries. We help businesses optimize their web and app experiences to drive high engagement, maximize conversions, and achieve sustainable ROI."
        }
    ];

    return (
        <section className="container services">
            <div className="table">
                <h1>Brought To You By</h1>
                <div className="elements">
                    {data.map((ele, index) => (
                        <div className="block" key={index}>
                            <div className="image">
                                <img src={ele.image} alt="Service Image" />
                            </div>
                            <div className="text">
                                <p className="p1">{ele.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
