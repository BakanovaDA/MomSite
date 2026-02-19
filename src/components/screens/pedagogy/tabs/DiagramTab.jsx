import Post from '../../../ui/Post/Post'

const DiagramTab = () => {

  return (
    <div>

      <Post id = 'post1'
        title='2025 - 2026'
        files={[
          {
            path: 'Результаты освоения воспитанниками ОП ДО 2025 - 2026 гг.xlsx',
            name: 'Результаты освоения воспитанниками ОП ДО 2025 - 2026 гг.xlsx',
          }
        ]}
        images={[
          'Результаты-освоения-воспитанниками-ОП-ДО-2025-2026-гг.-_1_.webp',
          'Результаты-освоения-воспитанниками-ОП-ДО-2025-2026-гг.-_2_.webp'
        ]}
        bucket='diagram'
      />

    </div>
  )
}

export default DiagramTab