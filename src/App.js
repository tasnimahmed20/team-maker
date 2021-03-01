import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Players from './components/Players/Players';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <main>
      <Banner></Banner>
      <Players></Players>
     </main>
    </div>
  );
}

export default App;
