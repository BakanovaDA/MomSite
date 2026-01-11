import styles from './Cube.module.css'

const Cube = ({ title, rotate = 'left', isActive = false }) => {

  const getCubeTransform = () => {
    switch (rotate) {
      case 'right':
        return 'rotateY(15deg) rotateX(-10deg) rotateZ(-5deg)'
      case 'left':
      default:
        return 'rotateY(-15deg) rotateX(-10deg) rotateZ(5deg)'
    }
  }


  return (
    <div className={styles.scene}>
      <div 
        className={`${styles.cube} ${isActive ? styles.cubeActive : ''}`}
        style={{ transform: getCubeTransform() }}
      >
        <div className={`${styles.cube__face} ${styles.front}`}>
          <p className={isActive ? styles.activeText : ''}>{title}</p>
        </div>
        <div className={`${styles.cube__face} ${styles.back}`}></div>
        <div className={`${styles.cube__face} ${styles.right}`}></div>
        <div className={`${styles.cube__face} ${styles.left}`}></div>
        <div className={`${styles.cube__face} ${styles.top}`}></div>
        <div className={`${styles.cube__face} ${styles.bottom}`}></div>
      </div>
    </div>
  )
}

export default Cube