import React from "react";
import './joinserver.css';
import { useNavigate } from "react-router-dom";

const JoinServer = () => {
  const navigate = useNavigate();
  return (
    <div className="join-server-page">
      <div className="join-server-container">
        <div className="input-container">
          <div>To join the game</div>
          <input
            type="number"
            placeholder="Enter Code"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button onClick={()=>navigate('/waitingroom')}>Join Server</button>
        </div>
      </div>
    </div>
  );
}

export default JoinServer;
