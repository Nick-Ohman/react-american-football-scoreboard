//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";





function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeTeam, setHomeTeam] = useState(0)
  const [awayTeam, setAwayTeam] = useState(0)

  const homeTouchDown = event => {
    setHomeTeam(homeTeam + 7)
  }
  const homeFieldGoal = event => {
    setHomeTeam(homeTeam + 3)
  }

  const awayTouchDown = event => {
    setAwayTeam(awayTeam + 7)
  }

  const awayFieldGoal = event => {
    setAwayTeam(awayTeam + 3)
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeTeam}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayTeam}</div>
          </div>
        </div>
        <BottomRow />
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
        </div>
      </section>
    </div>
  );
}

export default App;
