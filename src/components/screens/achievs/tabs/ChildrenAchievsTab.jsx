import React, { useState, useEffect } from 'react'

const ChildrenAchievsTab = () => {
  const [images, setImages] = useState([])
  
  useEffect(() => {
    fetch(`${_API_}/children-achievs`)
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
          src={`${_API_}/children-achievs/${filename}`}
          alt="Достижение"
          loading="lazy"  // ← ленивая загрузка для оптимизации
        />
      ))}
      
      {images.length === 0 && (
        <div>Нет изображений для отображения</div>
      )}
    </div>
  )
}

export default ChildrenAchievsTab