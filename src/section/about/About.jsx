import styles from './About.module.css'
import page2Pic from '../../assets/about-pic1.png';
import aboutEmoji from '../../assets/me.png';
import arrowUp from '../../assets/arrow-up.png';
import Icon1 from '../../assets/html-icon.png';
import Icon2 from '../../assets/css-icon.png';
import Icon3 from '../../assets/java-icon.png';
import Icon4 from '../../assets/react-icon.png';
import Icon5 from '../../assets/ionic-icon.png';
import Icon6 from '../../assets/tailwind-icon.png';
import Icon7 from '../../assets/bootstrap-icon.png';
import Icon8 from '../../assets/mysql-icon.png';
import Icon9 from '../../assets/mongodb-icon.png';
import Icon10 from '../../assets/git-icon.png';
import Icon11 from '../../assets/github-icon.png';
import Icon12 from '../../assets/webflow-icon.png';
import Icon13 from '../../assets/figma-icon.png';
import Icon14 from '../../assets/ps-icon.png';

function About() {
  return (
    <section className={styles.page2css}> 
      <div className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.divpic}>
                <img src={page2Pic} className={styles.page2pic} alt="Profile Picture"/>
              </div>
              <div className={styles.aboutdiv}>
                <h1>About Me
                  <img src={aboutEmoji} className={styles.aboutEmoji} alt="Profile Picture"/>
                </h1>
                <p className={styles.pcss}>Hi! I'm Andrew Garcia. I specialize in designing and maintaining responsive websites that deliver a seamless user experience. My strength lies in creating dynamic and engaging interfaces by writing clean, optimized code and leveraging the latest development tools and techniques. Additionally, I excel at collaborating with cross-functional teams to build exceptional web applications.</p>
                <button className={styles.viewMore}>View More<img src={arrowUp} className={styles.arrowUp} alt="arrowUp"/></button>
              </div>
            </div>
      </div>
      <div className={styles.container3}>
            <div className={styles.container2}>
              <div className={styles.aboutdiv}>
                <h1>About Me
                  <img src={aboutEmoji} className={styles.aboutEmoji} alt="Profile Picture"/>
                </h1>
                <p className={styles.pcss}>Hi! I'm Andrew Garcia. I specialize in designing and maintaining responsive websites that deliver a seamless user experience. My strength lies in creating dynamic and engaging interfaces by writing clean, optimized code and leveraging the latest development tools and techniques. Additionally, I excel at collaborating with cross-functional teams to build exceptional web applications.</p>
                <button className={styles.viewMore}>View More<img src={arrowUp} className={styles.arrowUp} alt="arrowUp"/></button>
              </div>
              <div className={styles.divpic}>
                <img src={page2Pic} className={styles.page2pic} alt="Profile Picture"/>
              </div>
            </div>
      </div> 
    </section>
  )
}

export default About
 