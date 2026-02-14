import React, { useState } from 'react'
import image from '../../assets/placeholder.jpeg'
import './Gallery.css'

const Gallery = () => {
  const [photoQuotes, setPhotoQuotes] = useState(
    Array(12).fill(null).map(() => ({
      image,
      quote: '',
    }))
  )

  const handleQuoteChange = (index, newQuote) => {
    const updated = [...photoQuotes]
    updated[index].quote = newQuote
    setPhotoQuotes(updated)
  }

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h1 className="gallery-title">Gallery</h1>

        <div className="gallery-items">
          {photoQuotes.map((item, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-photo-item">
                <img src={item.image} alt={`Gallery ${index + 1}`} />
              </div>
              <div className="gallery-item-quote">
                <input
                  type="text"
                  placeholder="Add a quote..."
                  value={item.quote}
                  onChange={(e) => handleQuoteChange(index, e.target.value)}
                  className="gallery-quote-input"
                />
                {item.quote && (
                  <p className="gallery-quote-display">{item.quote}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
