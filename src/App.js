import React from 'react';
import './style/App.css';

import Index from './views/index'
import Header from "./components/header";

function App() {
  return (
    <div className="App">
        <Header />
      <Index/>
    </div>
  );
}

export default App;
