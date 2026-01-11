import styles from './Download.module.css'
import downloadIcon from './download.svg'

const Download = ({ file, name }) => {

  return (  
    <div className={styles.icon}>
      <a href={file} download>
        <img src={downloadIcon}></img>
        <p>{name}</p>
      </a>
    </div>
  )
}

export default Download