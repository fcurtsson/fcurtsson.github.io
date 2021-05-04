import React from 'react'

import Image from '../Image'

import './index.css'

export default (props) => {
  return (
    <div className="container-fluid">
      <div className="row font-weight-light text-left">
        <div className="offset-lg-1 col-12 col-lg-4 pt-lg-4 px-4 px-lg-0 order-lg-1 order-2">
          <h1 className="display-4 mt-4 mt-lg-5">Hello, World!</h1>
          <h5 className="font-italic"></h5>
          <p className="lead mt-3 mt-lg-4">
            I am <span className={'highlight font-weight-bold'}>Fanny Curtsson</span>, a student at
            the Media Technology programme at KTH in Stockholm, Sweden. Currently finishing up my
            masters in Interactive Media Technology with a specialization in sonic media, while
            working part time as a Software Engineer at Northvolt.
          </p>
          <p className="mt-4">Skills and interests:</p>
          <ul>
            <li>Web development (JavaScript, ReactJS)</li>
            <li>Mobile app development (Swift, ReactNative)</li>
            <li>Audio coding (MAX/MSP, Pure Data, Python)</li>
          </ul>
          <a href="mailto:fanny@curtsson.com" className="highlight">
            <p className="lead mt-3 mt-lg-4 pt-4 mb-5">Want to get in touch?</p>
          </a>
        </div>
        <div className="offset-lg-1 col-12 col-lg-6 px-0 order-lg-2 order-1 header">
          <div className="profileImgSm  d-lg-none">
            <Image
              source={'https://drive.google.com/uc?id=1Nn4XotOM5W2aUEIhkthLvA7KDPQDcLci'}
              description={'Picture of me'}
            />
          </div>
          <div className="profileImgLg d-none d-lg-block">
            <Image
              source={'https://drive.google.com/uc?id=1Nn4XotOM5W2aUEIhkthLvA7KDPQDcLci'}
              description={'Picture of me'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
