import NavBar from './components/NavBar';
import './App.css'
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      
      <main>
        <AboutMe />
        <Skills />
      </main>
      
    </>
  );
}

export default App;