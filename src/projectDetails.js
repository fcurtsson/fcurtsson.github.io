import React from "react";
import { Link, useLocation } from "react-router-dom";

function ProjectDetails(props) {

    const location = useLocation();

    if (location.project === undefined) {
        return(<div className="justify-content-center my-5 py-5">
                <h2>Something went wrong</h2>
                <Link to={"/"}><button type="button" className="btn btn-light">Go to main page</button></Link>
        </div>)
    }

    let {title, image, description, tools, skills, collaborators, coursework, work, color, button, buttonLink} = location.project

    let learnings = skills.split(",").map(skill => {
        return <li>{skill}</li>
    })
    let toolsUsed = tools.split(",").map(tool => {
        return <li>{tool}</li>
    })

    let buttonDiv = ""

    if (button !== null) {
        buttonDiv = <a href={buttonLink} target="_blank"><button type="button" className="btn btn-light">{button}</button></a>
    }

    return(
        <div className="row text-left px-0">
            <div className="col-12">
                <Link to={"/"}><i className="material-icons md-36 text-white leftOverImg">arrow_back_ios</i></Link>
                <img src={image} className="bannerImgSm d-lg-none"/>
                <img src={image} className="bannerImgLg d-none d-lg-block"/>
                <h1 className="offset-1 text-white leftDownOverImg">{title}</h1>
            </div>
            <div className="col-10 offset-1  mt-4 mb-2">
                {coursework !== null ? <p className="font-italic">Coursework in {coursework}</p> : <p className="font-italic">{work}</p>}
                <p>{description}</p>
                <p>What I learned</p>
                <ul>
                    {learnings}
                </ul>
                <p>Tools used</p>
                <ul>
                    {toolsUsed}
                </ul>
                {buttonDiv}
                {collaborators !== null ? <p className="mt-4"><span style={{ color: color }}>Collaborators:</span> {collaborators}</p> : ""}
            </div>
        </div>
    )
}

export default ProjectDetails;

