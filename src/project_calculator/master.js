import React, { useState } from "react";
import classes from "../project_calculator/master.module.css";
import Dollar from "../image/icon-dollar.svg";
import Person from "../image/icon-person.svg";
import Logo from "../image/logo.svg";

const MasterPage = () => {
  const [inputForm, setInputForm] = useState({
    billName: "",
    numOfPeople: "",
    customTipAmount: "",
  });

  const [tipSelection, setTipSelection] = useState([]);

  const handleChanges = event => {
    setInputForm({ ...inputForm, [event.target.name]: event.target.value });
  };

  const handleTipCalculation = tipValue => {
    let billName = parseFloat(inputForm.billName);
    let numOfPerson = parseInt(inputForm.numOfPeople);
    let roundTipPercent = parseInt(tipValue) / 100;
    let tipAmount = (roundTipPercent * billName) / numOfPerson;

    let finalTipAmount =
      isNaN(billName) || isNaN(numOfPerson) || billName <= 0 || numOfPerson <= 0
        ? "0.00"
        : Math.floor(tipAmount * 100) / 100;

    let totalPersonAmount =
      isNaN(billName) || isNaN(numOfPerson) || billName <= 0 || numOfPerson <= 0
        ? "0.00"
        : ((billName * (roundTipPercent + 1)) / numOfPerson).toFixed(2);

    return { finalTipAmount, totalPersonAmount };
  };

  // let tipCustom = handleTipCalculation(parseInt(inputForm.customTipAmount));
  let selectionResult;
  const tipNumber = [5, 10, 15, 20, 25];

  const handleSelection = event => {
    selectionResult = handleTipCalculation(event.currentTarget.value);
    setTipSelection(selectionResult);
  };

  console.log(tipSelection);
  // console.log(inputForm.customTipAmount);

  return (
    <div className={classes.splitterTitleDiv}>
      <img src={Logo} alt={Logo} />
      <div className={classes.splitterForm}>
        <div>
          <div>
            <label>Bill</label>
            <div className={classes.splitterInputContainer}>
              <img src={Dollar} alt={Dollar} />
              <input
                type="number"
                name="billName"
                placeholder="0"
                className={classes.splitterFormInput}
                value={inputForm.billName}
                min="0"
                onChange={handleChanges}
              ></input>
            </div>
          </div>

          <div className={classes.splitterFormBlock}>
            <label>Select Tip %</label>
            <div className={classes.splitterInputTipGrid}>
              {tipNumber.map((tip, index) => (
                <input
                  key={index}
                  type="button"
                  className={classes.splitterInputTipBlock}
                  value={tip}
                  onClick={handleSelection}
                />
              ))}

              <input
                type="text"
                id="customTipAmount"
                name="customTipAmount"
                className={classes.spliiterInputTipBlockCustom}
                value={inputForm.customTipAmount}
                onChange={handleChanges}
                placeholder="Custom"
              />
            </div>
          </div>

          <div className={classes.splitterFormBlock}>
            <label>Number Of People</label>
            <div className={classes.splitterInputContainer}>
              <img src={Person} alt={Person} />
              <input
                type="number"
                name="numOfPeople"
                placeholder="0"
                className={classes.splitterFormInput}
                value={inputForm.numOfPeople}
                min="0"
                onChange={handleChanges}
              ></input>
            </div>
          </div>
        </div>
        <div className={classes.splitterFormTwo}>
          <div>
            <div className={classes.splitterFormTipsTwo}>
              <div className={classes.splitterFormTwoTitleSplit}>
                <label>Tip Amount</label>
                <span className={classes.splitterFormTwoSpan}>/ person</span>
              </div>

              <span className={classes.splitterFormTwoAmount}>
                ${" "}
                {tipSelection.length <= 0
                  ? "0.00"
                  : tipSelection.finalTipAmount}
              </span>
            </div>
            <div className={classes.splitterFormTipsTwo}>
              <div className={classes.splitterFormTwoTitleSplit}>
                <label>Total </label>
                <span className={classes.splitterFormTwoSpan}>/ person</span>
              </div>
              <span className={classes.splitterFormTwoAmount}>
                ${" "}
                {tipSelection.length <= 0
                  ? "0.00"
                  : tipSelection.totalPersonAmount}
              </span>
            </div>
          </div>

          <div className={classes.splitterFormResetButtonContainer}>
            <input
              type="button"
              value="reset"
              onClick={() => window.location.reload(false)}
              className={classes.splitterFormResetButton}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPage;

// const [tipAmount, setTipAmount] = useState([]);
// const [totalPerson, setTotalPerson] = useState([]);
//  const handleTipCalculation = event => {
//    let tipChanges = event.currentTarget.value;
//    let billName = parseFloat(inputForm.billName);
//    let numOfPerson = parseInt(inputForm.numOfPeople);
//    let roundTipPercent = parseInt(tipChanges) / 100;

//    customTipAmountTarget.current.value = "";

//    let tipAmount = (roundTipPercent * billName) / numOfPerson;

//    let finalTipAmount =
//      isNaN(billName) || isNaN(numOfPerson) || billName <= 0 || numOfPerson <= 0
//        ? "0.00"
//        : Math.floor(tipAmount * 100) / 100;

//    let totalPersonAmount =
//      isNaN(billName) || isNaN(numOfPerson) || billName <= 0 || numOfPerson <= 0
//        ? "0.00"
//        : ((billName * (roundTipPercent + 1)) / numOfPerson).toFixed(2);

//    setTipAmount(finalTipAmount);
//    setTotalPerson(totalPersonAmount);
//  };

// if (inputForm.customTipAmount.length > 0) {
//   const result = handleTipCalculation(parseInt(inputForm.customTipAmount));
//   console.log(result);
// }

// const handleSelection = event => {
//   const result_two = handleTipCalculation(event.currentTarget.value);
//   console.log(result_two);
// };

/* <input
              onClick={() =>
                (document.getElementById("customTipAmount").value = "")
              }
              type="button"
              value="clear"
            ></input> */

// document.getElementById("customTipAmount").value = "";
