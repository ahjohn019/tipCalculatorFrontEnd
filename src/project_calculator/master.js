import React, { useState } from "react";
import classes from "../project_calculator/master.module.css";
import Dollar from "../image/icon-dollar.svg";
import Person from "../image/icon-person.svg";
import Logo from "../image/logo.svg";
import handleTipCalculation from "../project_calculator/handleTipCalculation";

const MasterPage = () => {
  //setup input form
  const [inputForm, setInputForm] = useState({
    billName: "",
    numOfPeople: "",
  });

  //initialize tip form list
  const [customTipAmount, setCustomTipAmount] = useState("");
  const [tipSelection, setTipSelection] = useState([]);
  let tipPercentSelection;
  let clearPercentTips;

  //pass the tipamount to handletip calculation function
  let tipCustom = handleTipCalculation(parseInt(customTipAmount), inputForm);

  //initialize the tip number value
  const tipNumber = [5, 10, 15, 20, 25];

  //initialize tip overall result
  let tipOverallAmount = "";
  let tipOverallTotalPerson = "";

  //handle custom input tips event value, and clear the custom percent field if user insert value on custom field
  const handleCustomTips = event => {
    //limit the length of custom input percentage values
    const { value, maxLength } = event.target;
    const limitCustomTipsNumber = value.slice(0, maxLength);
    setCustomTipAmount(limitCustomTipsNumber);

    clearPercentTips = handleTipCalculation(0, inputForm);
    setTipSelection(clearPercentTips);
  };

  // handle the input form (billName, numOfPeople)
  const handleChanges = event => {
    setInputForm({ ...inputForm, [event.target.name]: event.target.value });
  };

  //handle custom selection tips event value, and clear the insert value on custom field
  const handleSelection = event => {
    tipPercentSelection = handleTipCalculation(
      event.currentTarget.value,
      inputForm
    );
    setTipSelection(tipPercentSelection);
    setCustomTipAmount(0);
  };

  // summarize the tip overall result
  if (tipSelection.finalTipAmount === 0 && tipCustom.length !== 0) {
    tipOverallAmount = tipCustom.finalTipAmount;
    tipOverallTotalPerson = tipCustom.totalPersonAmount;
  } else {
    if (tipSelection.length !== 0) {
      tipOverallAmount = tipSelection.finalTipAmount;
      tipOverallTotalPerson = tipSelection.totalPersonAmount;
    }
  }

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
                <button
                  key={index}
                  type="button"
                  className={classes.splitterInputTipBlock}
                  value={tip}
                  onClick={handleSelection}
                  style={{ width: "100%" }}
                >
                  {tip}%
                </button>
              ))}
              <input
                type="number"
                id="customTipAmount"
                name="customTipAmount"
                className={classes.spliiterInputTipBlockCustom}
                value={customTipAmount}
                onChange={handleCustomTips}
                placeholder="Custom"
                maxLength="3"
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
              {
                <span className={classes.splitterFormTwoAmount}>
                  {tipOverallAmount.length <= 0 ? "0.00" : tipOverallAmount}
                </span>
              }
            </div>
            <div className={classes.splitterFormTipsTwo}>
              <div className={classes.splitterFormTwoTitleSplit}>
                <label>Total </label>
                <span className={classes.splitterFormTwoSpan}>/ person</span>
              </div>

              {
                <span className={classes.splitterFormTwoAmount}>
                  {tipOverallTotalPerson.length <= 0
                    ? "0.00"
                    : tipOverallTotalPerson}
                </span>
              }
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
