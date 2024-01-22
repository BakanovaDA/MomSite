import styles from './Page3.module.css'
import { Link } from 'react-router-dom'
import 'chart.js'
// import Chart from 'chart.js/auto'

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

  // var ctx = document.getElementById('myChart').getContext('2d');
  // var ctx = document.getElementsByClassName(`${styles.pie}`).getContext('2d')
  // alert(ctx)
  // var myChart = new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //         labels: ['Red', 'Blue', 'Yellow'],
  //         datasets: [{
  //             data: [12, 19, 3],
  //             backgroundColor: ['red', 'blue', 'yellow']
  //         }]
  //     },
  //     options: {
  //         plugins: {
  //             labels: {
  //                 render: 'value'
  //             }
  //         }
  //     }
  // });

  // var myChart = new Chart(ctx, {
  //   type: 'pie',
  //   data: {
  //     labels: ['Hong Kong', 'Macau', 'Japan'],
  //     datasets: [{
  //         label: 'Life expectancy',
  //         data: [84.308, 84.188, 84.118],
  //         backgroundColor: [
  //             'rgba(216, 27, 96, 0.6)',
  //             'rgba(3, 169, 244, 0.6)',
  //             'rgba(255, 152, 0, 0.6)',
  //             'rgba(29, 233, 182, 0.6)',
  //             'rgba(156, 39, 176, 0.6)',
  //             'rgba(84, 110, 122, 0.6)'
  //         ],
  //         borderColor: [
  //             'rgba(216, 27, 96, 1)',
  //             'rgba(3, 169, 244, 1)',
  //             'rgba(255, 152, 0, 1)',
  //             'rgba(29, 233, 182, 1)',
  //             'rgba(156, 39, 176, 1)',
  //             'rgba(84, 110, 122, 1)'
  //         ],
  //         borderWidth: 1
  //     }]
  // },
  // options: {
  //     legend: {
  //         display: false
  //     },
  //     title: {
  //         display: true,
  //         text: 'Life Expectancy by Country',
  //         position: 'top',
  //         fontSize: 16,
  //         padding: 20
  //     },
  //     scales: {
  //         yAxes: [{
  //             ticks: {
  //                 min: 75
  //             }
  //         }]
  //     }
  // }
  // });



  return (
    <div className='row'>
      <div className='col-3'>
        <div className={styles.nav}>
          <img src='/gg.gif' alt='гифка' width='200' height='200'></img>
          <ul>
            <li id={styles.nav1}><Link to='/'>Обо мне</Link></li>
            <li id={styles.nav2}><Link to='/page2'>Методическая деятельность</Link></li>
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