import './App.css';
import AboutPage from './pages/About';
import Banner from './pages/Banner';
import ContactPage from './pages/Contact';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
function App() {
  return (
    <div className='container mx-auto '>
      <Header></Header>
      <Banner></Banner> 
      <AboutPage></AboutPage>    
      <Skills></Skills>
      <Projects></Projects>
      <ContactPage></ContactPage>
      <Footer></Footer>
      {/* <Design></Design> */}
      <br />
      <br /> 
    </div>
    
  )
}

export default App
