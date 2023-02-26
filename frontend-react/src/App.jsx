import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import OurNavbar from './components/navbar';

function App() {

  return (
    <div className="App">
      <OurNavbar/>
    </div>
  )
}

export default App