import styles from './Page3.module.css'
import { Link } from 'react-router-dom'

const Page3 = () => {

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
          
          <div className={styles.diplom}>
            <img src="/MomSite/childrenDiplomas/dip1.jpg" alt="img"></img>
            <img src="/MomSite/childrenDiplomas/dip2.jpg" alt="img"></img>
            <img src="/MomSite/childrenDiplomas/dip3.jpg" alt="img"></img>
            <img src="/MomSite/childrenDiplomas/dip4.jpg" alt="img"></img>
            <img src="/MomSite/childrenDiplomas/dip5.jpg" alt="img"></img>
            <img src="/MomSite/childrenDiplomas/dip6.jpg" alt="img"></img>
            <img src="/MomSite/childrenDiplomas/dip7.jpg" alt="img"></img>
            <img src="/MomSite/childrenDiplomas/dip8.jpg" alt="img"></img>
            <img src="/MomSite/childrenDiplomas/dip9.jpg" alt="img"></img>
            <img src="/MomSite/childrenDiplomas/dip10.jpg" alt="img"></img>
          </div>
        </div>

        <div className='col-md-2'></div>
      </div>
    </div>
    </div>
  )
}

export default Page3