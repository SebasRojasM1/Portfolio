import NavBar from './components/NavBar';
import './App.css'
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      
      <main>
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;