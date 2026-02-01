import styles from './RightInfo.module.css'
import { useEffect, useState } from 'react';

const RightInfo = () => {
  const [links, setLinks] = useState([]);

  const updateLinks = () => {
    const postElements = document.querySelectorAll('[id^="post"]');
    const generatedLinks = Array.from(postElements)
      .map(element => ({
        href: `#${element.id}`,
        title: element.querySelector('h5')?.textContent || `Пост ${element.id}`
      }))
      .filter(link => link.title);
    
    setLinks(generatedLinks);
  };

  useEffect(() => {
    updateLinks();
    
    // Опционально: обновлять при изменениях DOM
    const observer = new MutationObserver(updateLinks);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => observer.disconnect();
  }, []);

  if (links.length === 0) {
    return null; // Не показываем если нет постов
  }

  return (
    <div className={styles.rightColumn}>
      <div className={styles.info}>
        <p>Навигация по странице</p>
        <div className={styles.linksContainer}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RightInfo