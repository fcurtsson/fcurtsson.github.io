import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import data from '../../projects.json'

import Image from '../../components/Image'

import './index.css'

export default (props) => {
  const location = useLocation()

  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  if (location.project === undefined) {
    const projects = data.projects
    let project = projects.find(
      (proj) =>
        proj.title.toLowerCase().replace(/\s/g, '') === location.pathname.replace('/project/', '')
    )

    if (!project) {
      return (
        <div className="justify-content-center my-5 py-5">
          <h2>Something went wrong</h2>
          <Link to={'/'}>
            <button type="button" className="btn btn-light">
              Go to main page
            </button>
          </Link>
        </div>
      )
    } else {
      location.project = project
    }
  }

  let {
    title,
    image,
    description,
    tools,
    skills,
    collaborators,
    coursework,
    work,
    color,
    button,
    buttonLink,
  } = location.project

  let learnings = skills.split(',').map((skill) => {
    return <li>{skill}</li>
  })
  let toolsUsed = tools.split(',').map((tool) => {
    return <li>{tool}</li>
  })

  return (
    <div className="row text-left px-0">
      <div className="col-12 px-0">
        <Link to={'/'} className="fixed-top">
          <i className="material-icons text-white leftOverImg px-2">arrow_back_ios</i>
        </Link>
        <div className="bannerImgSm d-lg-none">
          <Image source={image} color={color} />
        </div>
        <div className="bannerImgLg d-none d-lg-block">
          <Image source={image} color={color} />
        </div>
        <h1 className="offset-lg-1 col-lg-10 col-12 px-4 px-lg-0 text-white leftDownOverImg">
          {title}
        </h1>
      </div>
      <div className="offset-lg-1 col-12 col-lg-10 mt-lg-4 px-4 px-lg-0 mt-4 mb-2">
        {coursework !== null ? (
          <p className="font-italic">Coursework in {coursework}</p>
        ) : (
          <p className="font-italic">{work}</p>
        )}
        <p>{description}</p>
        <p>What I learned</p>
        <ul>{learnings}</ul>
        <p>Tools used</p>
        <ul>{toolsUsed}</ul>
        {button && (
          <a href={buttonLink} target="_blank">
            <button type="button" className="btn btn-light">
              {button}
            </button>
          </a>
        )}
        {collaborators !== null ? (
          <p className="mt-4">
            <span style={{ color }}>Collaborators:</span> {collaborators}
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
