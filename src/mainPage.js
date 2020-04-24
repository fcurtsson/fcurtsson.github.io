import React, {Component} from "react";
import data from "./projects.json";
import ProjectOverview from "./projectOverview";
import Header from "./header";
import "./index.css"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let projects = data.projects;
        let projectDiv = null;
        projectDiv = projects.map(project => (
            <ProjectOverview proj={project}/>
        ));

        return (
            <div>
                {/*<Header></Header>*/}
                <div className="row font-weight-light">
                    <div className="col-12 text-left">
                        <div className="row">
                            <div className="offset-lg-1 col-12 col-lg-4 mt-lg-5 px-4 px-lg-0">
                                <h1 className="display-4 mt-5 mt-lg-5">Hello, World!</h1>
                                <p className="lead mt-4">I am <span className={"name"}>Fanny Curtsson</span>, a student at the Media Technology programme at KTH in Stockholm, Sweden. Currently doing my masters in Interactive Media Technology with a specialization in sonic media.</p>
                                <p>Skills and interests:</p>
                                <ul>
                                    <li>Web development (JavaScript, ReactJS, Redux)</li>
                                    <li>Mobile app development (Swift)</li>
                                    <li>Audio coding (MAX/MSP, Pure Data, Python)</li>
                                </ul>
                                <p>Want to get in touch?</p>
                                <a href="mailto:fanny@curtsson.com" className="name">fanny@curtsson.com</a>
                            </div>
                            <div className="offset-lg-1 col-12 col-lg-6 px-0">
                                <img className="profileImg" src={"https://66.media.tumblr.com/95523ef58cfe49ed3f9553d96220afcd/tumblr_pbvvevG3xd1wjlseuo1_400.jpg"}/>
                                <p className="centeredOverImg bg-white">this is supposed to be a pic of me</p>
                            </div>
                        </div>
                    </div>
                    <div id="projects" className={"col-12"}>
                        {projectDiv}
                    </div>
                    <div id="contact" className={"col-12 my-5"}>
                        <h3 className="text-center mb-4">Contact Me</h3>
                        <p>fanny@curtsson.com</p>

                    </div>

                </div>

            </div>
        )

    }
}

export default MainPage;