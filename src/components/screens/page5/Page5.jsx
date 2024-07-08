import styles from './Page5.module.css'
import { Link } from 'react-router-dom'

const Page4 = () => {

  const handleImageChange = (offset, slide) => {
    const activeSlide = document.querySelector('[data-active]')
    const slides = [...document.getElementsByClassName(`${slide}`)]

    document.query

    const currentIndex = slides.indexOf(activeSlide)

    let newIndex = currentIndex + offset
  
    if (newIndex < 0) newIndex = slides.length - 1
    if (newIndex >= slides.length) newIndex = 0
  
    slides[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  }

  // const onNext = (slide) => handleImageChange(1, slide)
  // const onPrev = (slide) => handleImageChange(-1, slide)

  const onNext = () => handleImageChange(1, styles.slide)
  const onPrev = () => handleImageChange(-1, styles.slide)

  return (

    <div className={styles.body}>
    <div className={styles.container}>
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-2'>
          <div className={styles.nav}>
            <ul>
              <li><Link to='/MomSite/'>Обо мне</Link></li>
              <li><Link to='/MomSite/page2'>Мои достижения</Link></li>
              <li><Link to='/MomSite/page3'>Достижения воспитанников</Link></li>
              <li><Link to='/MomSite/page4'>Педагогическая деятельность</Link></li>
              <li><Link to='/MomSite/page5'>Общественная деятельность</Link></li>
            </ul>
          </div>
        </div>

        <div className='col-md-7'>

          <div className={styles.public}>
            <h5>Публикации</h5>
          </div>
          
          <div className={styles.post}>
            <h5>Вокально-инструментальная композиция "Маков цвет"</h5>
            <p>2 ноября 2022</p>
            <img src="/MomSite/socialActivities/5.jpg" alt="img"></img>
          </div>

          <div className={styles.post}>
            <h5>Песня "Хотят ли русские войны"</h5>
            <img src="/MomSite/socialActivities/4.jpg" alt="img"></img>

          </div>

          <div className={styles.post}>
            <h5>Музыкальная композиция "С профсоюзом мы друзья"</h5>
            <img src="/MomSite/socialActivities/1.jpg" alt="img"></img>

          </div>

          <div className={styles.post}>
            <h5>Песня "Душечка моя"</h5>
            <img src="/MomSite/socialActivities/2.jpg" alt="img"></img>

          </div>

          <div className={styles.post}>
            <h5>Казачья песня "Ой, Дуся, ой, Маруся"</h5>
            <img src="/MomSite/socialActivities/3.jpg" alt="img"></img>

          </div>



        </div>

        <div className='col-md-2'></div>
      </div>
    </div>
    </div>
  )
}

export default Page4