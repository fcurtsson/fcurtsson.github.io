import React from 'react'
import './index.css'
import profile from '../../assets/profile.jpeg'

export default (props) => {
  return (
    <div>
      <div className="row font-weight-light">
        <div className="col-12 text-left">
          <div className="row">
            <div className="offset-lg-1 col-12 col-lg-4 mt-lg-4 px-4 px-lg-0 mb-5 order-lg-1 order-2">
              <h1 className="display-4 mt-5 mt-lg-5">Hello, World!</h1>
              <h5 className="font-italic"></h5>
              <p className="lead mt-4">
                I am <span className={'name font-weight-bold'}>Fanny Curtsson</span>, a student at
                the Media Technology programme at KTH in Stockholm, Sweden. Currently finishing up
                my masters in Interactive Media Technology with a specialization in sonic media,
                while working part time as a Software Engineer at Northvolt.
              </p>
              <p>Skills and interests:</p>
              <ul>
                <li>Web development (JavaScript, ReactJS)</li>
                <li>Mobile app development (Swift, ReactNative)</li>
                <li>Audio coding (MAX/MSP, Pure Data, Python)</li>
              </ul>
              <p>Want to get in touch?</p>
              <a href="mailto:fanny@curtsson.com" className="name">
                fanny@curtsson.com
              </a>
            </div>
            <div className="offset-lg-1 col-12 col-lg-6 px-0 order-lg-2 order-1">
              <img className="profileImg" src={profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
