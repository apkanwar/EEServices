import styles from '../styles/topbar.module.css';
import { Link } from "react-router-dom";

const TopBar = ({ type }) => {
  return (
    <>
      {type === 1 ? (
        <>
          <header className={styles.topbar_header}>
            <h1><Link to="/">Ensured Employement Services</Link></h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="/" className={styles.button}>Apply Now</a></li>
              </ul>
            </nav>
          </header>
        </>
      ) : type === 2 ? (
        <>
          <header className={[styles.topbar_header, styles.topbar_header_alt].join(" ")}>
            <h1><Link to="/">Ensured Employement Services</Link></h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="/" className={styles.button}>Apply Now</a></li>
              </ul>
            </nav>
          </header>
        </>
      ) : null}
    </>
  )
}

export default TopBar;