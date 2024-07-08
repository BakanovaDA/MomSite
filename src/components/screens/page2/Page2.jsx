import styles from './Page2.module.css'
import { Link } from 'react-router-dom'

const Page2 = () => {

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
            <img src="/MomSite/myDiplomas/dip1.jpg" alt="img"></img>
            <img src="/MomSite/myDiplomas/dip2.jpg" alt="img"></img>
            <img src="/MomSite/myDiplomas/dip3.jpg" alt="img"></img>
            <img src="/MomSite/myDiplomas/dip4.jpg" alt="img"></img>
            <img src="/MomSite/myDiplomas/dip5.jpg" alt="img"></img>
            <img src="/MomSite/myDiplomas/dip6.jpg" alt="img"></img>
          </div>

        </div>

        <div className='col-md-2'></div>
      </div>
    </div>
    </div>
  )
}

export default Page2