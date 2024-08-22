import Navbar from './section/navbar/Navbar';
import Home from './section/home/Home';
import About from './section/about/About';
import Service from './section/service/Service';
import Project from './section/project/Project';
import Contact from './section/contact/Contact';
import Footer from './section/footer/Footer';

function App() {
  return (
    <>
      <nav><Navbar/></nav>
      <section><Home/></section>
      <section><About/></section>
      <section><Service/></section>
      <section><Project/></section>
      <section><Contact/></section>
      <footer><Footer/></footer>
    </>
  )
}

export default App
