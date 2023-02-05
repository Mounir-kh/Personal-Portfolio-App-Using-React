import React from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import ContactMe from './ContactMe';
import Portfolio from './Portfolio';
function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/> 
      <Portfolio/>
      <ContactMe/>     
    </div>
  );
}

export default App;
