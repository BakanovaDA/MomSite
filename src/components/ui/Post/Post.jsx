import styles from './Post.module.css'
import Download from './Download/Download'
import Carousel from './Carousel/Carousel'

const Post = ({
  id,
  title='Материал воспитателя', 
  date, 
  description, 
  files=[],
  image=null, 
  images=null,
  video=null,
  bucket='moms-files'
}) => {

  const SERVER_URL = 'http://localhost:5000';

  const getMinioUrl = (filename) => {
    return `${SERVER_URL}/api/files/${bucket}/${filename}`;
  };
  
  return (
    <div id={id} className={styles.post}>
      <h5>{title}</h5>
      <p>{date}</p>
      <p>{description}</p>

      {image && <img src={getMinioUrl(image)} alt="img"></img>}

      {images && <Carousel images={images.map(img => getMinioUrl(img))}/>}

      {files.length > 0  && files.map((file, index) => (
        <Download 
          key={index} 
          file={getMinioUrl(file.path)} 
          name={file.name} 
        />
      ))}

      {video &&
        <video className={styles.video} controls preload="none">
          <source src={getMinioUrl(video)} type="video/mp4"></source>
        </video>
      }

    </div>
  )
}

export default Post