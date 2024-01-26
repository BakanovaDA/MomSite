import styles from './Page3.module.css'
import { Link } from 'react-router-dom'
import 'chart.js'

const Page3 = () => {

  const pieChartData = {
    labels: ["дети с высоким уровнем %32", "дети с низким уровнем %32", "дети со средним уровнем %36"],
    datasets: [{
        data: [32, 32, 36],
        label: "Диагностика по разделу 'РАЗВИТИЕ РЕЧИ' старшей группы 5-6 лет",
        backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600"],
        hoverBackgroundColor: ["#175000", "#003350", "#993d00"]
    }]
  }


  return (
    <div className='row'>
      <div className='col-3'>
        <div className={styles.nav}>
          <img src='/gg.gif' alt='гифка' width='200' height='200'></img>
          <ul>
            <li id={styles.nav1}><Link to='/MomSite/'>Обо мне</Link></li>
            <li id={styles.nav2}><Link to='/MomSite/page2'>Методическая деятельность</Link></li>
          </ul>
        </div>
      </div>

      <div className='col-9'>
        <div className={styles.actual}>
          <h1>Диаграмма</h1>
          <canvas id={styles.pie} width="600" height="400">Ghbd</canvas>
        </div>
      </div>
    </div>
  )
}

export default Page3