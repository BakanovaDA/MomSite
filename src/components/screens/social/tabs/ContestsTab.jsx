import Post from '../../../ui/Post/Post'

const ContestsTab = () => {

  return (
    <div> 

      <Post id = 'post7'
        title='Профсоюзный конкурс "Виват, таланты"'
        date='апрель 2025'
        image='Виват, таланты.jpg'
        bucket='social'
      />

      <Post id = 'post6'
        title='Благотворительная акция "Своих не бросаем"'
        date='10 февраля 2024'
        image='Своих не бросаем.jpg'
        bucket='social'
      />

      <Post id = 'post5'
        title='Вокально-инструментальная композиция "Маков цвет"'
        date='2 ноября 2022'
        image='Маков цвет.jpg'
        video='Маков цвет.mp4'
        bucket='social'
      />

      <Post id = 'post4'
        title='Песня "Хотят ли русские войны"'
        image='Хотят ли русские войны.jpg'
        video='хотят ли русские войны.mp4'
        bucket='social'
      />

      <Post id = 'post3'
        title='Музыкальная композиция "С профсоюзом мы друзья"'
        image='С профсоюзом мы друзья.jpg'
        bucket='social'
      />

      <Post id = 'post2'
        title='Песня "Душечка моя"'
        image='Душечка моя.jpg'
        bucket='social'
      />

      <Post id = 'post1'
        title='Казачья песня "Ой, Дуся, ой, Маруся"'
        image='Ой, Дуся, ой, Маруся.jpg'
        video='Дуся-Маруся песня.mp4'
        bucket='social'
      />

    </div>
  )
}

export default ContestsTab