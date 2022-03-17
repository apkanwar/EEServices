import styles from '../styles/banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <header>
            <h2>100’s of employees placed in jobs every month!</h2>
            <ul className={styles.bannerButtons}>
              <li><a href="/" className={[styles.huge, styles.button].join(" ")}>Get Hired</a></li>
              <li><a href="/" className={[styles.huge, styles.button].join(" ")}>Look to Hire</a></li>
            </ul>
          </header>
        </div>
      </div>
    </section>
  )
}

export default Banner;