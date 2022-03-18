import styles from '../styles/footer.module.css';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <section className={styles.about}>
            <h3>Have Questions ?</h3>
            <p>Get in touch with us today through phone or email.</p>
          </section>
          <ul className={[styles.icons, styles.bulleted].join(" ")}>
            <li>
              <div className={styles.iconContainer}>
                <FacebookIcon sx={{ fontSize: 60 }} />
                <InstagramIcon sx={{ fontSize: 60 }} />
                <TwitterIcon sx={{ fontSize: 60 }} />
                <LinkedInIcon sx={{ fontSize: 60 }} />
              </div>
            </li>
          </ul>
          <ul className={[styles.icons, styles.bulleted].join(" ")}>
            <li>
              <h3 className={styles.icon_header}>Phone</h3>
              <p className={styles.close_footer}>(000) 000-0000</p>
            </li>
            <li>
              <h3 className={styles.icon_header}>Email</h3>
              <p className={styles.close_footer}><a href="mailto:ensuredsmploymentservices@gmail.com">ensuredsmploymentservices@gmail.com</a></p>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>&copy; Ensured Employment Services. All rights reserved.</p>
      <p className={styles.links}><a>Terms of Use</a> | <a>Privacy Policy</a></p>
    </footer>
  )
}

export default Footer;