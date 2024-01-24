import './index.css'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './Home';
import AboutUs from './AboutUs';
import Support from './Support';
import Report from './Report';
import Donate from './Donate';
import Adopt from './Adopt';
import View from './View';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ThankyouReport from './ThankyouReport';
import SupportFeedback from './SupportFeedback';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/report' element={<Report/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path='/donate' element={<Donate/>}></Route>
        <Route path='/adopt' element={<Adopt/>}></Route>
        <Route path='/adoptme/:id' element={<View/>}></Route>
        <Route path='/reportFeedback' element={<ThankyouReport/>}></Route>
        <Route path='/supportFeedback' element={<SupportFeedback/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
