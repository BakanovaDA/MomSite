import styles from './Creative.module.css'
import Navigation from '../../ui/Navigation/Navigation'
import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu'
import { checkIsMobile } from '../../../utils/isMobile'
import RightInfo from '../../ui/RightInfo/RightInfo'
import Label from '../../ui/Label/Label'
import TabSwitch from '../../ui/TabSwitch/TabSwitch'
import CreativeTab from './tabs/CreativeTab.jsx'
import DiagramTab from './tabs/DiagramTab.jsx'

const Creative = () => {

  // Определяем вкладки с метками и контентом
  const tabs = {
    creative: {
      label: 'Мои разработки',
      content: <CreativeTab />
    },
    diagram: {
      label: 'Сводный анализ освоения опыта по теме "Проектная деятельность"', 
      content: <DiagramTab />
    }
  }


  return (
    <div className={styles.body} 
        style={{
          backgroundColor: 'var(--creative-bg-color)',
          '--text-color': 'var(--creative-text-color)',
          '--dark-color': 'var(--creative-dark-color)',
          '--shadow-color': 'var(--creative-shadow-color)'
         }}>
          
      <div className='row'>

        {checkIsMobile() ? (
          <BurgerMenu />
        ) : (
          <div className='col-md-3'>
            <Navigation />
          </div>
        )}

        <div className='col-md-6 p-0'>

          <Label />

          {/* Передаем вкладки в компонент */}
          <TabSwitch 
            tabs={tabs}
            defaultTab="creative"
          />

        </div>

        <div className='col-md-3'>
          <RightInfo />
        </div>

      </div>
    </div>
  )
}

export default Creative