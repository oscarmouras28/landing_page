import './App.css';
import Navbar from './components/Navbar.js';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Navbar />
      <div className='Container'>
        <Jumbotron />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default App;