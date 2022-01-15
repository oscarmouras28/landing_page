import './App.css';
import Navbar from './components/Navbar.js';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Cards from './components/Cards';

const arrObj = [
  { img: "https://i.pinimg.com/564x/7d/97/14/7d9714433932e6bd94b0aba5d9058b9c.jpg", title: "sara gatica", desc: "oye teamo mxo", url: "https://www.pinterest.cl/pin/233413193177804029/", btntxt: "Ver imagen en Pinterest" },
  { img: "https://i.pinimg.com/564x/f5/8f/86/f58f86ee83e58fcdcbe9094fbed2fb61.jpg", title: "oscar mouras", desc: "gatsu", url: "https://www.pinterest.cl/pin/700802392021787022/", btntxt: "Ver imagen en Pinterest" },
  { img: "https://i.pinimg.com/564x/a7/ef/d0/a7efd01543ea62aea0d93c9d2fc8edcc.jpg", title: "jeremy correa", desc: "main yasuo", url: "https://www.pinterest.cl/pin/673499319277981334/", btntxt: "Ver imagen en Pinterest" },
  { img: "https://i.pinimg.com/564x/5a/6d/df/5a6ddfd7f1d301f2ae2f8c3823bcea44.jpg", title: "pablo torres", desc: "main ekko", url: "https://www.pinterest.cl/pin/300685712631193956/", btntxt: "Ver imagen en Pinterest" }
];

function App() {
  return (
    <div>
      <Navbar />
      <div className='Container'>
        <Jumbotron />
        <div className="row d-flex justify-content-between px-5  ">
          {arrObj.map((item) => {
            return <Cards
              img={item.img}
              title={item.title}
              desc={item.desc}
              url={item.url}
              btntxt={item.btntxt} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;