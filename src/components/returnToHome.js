import styles from '../styles/returnToHome.module.css';
import styles_two from '../styles/aboutContent.module.css';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={styles.fof}>
      <h1>/404/</h1>
      <h1>Page Not Found</h1>

      <ul className={styles_two.bannerButtons}>
        <li><Link to="/" className={[styles.button, styles_two.huge, styles.button].join(" ")}>Return to home</Link></li>
      </ul>
    </div>
  )
}

export default Banner;