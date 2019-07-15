import React from 'react';
import './style/App.css';

import Index from './views/index'
import Header from "./components/common/header";
import Footer from "./components/common/footer";

function App() {
  return (
    <div className="App">
        <Header />
      <Index/>
      <Footer/>
    </div>
  );
}

export default App;
