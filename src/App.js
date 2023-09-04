import './App.css';
import Beranda from './components/pages/Beranda'
import About from './components/pages/About'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Switch } from '@headlessui/react';
import Footer from './components/Footer';
import Videotron from './components/pages/Videotron';
import Branding from './components/pages/Branding';
import Billboard from './components/pages/Billboard';
import Digital_Marketing from './components/pages/Digital_marketing';
import Contact from './components/Contact';
import ButtonUp from './components/ButtonUp';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Routes>
            <Route exact path='/' element={<Beranda />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/videotron' element={<Videotron />}></Route>
            <Route exact path='/branding' element={<Branding />}></Route>
            <Route exact path='/billboard' element={<Billboard />}></Route>
            <Route exact path='/digital_marketing' element={<Digital_Marketing />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
          </Routes>
        </Switch>
        <ButtonUp />
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
