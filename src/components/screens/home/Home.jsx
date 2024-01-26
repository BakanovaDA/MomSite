import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}
        style={{
          backgroundImage: 'url(/MomSite/main.jpg)'
      }}>
        <div className={styles.fio}>
          <h1>Баканова</h1>
          <h2>Любовь Михайловна</h2>
        </div>
        
      </div>
      <div className={styles.item}>
        <p>Я воспитатель высшей категории детского сада №37 г. Оренбурга.
          <p>За 20 лет опыта работы у меня накопилось большое количество 
            профессиональных знаний и разработок, которыми я хочу поделиться.
            Надеюсь, здесь найдется много интересного как для коллег, так и для родителей.
          </p>
        </p>
        
        

      </div>

      <blockquote className={styles.quote}>
        &#10077; Дети - это маленькие взрослые. &#10078;
      </blockquote>

      <div className={styles.containerButton}>
        <div>
          <Link to='/MomSite/page2'>
            <button className={styles.button}>Педагогическая деятельность</button>
          </Link>
        </div>
        <div>
          <Link to='/MomSite/page3'>
            <button className={styles.button}>Достижения воспитанников</button>
          </Link>
        </div>
      </div>
      

    </div>
  )
}

export default App
