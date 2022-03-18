import styles from '../styles/topbar.module.css';
import { Link } from "react-router-dom";
import logo from '../images/eeLogo.png';

const TopBar = ({ type, button }) => {
  return (
    <>
      {type === 1 ? (
        <>
          <header className={styles.topbar_header}>
            <h1 className={styles.logo}>
              <img src={logo} alt="logo" className={styles.logo} />
              <Link to="/">Ensured Employement Services</Link>
            </h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/seek-work" className={styles.button}>Apply Now</Link></li>
              </ul>
            </nav>
          </header>
        </>
      ) : type === 2 ? (
        <>
          <header className={[styles.topbar_header, styles.topbar_header_alt].join(" ")}>
          <h1 className={styles.logo}>
              <img src={logo} alt="logo" className={styles.logo} />
              <Link to="/">Ensured Employement Services</Link>
            </h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {button === 'seek' ? (
                  <>
                    <li><Link to="/seek-work" className={styles.button}>Apply Now</Link></li>
                  </>
                ) : button === 'hire' ? (
                  <>
                    <li><Link to="/seek-workers" className={styles.button}>Looking to Hire</Link></li>
                  </>
                ) : null}
                <></>
              </ul>
            </nav>
          </header>
        </>
      ) : null}
    </>
  )
}

export default TopBar;