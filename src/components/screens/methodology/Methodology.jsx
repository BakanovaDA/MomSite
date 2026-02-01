import styles from './Methodology.module.css'
import Navigation from '../../ui/Navigation/Navigation'
import RightInfo from '../../ui/RightInfo/RightInfo'
import Label from '../../ui/Label/Label'
import TabSwitch from '../../ui/TabSwitch/TabSwitch'
import MethodologyTab from './tabs/MethodologyTab.jsx'
import PublicationsTab from './tabs/PublicationsTab.jsx'

const Methodology = () => {

    // Определяем вкладки с метками и контентом
  const tabs = {
    methodology: {
      label: 'Методическая деятельность',
      content: <MethodologyTab />
    },
    publication: {
      label: 'Публикации', 
      content: <PublicationsTab />
    }
  }


  return (
    <div className={styles.body} 
        style={{
          backgroundColor: 'var(--methodology-bg-color)',
          '--text-color': 'var(--methodology-text-color)',
          '--dark-color': 'var(--methodology-dark-color)',
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

        <div className='col-md-6 p-0'>

          <Label />

          {/* Передаем вкладки в компонент */}
          <TabSwitch 
            tabs={tabs}
            defaultTab="methodology"
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