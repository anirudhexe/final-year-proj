import React, { useState } from "react";

function Popup({ message }) {
  // Create a state variable to store the open status of the popup
  const [open, setOpen] = useState(false);

  // Create a function to toggle the open status
  const toggleOpen = () => {
    setOpen(!open);
  };

  // Create a function to close the popup
  const closePopup = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Use a button to trigger the popup */}
      <button onClick={toggleOpen}>Show popup</button>

      {/* Use the dialog element to create the popup */}
      <dialog open={open}>
        {/* Display the message prop inside the popup */}
        <p>{message}</p>
        {/* Use another button to close the popup */}
        <button onClick={closePopup}>Close</button>
      </dialog>
    </div>
  );
}

export default Popup;
