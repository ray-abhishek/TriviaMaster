import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Menu from './Components/Menu.js'
import Routes from './PublicRoutes/Routes'

function App() {
  return (
    <Container>
      <Menu/>
      <Routes/>
    </Container>
  );
}

export default App;
