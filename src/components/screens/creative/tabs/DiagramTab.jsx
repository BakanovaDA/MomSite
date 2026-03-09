import Post from '../../../ui/Post/Post'

const DiagramTab = () => {

  return (
    <div>

      <Post id = 'post1'
        title='2025 - 2026'
        files={[
          {
            path: 'Сводный анализ результата освоения опыта по теме «Проектная деятельность... 2026.xlsx',
            name: 'Сводный анализ результата освоения опыта по теме «Проектная деятельность... 2026.xlsx',
          }
        ]}
        images={[
          'ИТОГ 3-4.png',
          'ИТОГ 4-5.png',
          'ИТОГ 5-6.png',
          'ДИНАМИКА 3-4.png',
          'ДИНАМИКА 4-5.png',
          'ДИНАМИКА 5-6.png',
        ]}
        bucket='diagram'
      />

    </div>
  )
}

export default DiagramTab