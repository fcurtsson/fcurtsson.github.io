import React from 'react'
import { Link } from 'react-router-dom'

import Image from '../../components/Image'

import './index.css'

export default (props) => {
  const {
    proj,
    proj: { title, cardSide, image, intro, skills, color },
  } = props
  const learnings = skills.split(',').map((skill) => {
    return <li>{skill}</li>
  })

  return (
    <div className="row text-left">
      <div
        className={`px-4 px-lg-0 col-12 col-lg-5 offset-lg-1 order-2 ${
          cardSide === 'r' ? 'order-lg-1' : 'order-lg-2'
        }`}
      >
        <Link
          style={{ textDecorationColor: color, textDecorationThickness: 2 }}
          to={{
            pathname: `/project/${title.toLowerCase().replace(/ /g, '')}`,
            project: proj,
          }}
        >
          <h1 style={{ color: color }} className="mt-2 mt-lg-5">
            {title}
          </h1>
        </Link>
        <p className={'font-italic'}>{intro}</p>
        <p>What I learned</p>
        <ul>{learnings}</ul>
        <div className="text-center mt-4 mb-4 mb-lg-2">
          <Link
            to={{
              pathname: `/project/${title.toLowerCase().replace(/ /g, '')}`,
              project: proj,
            }}
          >
            <button type="button" className="btn btn-light">
              Learn more
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`px-0 col-12 col-lg-5 order-1 ${
          cardSide === 'l' ? 'order-lg-1' : 'order-lg-2 ml-md-auto'
        }`}
      >
        <div className="projectImgSm d-lg-none">
          <Image source={image} color={color} />
        </div>
        <div className="projectImgLg d-none d-lg-block">
          <Image source={image} color={color} />
        </div>
      </div>
    </div>
  )
}
