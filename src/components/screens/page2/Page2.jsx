import styles from './Page2.module.css'
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
  

  setTimeout(function timeout() {
    console.log('1');
  }, 0);

  Promise.resolve('2').then(console.log );

  console.log('3');


  
    
    return (
      <div className={styles.container}>
        <div className='row'>
        <div className='col-4'>
          <div className={styles.nav}>
            <img src='/gg.gif' alt='гифка' width='200' height='200'></img>
            <ul>
              <li id={styles.nav1}><Link to='/MomSite/'>Обо мне</Link></li>
              <li id={styles.nav2}><Link to='/MomSite/page3'>Достижения воспитанников</Link></li>
            </ul>
          </div>
        </div>

        <div className='col-5'>
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

          <p>Провели всеобуч для родителей 25 января 2024 "Безопасность детей"</p>

          <div className={styles.carousel}>
            <button className={styles.btn} id={styles.next} onClick={onNext}>&#187;</button>
            <button className={styles.btn} id={styles.prev} onClick={onPrev}>&#171;</button>
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

          <video className={styles.video} width="640" height="480" controls>
            <source src='/MomSite/pdd/video.mp4' type="video/mp4"></source>
          </video>
          <p></p>
          <p></p>
          <a className={styles.icon} href="/MomSite/pdd/Всеобуч ПДД.pdf" download>
            <img src="/MomSite/icons/download.svg" alt="download" width="32" height="32" style={{margin: '20px'}}></img>
            Всеобуч ПДД.pdf
          </a>
          <p></p>
          <p></p>
          <a className={styles.icon} href="/MomSite/pdd/pddSound.jpg" download>
            <img src="/MomSite/icons/download.svg" alt="download" width="32" height="32" style={{margin: '20px'}}></img>
            Песенка про ПДД.svg
          </a>

          <div className={styles.pdd}>

          <video width="640" height="480" controls>
            <source src='/MomSite/video/pdd.mp4' type="video/mp4"></source>
          </video>
          <p>Всеобуч ПДД</p>

          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px'}}>
            <div style={{flex:1, height: '1px', backgroundColor: 'brown'}} />

            <div>
              <p style={{width: '75px', textAlign: 'center', color: 'brown'}}>Школьный звонок</p>
            </div>

            <div style={{flex: 1, height: '1px', backgroundColor: 'brown'}} />
          </div>


          <a className={styles.icon} href="/MomSite/Всеобуч Школьный звонок.pdf" download>
            <img src="/MomSite/icons/download.svg" alt="download" width="32" height="32" style={{margin: '20px'}}></img>
            Всеобуч Школьный звонок.pdf
          </a>

          
          </div>




          {/* <ScrollableAnchor id={'section3'}> */}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px'}}>
              <div style={{flex:1, height: '1px', backgroundColor: 'brown'}} />

              <div>
                <p style={{width: '150px', textAlign: 'center', color: 'brown'}}></p>
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

      </div>
    )
}

export default Page2