import React from 'react'
import data from '../../projects.json'
import Info from '../../components/Info'
import Footer from '../../components/Footer'
import Project from '../../components/Project'

export default (props) => {
  // how to deploy to github pages: https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
  //                                https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka

  let projects = data.projects

  return (
    <div>
      <div className="row font-weight-light">
        <Info />
        <div id="projects" className={'col-12'}>
          {projects.map((project) => (
            <Project proj={project} />
          ))}
        </div>
        <div id="contact" className="col-12 my-5">
          <Footer />
        </div>
      </div>
    </div>
  )
}
