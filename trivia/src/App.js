import React from 'react';
import Routing from './Components/Routes/Routing'
import {Link} from 'react-router-dom'
import './App.css';
import Container from 'react-bootstrap/Container'
import LandingPage from './Components/Pages/LandingPage'

function App() {
  return (
    <Container fluid className="main-div">
      <Link to="/"></Link>
      <Routing/>
    </Container>
  );
}

export default App;
