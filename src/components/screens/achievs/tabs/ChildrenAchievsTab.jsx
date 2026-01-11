import React, { useState, useEffect } from 'react'

const ChildrenAchievsTab = () => {
  
  const [images, setImages] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:5000/api/files/children-achievs')
      .then(res => res.json())
      .then(data => {
        console.log('Полученные данные:', data)
        console.log('Имена файлов:', data.files?.map(f => f.name))
        setImages(data.files?.map(f => f.name) || [])
      })
  }, [])
  
  const SERVER = 'http://localhost:5000/api/files/children-achievs'
  
  return (
    <div>
      {images.map((filename, index) => {
        console.log('Рендерим изображение:', `${SERVER}/${filename}`)
        return (
          <img 
            key={index}
            src={`${SERVER}/${filename}`}
            alt="Достижение"
          />
        )
      })}
      
      {images.length === 0 && (
        <div>Нет изображений для отображения</div>
      )}
    </div>
  )
}

export default ChildrenAchievsTab

// const ChildrenAchievsTab = () => {

//   return (

//     <div>

//       <img src="/MomSite/childrenAchievs/dip11.jpg" alt="img"></img>
//       <img src="/MomSite/childrenAchievs/dip10.jpg" alt="img"></img>
//       <img src="/MomSite/childrenAchievs/dip9.jpg" alt="img"></img>
//       <img src="/MomSite/childrenAchievs/dip8.jpg" alt="img"></img>
//       <img src="/MomSite/childrenAchievs/dip7.jpg" alt="img"></img>
//       <img src="/MomSite/childrenAchievs/dip6.jpg" alt="img"></img>
//       <img src="/MomSite/childrenAchievs/dip5.jpg" alt="img"></img>
//       <img src="/MomSite/childrenAchievs/dip4.jpg" alt="img"></img>
//       <img src="/MomSite/childrenAchievs/dip3.jpg" alt="img"></img>
//       <img src="/MomSite/childrenAchievs/dip2.jpg" alt= "img"></img>
//       <img src="/MomSite/childrenAchievs/dip1.jpg" alt="img"></img>
//     </div>
//   )
// }

// export default ChildrenAchievsTab