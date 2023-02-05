import React from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import ContactMe from './ContactMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/> 
      <ContactMe/>     
    </div>
  );
}

export default App;
