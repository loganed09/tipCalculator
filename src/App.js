import React, {useState} from 'react';
import './App.css';
import {TipCalc} from './TipCalc';


export default function App() {
  
  return (
    <body>
        <div className="mainContainer">
            <h1>Tip Calculator</h1>
            <label for="mealCost">Meal Cost:    </label>
            <input type="number" id="mealCost" className="mealCost" />
            <br/><br/>
            <label for="tip">Tip Percentage:    </label>
            <select id="tip" className="tip">
                <option value=".05">5%</option>
                <option value=".10">10%</option>
                <option value=".15">15%</option>
                <option value=".20">20%</option>
                <option value=".25">25%</option>
                <option value=".30">30%</option>
                <option value="2">??</option>
            </select>
            <br/><br/>
            <TipCalc />
        </div>
    </body>
  )
}

