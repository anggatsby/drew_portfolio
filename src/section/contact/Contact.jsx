import styles from './Contact.module.css'
import contactIcon from '../../assets/phone.png';
import fbIcon from '../../assets/fbc.png';
import igIcon from '../../assets/igc.png';
import githubIcon from '../../assets/gitc.png';
import linkedinIcon from '../../assets/linkc.png';
import faqIcon from '../../assets/faq-icon.png';

function Contact() {
  return (
    <section className={styles.contactSection}>
        <div className={styles.mainDiv}>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact
                <img className={styles.contactIcon} src={contactIcon} alt="icon6"></img>
            </h1>
            <h2>Let's talk</h2>

            <div className={styles.wrapper}>
                <input className={styles.nameInput} type="text" placeholder="Firstname" required="" maxLength="35"/>
                <input className={styles.emailInput} type="text" placeholder="Email" required="" maxLength="40"/>
                <input className={styles.msgInput} type="text" placeholder="Message" required="" maxLength="100"/>
            </div>

            <button className={styles.submitBtn}>Submit</button>

            <p>+63 963 874 2315</p>
            <p>andrewcgarcia33@gmail.com</p> 
            <span>
              <a href="https://twitter.com/" target="_blank">
                <img className={styles.fbIcon} src={fbIcon} alt="Twitter icon" />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img className={styles.igIcon} src={igIcon} alt="Twitter icon" />
              </a>
              <a href="https://linkedin.com/" target="_blank">
                <img className={styles.linkedinIcon} src={linkedinIcon} alt="Linkedin icon" />
              </a>
              <a href="https://github.com/" target="_blank">
                <img className={styles.githubIcon} src={githubIcon} alt="Github icon" />
              </a>
            </span>
        </div>
    </section>
  )
}

export default Contact
