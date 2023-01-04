import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import Homepage from './components/homepage/Homepage';
import Topbar from './components/library/topbar/Topbar';
import PageNotFound from './components/library/404/PageNotFound';

import { ToastContainer } from 'react-toastify'; //React Toastify
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Topbar/>
            <Routes>
                <Route path='/' index element={<Homepage/>}/>
                <Route path='/home' element={<Homepage/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>

        <div>
          <ToastContainer />
        </div>
    </div>
  );
}

export default App;
