import React, { useState } from 'react'

import './index.css'

export default (props) => {
  const { source, color, description } = props
  const [isLoaded, setLoaded] = useState(false)

  return (
    <div div className="image" style={{ backgroundColor: color ? color : '#F0F0F0' }}>
      <img
        src={source}
        alt={description}
        className={`real real${isLoaded ? '-visible' : '-hidden'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
