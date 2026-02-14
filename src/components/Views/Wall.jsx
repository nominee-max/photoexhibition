import React, { useState } from 'react'
import image from '../../assets/placeholder.jpeg'
import './Wall.css'

const PhotoCard = ({ src, quote }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div 
      className={`photocard ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={src} alt="photo" />
        </div>
        <div className="card-back">
          <p>{quote}</p>
        </div>
      </div>
    </div>
  )
}

const Wall = () => {
  const photos = Array(6).fill(image)

  return (
    <div className="wall-container">

      <div className="wall-section">
        <h2>Haves</h2>
        <div className="wall-grid">
          {photos.map((photo, index) => (
            <PhotoCard 
              key={`haves-${index}`} 
              src={photo}
              quote="This is a quote."
            />
          ))}
        </div>
      </div>

      <div className="wall-section">
        <h2>Have Nots</h2>
        <div className="wall-grid">
          {photos.map((photo, index) => (
            <PhotoCard 
              key={`havenots-${index}`} 
              src={photo}
              quote="Another quote here."
            />
          ))}
        </div>
        </div>

    </div>
  )
}

export default Wall