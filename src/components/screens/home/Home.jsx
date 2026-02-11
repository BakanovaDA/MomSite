import styles from './Home.module.css'
import Navigation from '../../ui/Navigation/Navigation'
import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu'
import { checkIsMobile } from '../../../utils/isMobile'
import { calculateAge } from '../../../utils/ageUtils'

function App() {

  return (
    <div className={styles.body}>

      <div className='row'>

        {checkIsMobile() ? (
          <BurgerMenu />
        ) : (
          <div className='col-md-3'>
            <Navigation />
          </div>
        )}
      
        <div className='col-md-5'>
          
          <div className={styles.item}>

            <h3 className={styles.title}>Карточка воспитателя детского сада</h3>
      
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Место работы:</span>
                <span className={styles.value}>г. Оренбург, МДОАУ "Детский сад №37"</span>
                <span className={styles.value}><a>https://ds37-orenburg-r56.gosweb.gosuslugi.ru/</a></span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Категория:</span>
                <span className={styles.value}>высшая (2021г)</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Дата рождения:</span>
                <span className={styles.value}>10 декабря 1977, {calculateAge(1977, 12, 10)}</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Образование:</span>
                <span className={styles.value}>Оренбургский Государственный Педагогический Университет, 2000г</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Специальность,<br/>квалификация:</span>
                <span className={styles.value}>Учитель русского языка и литературы,<br/>Психолог-консультант</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Стаж<br/>работы:</span>
                <span className={styles.value}>{calculateAge(2000)}</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Стаж работы<br/>в учреждении:</span>
                <span className={styles.value}>{calculateAge(2004)}</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Повышение<br/>квалификации:</span>
                <span className={styles.value}>25.04.2021 -<br/>25.04.2026</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Увлечения:</span>
                <span className={styles.value}>лыжи, цветоводство, путешествия</span>
              </div>
            </div>
          </div>

          <blockquote className={styles.quote}>
            &#10077; Дети - это маленькие взрослые. &#10078;
          </blockquote>
          
        </div>

        <div className='col-md-4'>
          <div className={styles.profile}>
            <div className={styles.fio}>
              <h1>Баканова</h1>
              <h2>Любовь Михайловна</h2>
            </div>
          </div>
        </div>
        
      <div/>
      
    </div>
  </div>
  )
}

export default App
