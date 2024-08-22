import styles from './Footer.module.css'
import faqIcon from '../../assets/faq-icon.png';

function Footer() {
  return (
        <footer className={styles.footerSection}>
          <div className={styles.leftDiv}>
              <h1>Drew.</h1>
              <p>Let's collaborate to bring your vision to life. Feel free to reach out through any of the channels.</p>
              <button className={styles.footBtn}>LET'S CONNECT</button>
          </div>
          <div className={styles.rightDiv}>
            <button className={styles.faqBtn}>FAQS
              <img className={styles.faqIcon} src={faqIcon} alt="faqIcon"></img>
            </button>            
            <p className={styles.madeP}>Made with love</p>
            <p>&copy; 2024 Andrew Garcia. All rights reserved.</p>
          </div>
        </footer>
  )
}

export default Footer
