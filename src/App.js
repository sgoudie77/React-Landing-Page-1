import React from 'react'
import './App.css';
import Header from './components/Header';
import SiteInfo from './components/Main';
import Footer from './components/Footer';
import './css/main.css';

function App() {
  return (
    <div className="body">
      <Header />
      <SiteInfo />
      <Footer />
    </div>
  );
}

export default App;
