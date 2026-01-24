import styles from './Navigation.module.css'
import { Link, useLocation } from 'react-router-dom'
import Cube from './Cube/Cube'

const Navigation = () => {

  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/MomSite/', title: 'Обо мне', rotate: 'left' },
    { path: '/MomSite/Achievs', title: 'Достижения', rotate: 'right' },
    { path: '/MomSite/pedagogy', title: 'Педагогическая деятельность', rotate: 'left' },
    { path: '/MomSite/methodology', title: 'Обмен опытом', rotate: 'right' },
    { path: '/MomSite/social', title: 'Общественная деятельность', rotate: 'left' },
    { path: '/MomSite/creative', title: 'Творческий план работ', rotate: 'right' }
  ];


  return (
    <div className={styles.nav}>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>
              <Cube 
                title={item.title} 
                rotate={item.rotate}
                isActive={isActive(item.path)}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation