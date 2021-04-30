import React from 'react'

export default (props) => {
  return (
    <div className="row justify-content-center">
      <h3 className="text-center col-12 mb-lg-4">Contact Me</h3>
      <a href="https://www.linkedin.com/in/fannycurtsson/" className="name my-2 col-12 col-lg-2">
        LinkedIn
      </a>
      <span className="my-2 col-12 col-lg-2">
        <img src="https://drive.google.com/uc?id=1GwfaT-HUCHX5TS9gDrrYplQCINXQAUtY" />{' '}
        <a href="https://github.com/fcurtsson" className="name">
          GitHub
        </a>
      </span>
      <a href="mailto:fanny@curtsson.com" className="name my-2 col-12 col-lg-2">
        fanny@curtsson.com
      </a>
    </div>
  )
}
