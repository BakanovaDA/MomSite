import React, { useState, useEffect } from 'react'

const MyAchievsTab = () => {
  
  const [images, setImages] = useState([])
  
  useEffect(() => {
    fetch('http://23.134.216.180:5000/api/files/my-achievs')
      .then(res => res.json())
      .then(data => {
        console.log('Полученные данные:', data)
        console.log('Имена файлов:', data.files?.map(f => f.name))
        setImages(data.files?.map(f => f.name) || [])
      })
  }, [])
  
  const SERVER = 'http://23.134.216.180:5000/api/files/my-achievs'
  
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

export default MyAchievsTab

// const MyAchievsTab = () => {

//   return (
//     <div>
//       <img src="/MomSite/myAchievs/dip20.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip19.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip18.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip17.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip16.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip15.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip14.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip13.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip12.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip11.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip10.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip9.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip8.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip7.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip6.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip5.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip4.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip3.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip2.jpg" alt="img"></img>
//       <img src="/MomSite/myAchievs/dip1.jpg" alt="img"></img>
//     </div>
//   )
// }

// export default MyAchievsTab
