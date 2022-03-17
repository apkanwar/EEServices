import styles from '../styles/list.module.css';
import DonutIcon from '@mui/icons-material/DonutLarge';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const List = () => {
  return (
    <section id="one" className={styles.wrapper}>
      <div className={styles.inner}>
        <ul className={styles.features}>
          <li>
            <DonutIcon fontSize="large" color="secondary" />
            <h3>3 Step Hiring Process <br/> <hr style={{ backgroundColor: "#ad56bc" }}/></h3>
            <p>We break down the recruiting process in to three simple and effective steps that helps us offer equalified and efficient manpower. </p>
          </li>
          <li>
            <PersonSearchIcon fontSize="large" sx={{ color: "#fab131" }} />
            <h3>Screening <br/> <hr style={{ backgroundColor: "#fab131" }}/></h3>
            <p>We search through our database to find the best qualified applicants for the job requirements. Our screening process allows us to reduce future complication and make sure that our clients receive the best possible applicant.</p>
          </li>
          <li>
            <CorporateFareIcon fontSize="large" sx={{ color: "#3c8280" }} />
          <h3>Placement <br/> <hr style={{ backgroundColor: "#3c8280" }}/></h3>
            <p>Workers are dispatched in a timely ordered  manner, reaching the facility with all necessary requirements. Workers are then informed of there duty and assigned jobs.  </p>
          </li>
          <li>
            <LocalShippingIcon fontSize="large" color="primary" />
            <h3>Deliever and Monitor <br/> <hr style={{ backgroundColor: "#1976d2" }}/></h3>
            <p>At this stage, the workers are executing there assigned duties. Assured Employment then awaits for clients feedback, were we than take notes to improve our service to provide our clients with 100% satisfaction with our competitive rates.  </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default List;