import NavBar from './components/NavBar';
import './App.css'
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      
      <main>
        <AboutMe />
      </main>
      
    </>
  );
}

export default App;