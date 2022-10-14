import './App.scss';
import { default as About } from './container/About/About'
import { default as Footer } from './container/Footer/Footer'
import { default as Navbar } from './components/Navbar/Navbar';
import { default as Skills } from './container/Skills/Skills';
import { default as Work } from './container/Work/Work';
import { default as Header } from './container/Header/Header';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
