import Post from '../../../ui/Post/Post'

const ChildInteractionTab = () => {

  return (
    <div>

      <Post id = 'post3'
        title='Развлечение 1 апреля'
        date='1 апреля 2019'
        files={[
          {
            path: 'Развлечение 1 апреля.docx',
            name: 'Развлечение 1 апреля.docx'
          }
        ]}
        bucket='pedagogy'
      />

      <Post id = 'post2'
        title='Открытое занятие "Экскурсия в парк "Бузулукскиий бор"'
        date='апрель 2025'
        files={[
          {
            path: 'Открытое занятие Экскурсия в парк.docx',
            name: 'Открытое занятие Экскурсия в парк.docx'
          }
        ]}
        video='Бузулукский бор видеоэкскурсия.mp4'
        bucket='pedagogy'
      />
        
      <Post id='post1'
        title='Всеобуч "Школьный звонок"'
        date='25 марта 2024'
        files={[
          {
            path: 'Всеобуч Школьный звонок.docx',
            name: 'Всеобуч Школьный звонок.docx'
          },
          {
            path: 'виртуальная экскурсия в школу.pptx',
            name: 'Виртуальная экскурсия в школу.pptx'
          }
        ]}
        bucket='pedagogy'
      />

    </div>
  )
}

export default ChildInteractionTab