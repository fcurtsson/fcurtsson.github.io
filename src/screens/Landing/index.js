import React from 'react'
import data from '../../projects.json'
import Info from '../../components/Info'
import Project from '../../components/Project'

export default (props) => {
  // how to deploy to github pages: https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
  //                                https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka

  let projects = data.projects

  return (
    <div className="container-fluid">
      <div className="row font-weight-light">
        <Info />
        <div id="projects" className="container-fluid">
          {projects.map((project) => (
            <Project proj={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
