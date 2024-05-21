import React from 'react';
import { Connections } from '@hotglue/widget';

const ConnectionsWrapper = ({ tenant, hideFlows, multipleSources, handleButtonClick }) => {
  const handleOtherButtonClick = () => {
    // Call handleButtonClick function passed from props
    handleButtonClick();
  };

  return (
    <div>
      <Connections
        tenant={tenant}
        hideFlows={hideFlows}
        multipleSources={multipleSources}
      />
      <button onClick={handleOtherButtonClick}>Another Button</button>
    </div>
  );
};

export default ConnectionsWrapper;