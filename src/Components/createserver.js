import React from 'react';
import { useNavigate } from 'react-router-dom';
import './createserver.css'; // Import your CSS file

const YourComponent = () => {
  const handleGetCode = () => {
    // Add your code to handle the button click event here
    alert("This is your code!"); // Display an alert box
  };
  const navigate = useNavigate();
    const HandleWaitingRoom = () => {
      localStorage.setItem('host',true)
      navigate('/waitingroom');
    }

  return (
    <div className="create-server-page">
      <div className="create-server-container">
        <button className="create-server-button" onClick={handleGetCode}>
          Get the code
        </button>
        {/* Additional elements with create-server styles */}
        <p className="tptext">  Share this code with your friends and let the trader in you rise to the glory!!
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="create-room-button" onClick={HandleWaitingRoom}> 
        Head to the waiting room
        </button>
      </div>
    </div>
  );
};

export default YourComponent;
