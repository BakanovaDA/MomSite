import Post from '../../../ui/Post/Post'

const ParentInteractionTab = () => {

  return (
    <div>

      <Post id = 'post4'
        title='Всеобуч "Патриотическое воспитание"'
        date='февраль 2023'
        files={[
          {
            path: 'Сценарий Всеобуча Патриотическое воспитание.docx',
            name: 'Сценарий Всеобуча Патриотическое воспитание.docx'
          },
          {
            path: 'Всеобуч Патриотическое воспитание Пословицы.pptx',
            name: 'Всеобуч Патриотическое воспитание Пословицы.pptx'
          }
        ]}
        bucket='pedagogy'
      />

      <Post id='post3'
        title='Всеобуч "ПДД"'
        date='26 января 2024'
        images={[
          "ПДД (1).jpg",
          "ПДД (2).jpeg",
          "ПДД (3).jpeg"
        ]}
        files={[
          {
            path: 'Сценарий всеобуча ПДД.docx',
            name: 'Всеобуч ПДД.docx'
          },
          {
            path: 'пдд песня.jpg',
            name: 'Песенка про ПДД.svg'
          }
        ]}
        bucket='pedagogy'
      />

      <Post id='post2'
        title='Всеобуч для родителей "Безопасность детей"'
        date='7 декабря 2023'
        video='пдд video.mp4'
        bucket='pedagogy'
      />

      <Post id='post1'
        title='Всеобуч "ОБЖ"'
        date='20 ноября 2023'
        video='/MomSite/pedagogy/ОБЖ/pdd.mp4'
        bucket='pedagogy'
      />

    </div>
  )
}

export default ParentInteractionTab