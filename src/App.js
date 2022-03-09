import React from 'react';
import './App.css';
import Navbaar from './component/navcomp';
import Profile from './portfoliocointainer/home/profile';
import Aboutme from './portfoliocointainer/aboutme/aboutme';
import Body from './component/body';
import Project from './portfoliocointainer/project/project';
import Footer from './portfoliocointainer/footer/footer';

function App() {
  return (
    <div  >
   <Navbaar/>
   <Profile/>
   <Aboutme/>
   <Project/>
   <Footer/>

   
     
    </div>
    
  );
}

export default App;
