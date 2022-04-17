import styles from '../styles/seekForms.module.css';
import sideImg1 from '../images/office.webp';
import sideImg2 from '../images/refer.webp';
import sideImg3 from '../images/worker.webp';
import sideImg4 from '../images/two_workers.webp';

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
              <iframe title="Seek Job - Form" src="https://docs.google.com/forms/d/e/1FAIpQLSdAZVRnDxzLFdZWOAVPZqjD_oWYde0Uyn9X-xSKiltlU1Hulg/viewform?embedded=true" className={styles.form_frame} frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              <p>After your done, please send your resume to <a href="mailto:ensuredemployment@gmail.com" className={styles.formEmail}>ensuredemployment@gmail.com</a> and we'll get back to you shortly!</p>
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
              <iframe title="Seek Workers - Form" src="https://docs.google.com/forms/d/e/1FAIpQLSdcLk2fAYXWw8_8jaiLfe6BYPpukwPHqWo7wQwLLZkS6KR7Jw/viewform?embedded=true" className={styles.form_frame} frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
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