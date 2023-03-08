import styles from '../styles/footer.module.css';
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
                <a href='https://www.facebook.com/ensuredemployment'><FacebookIcon sx={{ fontSize: 60 }} /></a>
                <a href='https://www.instagram.com/ensuredemployment/'><InstagramIcon sx={{ fontSize: 60 }} /></a>
                <a href='https://www.facebook.com/ensuredemployment'><TwitterIcon sx={{ fontSize: 60 }} /></a>
                <a href='https://www.linkedin.com/company/84879927/admin/'><LinkedInIcon sx={{ fontSize: 60 }} /></a>
              </div>
            </li>
          </ul>
          <ul className={[styles.icons, styles.bulleted].join(" ")}>
            <li>
              <h3 className={styles.icon_header}>Phone</h3>
            </li>
            <li>
              <h3 className={styles.icon_header}>Email</h3>
              <p className={styles.close_footer}><a href="mailto:ensuredemployment@gmail.com">Email Us</a></p>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>&copy; Ensured Employment Services. All rights reserved.</p>
      {/* <p className={styles.links}><a>Terms of Use</a> | <a>Privacy Policy</a></p> */}
    </footer>
  )
}

export default Footer;
