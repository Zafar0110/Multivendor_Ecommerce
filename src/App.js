import logo from './logo.svg';
import './App.css';
import Header from './commonents/header/header';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home/home';
import About from './pages/about/about';
import Footer from './commonents/footer/Footer';
import Header2 from './commonents/Header2/Header2';
function App() {
  return ( 
    
    <BrowserRouter>
      <Header/>
      {/* <Header2/> */}

      <Routes>
        <Route exact={true} path="/" element={<Home/>}/> 
        <Route exact={true} path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
