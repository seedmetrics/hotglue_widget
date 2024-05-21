import React, { useState, useEffect } from 'react';
import sm_logo from './assets/Header Combo (Dark).svg';
import './App.css';
import ConnectionsWrapper from './ConnectionsWrapper';
// import './connections.css';
import logo from './logo.svg';

import { Connections, useHotglue, helperText } from '@hotglue/widget';

function App() {
  const tenant = window.tenant;
  // const { link, setListener } = useHotglue(); // Move useHotglue here
  // const [linkedFlows, setLinkedFlows] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  const { link } = useHotglue();
  

  console.log({ tenant });
  
  return (
    <main>
      {/* <nav>
        <div className="container">
          <img src={sm_logo} className="App-logo" alt="logo" />
        </div>
      </nav> */}
      <header>
          <h1> Manage Data Connections </h1>
          <h3>
            Manage your linked data sources and explore new connectors available.
          </h3>
      </header>
      <section className='hg-widget'>
        <Connections
          tenant={tenant}
          hideFlows={true}
          multipleSources={true}
          hideBackButtons={true}
          // handleButtonClick={handleButtonClick} -- can only use with ConnectionsWrapper
        />
      </section>
    </main>
  );
}

export default App;