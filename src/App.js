//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import TopRow from "./TopRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeTeam, setHomeTeam] = useState(0)
  const [awayTeam, setAwayTeam] = useState(0)
  const [quarter, setQuarter] = useState(0)

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeTeam = {homeTeam} awayTeam = {awayTeam}/>
        <BottomRow quarter={quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick ={event => setHomeTeam(homeTeam + 7)} name ={homeTeam}>Home Touchdown</button>
          <button onClick ={event => setHomeTeam(homeTeam + 3)} name ={homeTeam}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick ={event => setAwayTeam(awayTeam + 7)} name={awayTeam}>Away Touchdown</button>
          <button onClick ={event => setAwayTeam(awayTeam + 3)} name={awayTeam}>Away Field Goal</button>
          <button onClick = {event => (quarter < 4) ? setQuarter(quarter + 1) : setQuarter(0)}>Next Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
