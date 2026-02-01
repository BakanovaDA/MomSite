import styles from './Social.module.css'
import Navigation from '../../ui/Navigation/Navigation'
import RightInfo from '../../ui/RightInfo/RightInfo'
import Label from '../../ui/Label/Label'
import TabSwitch from '../../ui/TabSwitch/TabSwitch'
import ContestsTab from './tabs/ContestsTab.jsx'
import GaleryTab from './tabs/GaleryTab.jsx'

const Social = () => {

  // Определяем вкладки с метками и контентом
  const tabs = {
    сontests: {
      label: 'Конкурсное движение',
      content: <ContestsTab />
    },
    galery: {
      label: 'Галерея', 
      content: <GaleryTab />
    }
  }


  return (
    <div className={styles.body} 
        style={{
          backgroundColor: 'var(--social-bg-color)',
          '--text-color': 'var(--social-text-color)',
          '--dark-color': 'var(--social-dark-color)',
          '--shadow-color': 'var(--social-shadow-color)'
         }}>

      <div className='row'>
        
        <div className='col-md-3'>
          <Navigation />
        </div>

        <div className='col-md-6 p-0'>
          <Label />
          
          {/* Передаем вкладки в компонент */}
          <TabSwitch 
            tabs={tabs}
            defaultTab="сontests"
          />

        </div>

        <div className='col-md-3'>
          <RightInfo />
        </div>
      </div>
    </div>
  )
}

export default Social