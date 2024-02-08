import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateGame.css';

const CreateGame = () => {
  const navigate = useNavigate();

  const handleJoinServer = () => {
    navigate('/joinserver');
  };
  const handleCreateServer = () => {
    navigate('/createserver');
  };

  return (
    <div className="create-game-body">
      <div className="card-container">
        <div className="card create-server">
          <div className="card-body items-center text-center">
            <h2 className="card-title"></h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost1" onClick={handleCreateServer}>
                Create a server
                </button>
            </div>
          </div>
        </div>

        <div className="card join-server">
          <div className="card-body items-center text-center">
            <h2 className="card-title"></h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost2" onClick={handleJoinServer}>
                Join a Server
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;