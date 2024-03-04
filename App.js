import React from 'react'

import { Connections } from '@hotglue/widget';

const App = (props) => {
  return (
    <div>
      <Connections tenant="test-user" />
    </div>
  );
};

export default App;