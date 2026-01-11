import styles from './Methodology.module.css'
import Navigation from '../../ui/Navigation/Navigation'
import RightInfo from '../../ui/RightInfo/RightInfo'
import Post from '../../ui/Post/Post'
import Label from '../../ui/Label/Label'

const Methodology = () => {

  return (
    <div className={styles.body} 
        style={{
          backgroundColor: 'var(--methodology-bg-color)',
          '--text-color': 'var(--methodology-text-color)',
          '--shadow-color': 'var(--methodology-shadow-color)'
         }}>

      {/* Мобильное меню (только для маленьких экранов) */}
      <div className='d-block d-md-none'>
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰ Меню
        </button>
        {/* {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <Navigation />
          </div>
        )} */}
      </div>
      
      <div className='row'>

        <div className='col-md-3 d-none d-md-block'>
          <Navigation />
        </div>

        <div className='col-md-6'>

        <Label />

        <Post id = 'post3'
          title='Летняя мастерская'
          date='2020'
          files={[
            {
              path: 'Летняя мастерская.docx',
              name: 'Летняя мастерская.docx'
            },
            {
              path: 'Мастер - класс Летняя мастерская.pptx',
              name: 'Мастер - класс Летняя мастерская.pptx'
            }
          ]} 
          bucket='methodology'
        />

        <Post id = 'post2'
          title='Организация прогулки'
          date='7 июня 2023'
          files={[
            {
              path: 'организация прогулки.docx',
              name: 'Организация прогулки в ДОУ.docx'
            },
            {
              path: 'организация прогулки.pptx',
              name: 'Организация прогулки в ДОУ.pptx'
            }
          ]}
          bucket='methodology'
        />

        <Post id = 'post1'
          title='Кейс-технологии'
          date='23 августа 2020'
          files={[
            {
              path: 'кейс-метод.docx',
              name: 'кейс-метод.docx'
            },
            {
              path: 'Использование кейс-технологии в работе с дошкольниками.pptx',
              name: 'Использование кейс-технологии в работе с дошкольниками.pptx'
            }
          ]}
          bucket='methodology'
        />

        </div>

        <div className='col-md-3'>
          <RightInfo />
        </div>
        
      </div>
    </div>
  )
}

export default Methodology