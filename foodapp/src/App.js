import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import NavMenu from './Components/NavMenu.js'
import Routes from './PublicRoutes/Routes'


function App() {

  
  return (
    <Container>
      <NavMenu/>
      <Routes/>
    </Container>
  );
}

export default App;
