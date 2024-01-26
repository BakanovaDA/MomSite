import styles from './Page2.module.css'
import { Link } from 'react-router-dom'

const Page2 = () => {

  const handleImageChange = (offset) => {
    const activeSlide = document.querySelector('[data-active]')
    //const slides = [...document.querySelectorAll('ul > li')].slice(2)
    //const slides = [...document.getElementsByClassName('_slide_edumf_111')]
    const slides = [...document.getElementsByClassName(`${styles.slide}`)]

    const currentIndex = slides.indexOf(activeSlide)

    let newIndex = currentIndex + offset
  
    if (newIndex < 0) newIndex = slides.length - 1
    if (newIndex >= slides.length) newIndex = 0
  
    slides[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  }
  
  const onNext = () => handleImageChange(1)
  
  const onPrev = () => handleImageChange(-1)


  
    
    return (
      <div className='row'>
        <div className='col-3'>
          <div className={styles.nav}>
            <img src='/gg.gif' alt='гифка' width='200' height='200'></img>
            <ul>
              <li id={styles.nav1}><Link to='/MomSite/'>Обо мне</Link></li>
              <li id={styles.nav2}><Link to='/MomSite/page3'>Достижения воспитанников</Link></li>
            </ul>
          </div>
        </div>

        <div className='col-6'>
          <div className={styles.actual}>
            <h4>Актуальные</h4>
          </div>
          <div className={styles.container}>
            <a href='#section1' className={styles.rect}
              style={{
                backgroundImage: 'url(/MomSite/goldenAutumn.jpg)'
              }}/>

            <a href='#section2' className={styles.rect}
              style={{
                backgroundImage: 'url(/MomSite/pdd.jpg)'
              }}/>

            <a href='#section3' className={styles.rect}
              style={{
                backgroundImage: 'url(/MomSite/summer.png)'
              }}/>
          </div>
          <div className={styles.container}>
            <div className={styles.rectText}>
              <h3>Золотая осень</h3>
            </div>
            <div className={styles.rectText}>
              <h3>ПДД</h3>
            </div>
            <div className={styles.rectText}>
              <h3>Вкусное лето</h3>
            </div>
          </div>

          {/* <ScrollableAnchor id={'section1'}> */}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '50px'}}>
              <div style={{flex: 1, height: '1px', backgroundColor: 'brown'}} />

              <div>
                <p style={{width: '150px', textAlign: 'center', color: 'brown'}}>Золотая осень</p>
              </div>

              <div style={{flex: 1, height: '1px', backgroundColor: 'brown'}} />
            </div>
          {/* </ScrollableAnchor> */}

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

          <a className={styles.icon} href="/MomSite/autumn/autumn.pdf" download>
            <img src="/MomSite/icons/download.svg" alt="download" width="32" height="32" style={{margin: '20px'}}></img>
            Конспект "Осення ярмарка".pdf
          </a> 

          {/* <ScrollableAnchor id={'section2'}> */}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px'}}>
              <div style={{flex:1, height: '1px', backgroundColor: 'brown'}} />

              <div>
                <p style={{width: '75px', textAlign: 'center', color: 'brown'}}>ПДД</p>
              </div>

              <div style={{flex: 1, height: '1px', backgroundColor: 'brown'}} />
            </div>
          {/* </ScrollableAnchor> */}

          <a className={styles.icon} href="/MomSite/pdd/Всеобуч ПДД.pdf" download>
            <img src="/MomSite/icons/download.svg" alt="download" width="32" height="32" style={{margin: '20px'}}></img>
            Всеобуч ПДД.pdf
          </a>
          <p></p>
          <a className={styles.icon} href="/MomSite/pdd/pddSound.jpg" download>
            <img src="/MomSite/icons/download.svg" alt="download" width="32" height="32" style={{margin: '20px'}}></img>
            Песенка про ПДД.svg
          </a>

          <div className={styles.pdd}>

          <video width="640" height="480" controls>
            <source src='/MomSite/video/pdd.mp4' type="video/mp4"></source>
          </video>
          
          </div>

          {/* <ScrollableAnchor id={'section3'}> */}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px'}}>
              <div style={{flex:1, height: '1px', backgroundColor: 'brown'}} />

              <div>
                <p style={{width: '150px', textAlign: 'center', color: 'brown'}}>Вкусное лето</p>
              </div>

              <div style={{flex: 1, height: '1px', backgroundColor: 'brown'}} />
            </div>
          {/* </ScrollableAnchor> */}

        </div>

        <div className='col-3'>
          <div className={styles.info}>

          </div>
        </div>
      </div>
    )
}

export default Page2