const handleTipCalculation = (tipValue, inputForm) => {
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

export default handleTipCalculation;
