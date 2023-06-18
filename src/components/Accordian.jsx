import React, { useState,useEffect } from 'react';

const CustomAccordion = ({ title, content, expand}) => {
 
  const [isOpen,setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(expand);
  }, [expand]);
 function handleChange(){
  setIsOpen(!isOpen)
 }
  return (
    <div className="custom-accordion">
      {!isOpen && (
        <div className="custom-accordion-title" onClick={handleChange}>
          {title}
        </div>
      )}
      {isOpen && <div className="custom-accordion-content">{content}</div>}
    </div>
  );
};

export default CustomAccordion;

