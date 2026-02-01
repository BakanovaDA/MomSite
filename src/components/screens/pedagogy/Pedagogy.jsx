import styles from './Pedagogy.module.css'
import Navigation from '../../ui/Navigation/Navigation'
import RightInfo from '../../ui/RightInfo/RightInfo'
import Label from '../../ui/Label/Label'
import TabSwitch from '../../ui/TabSwitch/TabSwitch'
import ChildInteractionTab from './tabs/ChildInteractionTab.jsx'
import ParentInteractionTab from './tabs/ParentInteractionTab.jsx'

const Pedagogy = () => {

    // Определяем вкладки с метками и контентом
  const tabs = {
    children: {
      label: 'Работа с детьми',
      content: <ChildInteractionTab />
    },
    parent: {
      label: 'Работа с родителями', 
      content: <ParentInteractionTab />
    }
  }


  return (
    <div className={styles.body} 
        style={{
          backgroundColor: 'var(--pedagogy-bg-color)',
          '--text-color': 'var(--pedagogy-text-color)',
          '--dark-color': 'var(--pedagogy-dark-color)',
          '--shadow-color': 'var(--pedagogy-shadow-color)'
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
            defaultTab="children"
          />

        </div>

        <div className='col-md-3'>
          <RightInfo />
        </div>

      </div>
    </div>
  )
}

export default Pedagogy