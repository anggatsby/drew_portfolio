import styles from './Navbar.module.css'
import burgerIcon from '../../assets/burgerNav.svg';

function Navbar() {
  return (

    <nav>
      <h1 className={styles.logo}>Drew.</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Service</a></li> 
      <li><a href="#">Project</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <img className={styles.burgerIcon} src={burgerIcon} alt="burger icon" />
    </nav>
  )
}

export default Navbar
