import React, { useState, useEffect } from 'react'

const GaleryTab = () => {
  const [images, setImages] = useState([])
  
  useEffect(() => {
    fetch(`${_API_}/galery`)
      .then(res => res.json())
      .then(data => {
        setImages(data.files?.map(f => f.name) || [])
      })
      .catch(error => console.error('Ошибка загрузки:', error))
  }, [])
  
  return (
    <div>
      {images.map((filename, index) => (
        <img 
          key={index}
          src={`${_API_}/galery/${filename}`}
          alt="Фото"
          loading="lazy"  // ← ленивая загрузка для оптимизации
          style={{ maxWidth: '50vw' }}
        />
      ))}
      
      {images.length === 0 && (
        <div>Нет изображений для отображения</div>
      )}
    </div>
  )
}

export default GaleryTab