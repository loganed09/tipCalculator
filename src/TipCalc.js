import React from 'react';

// export function TipCalc() {
//     const tipCalc = () => {
//         let tipAmt = parseFloat(document.getElementById('tip').value);
//         let mealCost = parseFloat(document.getElementById('mealCost').value);
//         let moneyMeal = mealCost.toFixed(2);
//         let totalTip = mealCost * tipAmt;
//         let moneyTip = totalTip.toFixed(2);
//         let totalCost = mealCost + totalTip;
//         let moneyCost = totalCost.toFixed(2);
//         if(document.getElementById('tip').value !== '2') {
//             let result = `Your meal costing $${moneyMeal}, with a tip of $${moneyTip}, which would give a full total of $${moneyCost}.`;
//             document.getElementById('total').innerHTML = result;
//         }else {
//             let result = `YOU CHOSE THE OMEGA TIP!!!!!!!!!! BIG MONEY!! WATCH OUT FOR THIS ONE!!! YOU HAVE DOUBLED THE COST! MAKING YOUR MEAL COST OF $${moneyMeal} COST A WHOPPING $${moneyCost} FROM AN INSANE TIP OF $${moneyTip}!!!!!`;
//             document.getElementById('total').innerHTML = result;
//         }
        
//       }

//       return (
//         <div>
//             <button onClick={tipCalc}>Calculate</button>
//             <p id="total"><span id="fullMeal"></span></p>
//         </div>
//       )
// };

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


