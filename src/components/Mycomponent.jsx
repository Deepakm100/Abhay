import React from 'react';
import Accordion from '../components/Accordian';

const MyComponent = () => {
  return (
    <div>
      <Accordion title="Accordion 1" content="Content for Accordion 1" />
      <Accordion title="Accordion 2" content="Content for Accordion 2" />
      {/* Add more accordion instances as needed */}
    </div>
  );
};

export default MyComponent;
