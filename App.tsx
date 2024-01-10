import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Button, Container, Typography } from '@mui/material';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
     <Container>
      <Typography variant="h3">React + TypeScript + Firebase + Material-UI</Typography>
      <Button variant="contained" color="primary">
        Click me!
      </Button>
    </Container>
    </>
  );
}

export default App;
