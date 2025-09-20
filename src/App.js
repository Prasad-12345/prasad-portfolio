import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import NavBar from './components/navBar';
import Particles from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import {particlesConfig} from "./utils/particles";
// import { loadFull } from "@tsparticles/engine";

function App() {
  const location = useLocation()
  const handleInit = async (main) => {
    console.log("handle init")
    await loadAll(main)
  }
  return (
    <div className="App">
      {/* particles js */}
      {location.pathname === '/' && <Particles id='particles' options={particlesConfig} init={handleInit}/>}

      {/* navbar */}
      <NavBar/>

      {/* main page content */}
      <div className='App_main_page_content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
