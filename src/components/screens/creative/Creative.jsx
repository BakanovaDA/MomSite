import styles from './Creative.module.css'
import Navigation from '../../ui/Navigation/Navigation'
import RightInfo from '../../ui/RightInfo/RightInfo'
import Label from '../../ui/Label/Label'
import Post from '../../ui/Post/Post'

const Creative = () => {

  return (
    <div className={styles.body} 
        style={{
          backgroundColor: 'var(--creative-bg-color)',
          '--text-color': 'var(--creative-text-color)',
          '--dark-color': 'var(--creative-dark-color)',
          '--shadow-color': 'var(--creative-shadow-color)'
         }}>
          
      <div className='row'>
        <div className='col-md-3'>
          <Navigation />
        </div>

        <div className='col-md-6 p-0'>
          <Label />

          <Post id = 'post3'
            title='Сценарий развлечения, посвященного "Дню России"'
            date='12 июня 2025'
            files={[
              {
                path: 'День России сценарий.docx',
                name: 'День России сценарий.docx'
              }
            ]}
            bucket='creative'
          />  

          <Post id='post2'
            title='Мамин день'
            date='25 ноября 2023'
            images={[
              'Мамин день (1).jpg',
              'Мамин день (2).png',
              'Мамин день (3).jpg',
              'Мамин день (4).jpg'
            ]}
            files={[
              {
                path: 'сценарий родительской гостиной на тему Мамы всякие нужны, мамы всякие важны.docx',
                name: 'Сценарий "Мамин день".docx'
              }
            ]}
            bucket='creative'
          />

          <Post id='post1'
            title='Золотая осень'
            date='20 сентября 2023'
            images={[
              'Осенняя ярмарка (1).jpg',
              'Осенняя ярмарка (2).jpg',
              'Осенняя ярмарка (3).jpg',
              'Осенняя ярмарка (4).jpg',
              'Осенняя ярмарка (5).jpg',
              'Осенняя ярмарка (6).jpg',
              'Осенняя ярмарка (7).jpg',
              'Осенняя ярмарка (8).jpg',
              'Осенняя ярмарка (9).jpg',
              'Осенняя ярмарка (10).jpg',
              'Осенняя ярмарка (11).jpg'
            ]}
            files={[
              {
                path: 'Конспект Осенняя ярмарка.pdf',
                name: 'Конспект "Осенняя ярмарка".pdf'
              }
            ]}
            bucket='creative'
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