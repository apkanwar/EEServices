import styles from '../styles/banner.module.css';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <header>
            <h2>100’s of employees placed in jobs every month!</h2>
            <ul className={styles.bannerButtons}>
              <li><Link to="/seek-work" className={[styles.huge, styles.button].join(" ")}>Get Hired</Link></li>
              <li><Link to="/seek-workers" className={[styles.huge, styles.button].join(" ")}>Look to Hire</Link></li>
            </ul>
          </header>
        </div>
      </div>
    </section>
  )
}

export default Banner;