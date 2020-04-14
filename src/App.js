//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import TopRow from "./TopRow";
import Buttons from "./Buttons";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeTeam, setHomeTeam] = useState(0)
  const [awayTeam, setAwayTeam] = useState(0)
  const [quarter, setQuarter] = useState(0)

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeTeam={homeTeam} awayTeam={awayTeam} />
        <BottomRow quarter={quarter} />
      </section>
      <Buttons setHomeTeam={setHomeTeam} setAwayTeam={setAwayTeam} awayTeam={awayTeam} homeTeam={homeTeam}quarter={quarter} setQuarter={setQuarter} />
    </div>
  );
}

export default App;
