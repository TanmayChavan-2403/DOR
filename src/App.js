import React from 'react';

import Navbar from './components/scripts/navbar.js';
import Banner from './components/scripts/banner.js';
import VTW from './components/scripts/vtw.js'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <VTW />
    </React.Fragment>
  );
}

export default App;
