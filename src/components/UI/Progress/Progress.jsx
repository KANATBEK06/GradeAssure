import styles from './Progress.module.css'

const Progress = ({ percent, variant }) => {
  return (
    <div>
      {variant === 'mini' && (
        <div className={styles.progressMini}>
          <div
            className={styles.barMini}
            style={{
              background: `conic-gradient(rgba(0, 255, 56, 1) ${
                percent.toFixed() * 3.6
              }deg, gray 0deg)`,
            }}
          >
            <h1 className={styles.percentMini}>{percent.toFixed()}%</h1>
          </div>
        </div>
      )}
      {!variant && (
        <div className={styles.progress}>
          <div
            className={styles.bar}
            style={{
              background: `conic-gradient(rgba(0, 255, 56, 1) ${
                percent.toFixed() * 3.6
              }deg, gray 0deg)`,
            }}
          >
            <h1 className={styles.percent}>{percent.toFixed()}%</h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default Progress
