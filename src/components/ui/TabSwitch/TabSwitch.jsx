import styles from './TabSwitch.module.css'
import { useState } from 'react'

const TabSwitch = ({ tabs, defaultTab }) => {

  // Получаем ключи вкладок из пропса tabs
  const tabKeys = Object.keys(tabs)
  const [activeTab, setActiveTab] = useState(defaultTab || tabKeys[0])
  

  return (
    <div>
      {/* Вкладки */}
      <div className={styles.tabs}>
        {tabKeys.map(tabKey => (
          <button 
            key={tabKey}
            className={`${styles.tab} ${activeTab === tabKey ? styles.active : ''}`}
            onClick={() => setActiveTab(tabKey)}
          >
            {tabs[tabKey].label}
          </button>
        ))}
      </div>

      {/* Контент вкладок */}
      <div className={styles.tabContent}>
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default TabSwitch