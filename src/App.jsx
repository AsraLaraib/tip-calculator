import "./App.css";

import { useMemo, useState } from "react";

import BillInput from "./components/BillInput";
import TipSelector from "./components/TipSelector";
import PeopleInput from "./components/PeopleInput";
import ResultCard from "./components/ResultCard";

import {
  calculateTip,
  calculateGrandTotal,
  calculatePerPerson,
} from "./utils/calculations";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(10);
  const [customTip, setCustomTip] =
    useState("");
  const [people, setPeople] =
    useState(1);

  const errors = {};

  if (bill < 0) {
    errors.bill =
      "Bill cannot be negative";
  }

  if (people < 1) {
    errors.people =
      "People must be at least 1";
  }

  const calculations = useMemo(() => {
    const billValue =
      parseFloat(bill) || 0;

    const peopleValue =
      parseInt(people) || 1;

    const tipAmount = calculateTip(
      billValue,
      tip
    );

    const grandTotal =
      calculateGrandTotal(
        billValue,
        tipAmount
      );

    const perPerson =
      calculatePerPerson(
        grandTotal,
        peopleValue
      );

    return {
      tipAmount,
      grandTotal,
      perPerson,
    };
  }, [bill, tip, people]);

  const resetAll = () => {
    setBill("");
    setTip(10);
    setCustomTip("");
    setPeople(1);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="left">
          <h1>Tip Calculator</h1>

          <BillInput
            bill={bill}
            setBill={setBill}
            error={errors.bill}
          />

          <TipSelector
            tip={tip}
            setTip={setTip}
            customTip={customTip}
            setCustomTip={setCustomTip}
          />

          <PeopleInput
            people={people}
            setPeople={setPeople}
            error={errors.people}
          />
        </div>

        <div className="right">
          <ResultCard
            tipAmount={
              calculations.tipAmount
            }
            grandTotal={
              calculations.grandTotal
            }
            perPerson={
              calculations.perPerson
            }
            resetAll={resetAll}
          />
        </div>
      </div>
    </div>
  );
}

export default App;