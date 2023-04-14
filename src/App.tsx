import './index.css'
import Data from "./data.json"
import React, { useState } from 'react'

function App() {

  const [activeDay, setActiveDay] = useState("");

  return (
    <div className="main">
      <div className="balance">
        <div className="balance-left">
          <p>My balance</p>
          <h2>$921.48</h2>
        </div>
        <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg>
      </div>
      <div className="spending">
        <h2>Spending - Last 7 days</h2>
        <div className="graph">
          {Data.map((element, index) => {

            function show(e: React.MouseEvent) {
              setActiveDay((e.target as HTMLDivElement).id)
              console.log(activeDay)
            }

            function hide() {
              setActiveDay("")
              console.log(activeDay)
            }

            const heightStyle = {
              height: element.amount*2
            }
            
            const classes = ["amount"]

            if (element.day === activeDay) {
              classes.push("active")
            }

            return (
              <div key={element.amount} className="each-data">
                  <div key={element.day} className={classes.join(" ")}>${element.amount}</div>
                  <div id={element.day} key={element.amount} onMouseOver={(e) => show(e)} onMouseLeave={hide} className="data" style={heightStyle}></div>
                  <p>{element.day}</p>
              </div>
            )
          })}
        </div>
        <p className="this-month-p">Total this month</p>
        <div className="this-month-div">
          <h1>$478.33</h1>
          <div className="comparasion">
            <p className="percent">+2.4%</p>
            <p className="comparasion-p">from last month</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
