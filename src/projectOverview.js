import React, {Component} from "react";
import './index.css'
import { Link } from "react-router-dom";

function ProjectOverview({proj, proj:{title, cardSide, image, intro, skills, color}}) {

    let learnings = skills.split(",").map(skill => {
        return <li>{skill}</li>
    })

    return(
        <div className="row text-left">
            <div className={`px-4 px-lg-0 col-12 col-lg-6 offset-lg-1 order-2 ${cardSide === "r" ? "order-lg-1" : "order-lg-2"}`}>
                <h1 style={{ color: color }} className="mt-2 mt-lg-5">{title}</h1>
                <p className={"font-italic"}>{intro}</p>
                <p>What I learned</p>
                <ul>
                    {learnings}
                </ul>
                <div className="text-center">
                    <Link to={{pathname:`/project/${title.toLowerCase().replace(/ /g, '')}`, project:proj}}>
                        <button type="button" className="btn btn-light">Learn more</button>
                    </Link>
                </div>

            </div>
            <div className={`px-0 col-12 col-lg-5 order-1 ${cardSide === "l" ? "order-lg-1" : "order-lg-2"}`}>
                <img src={image} className="projectImgSm d-lg-none"/>
                <img src={image} className="projectImgLg d-none d-lg-block"/>
            </div>
        </div>
    )

}

export default ProjectOverview;