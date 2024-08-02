import React from 'react'
import Sidenav from './components/Sidenav.jsx'
import Home from './components/Home.jsx'
import { useState } from 'react';

function App() {
  const [sliddisplay, setSideDisplay] = useState(false);
  function handlehover(){
      setSideDisplay(true);
      console.log(sliddisplay);
  }
  function handleleave(){
      setSideDisplay(false);
      console.log(sliddisplay);
  }
  return (
    <div className='h-full flex'>
          <Sidenav sliddisplay={sliddisplay} setSideDisplay={setSideDisplay} handlehover={handlehover} handleleave={handleleave}/>
          <Home sliddisplay={sliddisplay} setSideDisplay={setSideDisplay}/>
    </div>
  )
}

export default App