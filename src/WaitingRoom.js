// WaitingRoom.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WaitingRoom.css"; // Import your CSS file
import socket from "../lib/socketInstance";

const WaitingRoom = () => {
  const navigate = useNavigate();
  const HandleRounds = () => {
    navigate("/round");
  };

  const [players, setPlayers] = useState([]);
  const [host, setHost] = useState(false);

  useEffect(() => {
    setHost(localStorage.getItem("host"));
    const id = localStorage.getItem("userID");
    const email = localStorage.getItem("email_id");
    socket.emit("join-room", 8498498, id, email);
    const findInArray = players.find((item) => item === email);
    if (!findInArray) {
      setPlayers((prev) => [...prev, email]);
    }
  }, []);

  useEffect(() => {
    socket.on("user-connected", (userId, name) => {
      console.log(`User connected to the room ${name}`);
      const findInArray = players.find((item) => item === name);
      if (!findInArray) {
        setPlayers((prev) => [...prev, name]);
      }
    });
  }, [socket]);
  return (
    <div className="waiting-room-container">
      <h2>Waiting Room</h2>
      {host ? (
        <>
          <div className="player-list">
            {players?.length !== 0 &&
              players?.map((player, index) => (
                <div key={index} className="player-item">
                  {player}
                </div>
              ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="startGame" onClick={HandleRounds}>
            Start Game
          </button>
        </>
      ) : (
        <h3>You have joined the room</h3>
      )}
    </div>
  );
};

export default WaitingRoom;
