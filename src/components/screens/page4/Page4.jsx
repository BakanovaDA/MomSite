import styles from './Page4.module.css'
import { Link } from 'react-router-dom'

const Page2 = () => {

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

  const onNext2 = () => handleImageChange(1, styles.slide2)
  const onPrev2 = () => handleImageChange(-1, styles.slide2)
  
    return (
      <div className={styles.body}>
      <div className={styles.container}>
      
        <div className='row'>

        {/* <div className='row'>

          <div className={styles.top_menu}>

            <ul>
                <li><Link to='/MomSite/'>Обо мне</Link></li>
                <li><Link to='/MomSite/page2'>Мои достижения</Link></li>
                <li><Link to='/MomSite/page3'>Достижения воспитанников</Link></li>
                <li><Link to='/MomSite/page4'>Педагогическая деятельность</Link></li>
                <li><Link to='/MomSite/page5'>Общественная деятельность</Link></li>
              </ul>

          </div>
        </div> */}


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
            <h5>Всеобуч "Школьный звонок"</h5>
            <p>25 марта 2024</p>
            <div className={styles.icon}>
              <a href="/MomSite/Всеобуч Школьный звонок.pdf" download>
                <img src="/MomSite/icons/download.svg" alt="download" width="20" height="20"></img>
                <p>Всеобуч Школьный звонок.pdf</p>
              </a>
            </div>
          </div>

          <div className={styles.post}>
            <h5>Всеобуч "ПДД"</h5>
            <p>26 января 2024</p>

            <div className={styles.carousel}>
              <button className={styles.btn} id={styles.next} onClick={onNext2}>&#187;</button>
              <button className={styles.btn} id={styles.prev} onClick={onPrev2}>&#171;</button>
              <ul className={styles.slides}>
                <li className={styles.slide2} data-active>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/pdd/1.jpg)' }}/>
                </li>
                <li className={styles.slide2}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/pdd/2.jpeg)' }}/>
                </li>
                <li className={styles.slide2}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/pdd/3.jpeg)' }}/>
                </li>
              </ul>
            </div>

            <div className={styles.icon}>
              <a href="/MomSite/pdd/Всеобуч ПДД.pdf" download>
                <img src="/MomSite/icons/download.svg" alt="download" width="20" height="20"></img>
                <p>Всеобуч ПДД.pdf</p>
              </a>
            </div>

            <div className={styles.icon}>
              <a href="/MomSite/pdd/pddSound.jpg" download>
                <img src="/MomSite/icons/download.svg" alt="download" width="20" height="20"></img>
                <p>Песенка про ПДД.svg</p>
              </a>
            </div>

          </div>

          <div className={styles.post}>
            <h5>Всеобуч для родителей "Безопасность детей"</h5>
            <p>7 декабря 2023</p>
            <video className={styles.video} width="640" height="480" controls>
              <source src='/MomSite/pdd/video.mp4' type="video/mp4"></source>
            </video>
          </div>

          <div className={styles.post}>
            <h5>Всеобуч "ОБЖ"</h5>
            <p>20 ноября 2023</p>
            <video width="640" height="480" controls>
              <source src='/MomSite/video/pdd.mp4' type="video/mp4"></source>
            </video>
          </div>

          <div className={styles.post}>
            <h5>Золотая осень</h5>
            <p>20 сентября 2023</p>
            
            <div className={styles.carousel}>
              <button className={styles.btn} id={styles.next} onClick={onNext}>&#187;</button>
              <button className={styles.btn} id={styles.prev} onClick={onPrev}>&#171;</button>
              <ul className={styles.slides}>
                <li className={styles.slide}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/1.jpg)' }}/>
                </li>
                <li className={styles.slide} data-active>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/2.jpg)' }}/>
                </li>
                <li className={styles.slide}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/3.jpg)' }}/>
                </li>
                <li className={styles.slide}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/4.jpg)' }}/>
                </li>
                <li className={styles.slide}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/5.jpg)' }}/>
                </li>
                <li className={styles.slide}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/6.jpg)' }}/>
                </li>
                <li className={styles.slide}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/7.jpg)' }}/>
                </li>
                <li className={styles.slide}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/8.jpg)' }}/>
                </li>
                <li className={styles.slide}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/9.jpg)' }}/>
                </li>
                <li className={styles.slide}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/10.jpg)' }}/>
                </li>
                <li className={styles.slide}>
                  <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/autumn/11.jpg)' }}/>
                </li>
              </ul>
            </div>

            <div className={styles.icon}>
              <a href="/MomSite/autumn/autumn.pdf" download>
                <img src="/MomSite/icons/download.svg" alt="download" width="20" height="20"></img>
                <p>Конспект "Осення ярмарка".pdf</p>
              </a>
            </div>
          </div>

        </div>

        <div className='col-md-2'>
          <div className={styles.info}>
            <p>Навигация по странице</p>
            <ul>
              <li><Link>Осенняя ярмарка</Link></li>
              <li><Link>Безопасность детей</Link></li>
              <li><Link>ПДД</Link></li>
              <li><Link>Школьный звонок</Link></li>
            </ul>
          </div>
        </div>

        </div>
        
      </div>
      </div>
    )
}

export default Page2