// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PortfolioFooter from './Portfolio';
import CreateGame from './components/GameCreation/CreateGame';
import JoinServer from './components/joinserver';
import YourComponent from './components/createserver';
import WaitingRoom from './components/WaitingRoom';
import Rulebook from './rulebook';
import Round1 from './components/round1';
import Sectors from './components/sectors';
import CommonPage from './components/CommonPage';
import SectorPage from "./sector1";
import SectorPage2 from "./sector2";
import SectorPage3 from "./sector3";
import SectorPage4 from "./sector4";
import SectorPage5 from "./sector5";
import SectorPage6 from "./sector6";
import SectorPage7 from "./sector7";
import SectorPage8 from "./sector8";
import SectorPage9 from "./sector9";
import SectorPage10 from "./sector10";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/portfolio" element={<PortfolioFooter />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/creategame" element={<CreateGame />} />
          <Route path="/joinserver" element={<JoinServer />} />
          <Route path="/createserver" element={<YourComponent />} />
          <Route path="/waitingroom" element={<WaitingRoom />} />
          <Route path="/rulebook" element={<Rulebook />} />
          <Route path="/round" element={<Round1 />} />
          <Route path="/stockinfo" element={<Sectors />} />
          <Route path="/commonpage" element={<CommonPage />} />
          <Route path="/sector/Banking" element={<SectorPage />} />
          <Route path="/sector/Telecommunication" element={<SectorPage2 />} />
          <Route path="/sector/Natural Gas and Petroleum" element={<SectorPage3 />} />
          <Route path="/sector/Steel" element={<SectorPage4 />} />
          <Route path="/sector/IT" element={<SectorPage5 />} />
          <Route path="/sector/Investment Banking" element={<SectorPage6 />} />
          <Route path="/sector/Automobile" element={<SectorPage7 />} />
          <Route path="/sector/Power and Energy" element={<SectorPage8 />} />
          <Route path="/sector/Tyres Manufacturing Companies" element={<SectorPage9 />} />
          <Route path="/sector/Healthcare & Pharma Based" element={<SectorPage10 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
