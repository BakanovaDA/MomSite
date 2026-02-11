import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  
  const menuItems = [
    { path: '/', title: 'Обо мне' },
    { path: '/achievs', title: 'Достижения' },
    { path: '/pedagogy', title: 'Педагогическая деятельность' },
    { path: '/methodology', title: 'Обмен опытом' },
    { path: '/social', title: 'Общественная деятельность' },
    { path: '/creative', title: 'Творческий план работ' }
  ];

  return (
    <div className={styles.burgerButton}>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem 
              key={item.path} 
              component={Link} 
              to={item.path}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;