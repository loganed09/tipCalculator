import React from 'react';

export function TipCalc() {
    const tipCalc = () => {
        let tipAmt = parseFloat(document.getElementById('tip').value);
        let mealCost = parseFloat(document.getElementById('mealCost').value);
        let moneyMeal = mealCost.toFixed(2);
        let totalTip = mealCost * tipAmt;
        let moneyTip = totalTip.toFixed(2);
        let totalCost = mealCost + totalTip;
        let moneyCost = totalCost.toFixed(2);

        // let docMeal = (document.getElementById('fullMeal').innerHTML = moneyMeal);
        // let docTip = (document.getElementById('fullTip').innerHTML = moneyTip);
        // let docFullCost = (document.getElementById('fullCost').innerHTML = moneyCost)
    

        if(document.getElementById('tip').value !== '2') {
            let result = `Your total meal cost is below:`;
            document.getElementById('total').innerHTML = result;
            document.getElementById('fullMeal').innerHTML = `${moneyMeal}`;
            document.getElementById('fullTip').innerHTML= `${moneyTip}`;
            document.getElementById('fullCost').innerHTML = `${moneyCost}`;
        }else {
            let result = `YOU CHOSE THE OMEGA TIP!!!!!!!!!! BIG MONEY!! WATCH OUT FOR THIS ONE!!! YOU HAVE DOUBLED THE COST! CHECK THE RESULTS BELOOOOOOW!!!!`;
            document.getElementById('total').innerHTML = result;
            document.getElementById('fullMeal').innerHTML = `${moneyMeal}`;
            document.getElementById('fullTip').innerHTML= `${moneyTip}`;
            document.getElementById('fullCost').innerHTML = `${moneyCost}`;
        }
        
      }

      return (
        <div>
            <button onClick={tipCalc}>Calculate</button>
            <p id="total">  </p>
            <ul>
                <label for="fullMeal">Meal Cost: </label>
                <li id="fullMeal"> </li>
                <label for="fullTip">Tip Amount: </label>
                <li id="fullTip"></li>
                <label for="fullCost">Full Meal Cost: </label>
                <li id="fullCost"></li>
            </ul>
          
        </div>
      )
};


