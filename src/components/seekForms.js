import styles from '../styles/seekForms.module.css';
import sideImg1 from '../images/office.jpg';
import sideImg2 from '../images/refer.jpg';
import sideImg3 from '../images/worker.jpg';
import sideImg4 from '../images/two_workers.jpg';

const SeekForms = ({ type }) => {
  return (
    <section className={[styles.wrapper, styles.sidebar, styles.left].join(" ")}>
      {type === 'work' ? (
        <>
          <div className={styles.inner}>
            <header className={styles.major}>
              <h2>Looking for employment</h2>
              <p>We're on the job</p>
            </header>

            {/* Content */}
            <div className={styles.content}>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOson8gyoZ9p6A8-4e66Az3IsFu6O_hR7AoSi8nPA0NCIIBg/viewform?embedded=true" className={styles.form_frame} frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              <br />
              <a href="/" className={[styles.image, styles.fit].join(" ")}>
                <img src={sideImg1} alt="" />
              </a>
              <br />
              <a href="/" className={[styles.image, styles.fit].join(" ")}>
                <img src={sideImg2} alt="" />
              </a>
              <br />
              <a href="/" className={[styles.image, styles.fit].join(" ")}>
                <img src={sideImg3} alt="" />
              </a>
              <br />
              <a href="/" className={[styles.image, styles.fit].join(" ")}>
                <img src={sideImg4} alt="" />
              </a>
            </div>
          </div>
        </>
      ) : type === 'workers' ? (
        <>
          <div className={styles.inner}>
            <header className={styles.major}>
              <h2>Looking to Hire</h2>
              <p>Let us know and we'll get you set up</p>
            </header>

            {/* Content */}
            <div className={styles.content}>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScMcngdjd5AriH8757VYSo_osJFEb1gW4FhVZ2X3HutrExSCg/viewform?embedded=true" className={styles.form_frame} frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              <br />
              <a href="/" className={[styles.image, styles.fit].join(" ")}>
                <img src={sideImg1} alt="" />
              </a>
              <br />
              <a href="/" className={[styles.image, styles.fit].join(" ")}>
                <img src={sideImg2} alt="" />
              </a>
              <br />
              <a href="/" className={[styles.image, styles.fit].join(" ")}>
                <img src={sideImg3} alt="" />
              </a>
              <br />
              <a href="/" className={[styles.image, styles.fit].join(" ")}>
                <img src={sideImg4} alt="" />
              </a>
            </div>
          </div>
        </>
      ) : null}
    </section>
  )
}

export default SeekForms;