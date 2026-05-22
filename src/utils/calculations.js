export const calculateTip = (bill, tipPercent) => {
  return (bill * tipPercent) / 100;
};

export const calculateGrandTotal = (bill, tipAmount) => {
  return bill + tipAmount;
};

export const calculatePerPerson = (grandTotal, people) => {
  if (people <= 0) return 0;
  return grandTotal / people;
};