import React from "react";
import "./aboutme.css";
import CountUp from 'react-countup';

export default function Aboutme() {
    return (
        <div className="aboutme-main">
            <h1>About</h1>
            <div className="aboutme-main-in">
                <div className="aboutme-main-0 abm">
                    <h3>Codeforce</h3>

                    <div className="abm-1">
                    <CountUp start={0} end={1064}>
                        
                        </CountUp>
                    </div>
                    <div className="abm-3">
                    🌟
                    </div>

                </div>
                <div className="aboutme-main-1 abm">
                    <div className="aboutme-main-2">
                        <h3>Coding skill</h3>
                        <p>C++ , Python ,Excel , Sql ,Datascience </p>
                        <p>Dataanalysis ,Bussiness Analysis , Django</p>
                    </div>
                    <div className="aboutme-main-2">
                        <h3>Member Of</h3>
                        <p>Explorin , Super 30 , Hockey iitr , Ncc </p>
                    </div>
                    <div className="aboutme-main-2">
                        <h3>Project</h3>
                        <p>Snake game , Website ,Zomato ipo analysis </p>
                        <p>Paytm ipo analysis</p>
                    </div>
                    <div className="aboutme-main-2">
                        <h3>Achivement</h3>
                        <p></p>
                    </div>

                </div>
                <div className="aboutme-main-3 abm">
                    <h3>Codechef</h3>
                    <div className="abm-1">
                    <CountUp start={0} end={1762}>
                        
                        </CountUp>
                    </div>
                    <div className="abm-3">
                    🌟🌟🌟
                    </div>

                </div>


            </div>
        </div>
    )

}