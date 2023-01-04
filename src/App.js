import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import Homepage from './components/homepage/Homepage';
import Topbar from './components/library/topbar/Topbar';
import Footer from './components/library/footer/Footer';
import Error from './components/library/Error';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            {/* <Topbar/> */}
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
