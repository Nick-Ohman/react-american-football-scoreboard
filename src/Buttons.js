import React from "react";
import "./App.css";

const Buttons = (props) => {
    
    const { setHomeTeam, setAwayTeam, homeTeam, awayTeam, quarter, setQuarter } = props
    console.log(homeTeam)
    return (
        <section className="buttons">
            <div className="homeButtons">

                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button onClick={event => setHomeTeam(homeTeam + 7)} name={homeTeam}>Home Touchdown</button>
                <button onClick={event => setHomeTeam(homeTeam + 3)} name={homeTeam} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button onClick={event => setAwayTeam(awayTeam + 7)} name={awayTeam}>Away Touchdown</button>
                <button onClick={event => setAwayTeam(awayTeam + 3)} name={awayTeam}>Away Field Goal</button>
                <button onClick={event => (quarter < 4) ? setQuarter(quarter + 1) : setQuarter(0)}>Next Quarter</button>
            </div>
        </section>
    )
}

export default Buttons;