import styles from '../styles/aboutContent.module.css';

const AboutContent = () => {
  return (
    <section className={styles.about_banner}>
      <div className={styles.about_content}>
        <div className={styles.inner}>
          <div className={styles.statement}>
            <h2 className={styles.about_heading}>Vision</h2>
            <p className={styles.about_text}>To create an environment where everyone gets the oppoutunity they deserve.</p>
          </div>
          <div className={styles.statement}>
            <h2 className={styles.about_heading}>Goal</h2>
            <p className={styles.about_text}>Our goals are awlays to help to make sure the workers are taken care of.</p>
          </div>
          <div className={styles.statement}>
            <h2 className={styles.about_heading}>Values</h2>
            <p className={styles.about_text}>We strive to <b>Innovate</b> the user experience and <b>change</b> what it means to work with an employement service. </p>
          </div>

          <ul className={styles.bannerButtons}>
            <li><a href="/" className={[styles.huge, styles.button].join(" ")}>Get Started</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutContent;