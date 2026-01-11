import styles from './Achievs.module.css'
import Navigation from '../../ui/Navigation/Navigation'
import Label from '../../ui/Label/Label'
import TabSwitch from '../../ui/TabSwitch/TabSwitch'
import ChildrenAchievsTab from './tabs/ChildrenAchievsTab.jsx'
import MyAchievsTab from './tabs/MyAchievsTab.jsx'

const Achievs = () => {

  // Определяем вкладки с метками и контентом
  const tabs = {
    children: {
      label: 'Достижения воспитанников',
      content: <ChildrenAchievsTab />
    },
    my: {
      label: 'Мои достижения', 
      content: <MyAchievsTab />
    }
  }


  return (
    <div className={styles.body} 
        style={{
          backgroundColor: 'var(--achievements-bg-color)',
          '--text-color': 'var(--achievements-text-color)',
          '--shadow-color': 'var(--achievements-shadow-color)'
         }}>

      <div className='row'>
        
        <div className='col-md-3'>
          <Navigation />
        </div>

        <div className='col-md-6'>
          <Label />
          
          {/* Передаем вкладки в компонент */}
          <TabSwitch 
            tabs={tabs}
            defaultTab="children"
          />

        </div>

        <div className='col-md-3'></div>
      </div>
    </div>
  )
}

export default Achievs