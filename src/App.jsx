import NavBar from './components/NavBar';
import './App.css'
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

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
      
    </>
  );
}

export default App;