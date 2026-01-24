import Post from '../../../ui/Post/Post'

const MethodologyTab = () => {

  return (
    <div>

      <Post id = 'post3'
        title='Летняя мастерская'
        date='2020'
        files={[
          {
            path: 'Летняя мастерская.docx',
            name: 'Летняя мастерская.docx'
          },
          {
            path: 'Мастер - класс Летняя мастерская.pptx',
            name: 'Мастер - класс Летняя мастерская.pptx'
          }
        ]} 
        bucket='methodology'
      />

      <Post id = 'post2'
        title='Организация прогулки'
        date='7 июня 2023'
        files={[
          {
            path: 'организация прогулки.docx',
            name: 'Организация прогулки в ДОУ.docx'
          },
          {
            path: 'организация прогулки.pptx',
            name: 'Организация прогулки в ДОУ.pptx'
          }
        ]}
        bucket='methodology'
      />

      <Post id = 'post1'
        title='Кейс-технологии'
        date='23 августа 2020'
        files={[
          {
            path: 'кейс-метод.docx',
            name: 'кейс-метод.docx'
          },
          {
            path: 'Использование кейс-технологии в работе с дошкольниками.pptx',
            name: 'Использование кейс-технологии в работе с дошкольниками.pptx'
          }
        ]}
        bucket='methodology'
      />

    </div>
  )
}

export default MethodologyTab