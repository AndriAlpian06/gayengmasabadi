import Navbar from "../Navbar";
import Content from "../Content";
import Contact from "../Contact";
import Footer from "../Footer";
import ButtonUp from "../ButtonUp";
import { Albums } from "../Albums";


function Beranda() {
    return (
      <div>
        <Content />
        <Albums />
        <Contact />
      </div>
    );
  }
  
  export default Beranda;