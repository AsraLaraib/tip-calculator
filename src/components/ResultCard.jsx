export default function ResultCard({
  tipAmount,
  grandTotal,
  perPerson,
  resetAll,
}) {
  return (
    <div className="result-card">
      <h2>Results</h2>

      <div className="result-item">
        <span>Tip Amount</span>
        <strong>
          ${tipAmount.toFixed(2)}
        </strong>
      </div>

      <div className="result-item">
        <span>Grand Total</span>
        <strong>
          ${grandTotal.toFixed(2)}
        </strong>
      </div>

      <div className="result-item">
        <span>Per Person</span>
        <strong>
          ${perPerson.toFixed(2)}
        </strong>
      </div>

      <button
        className="reset-btn"
        onClick={resetAll}
      >
        Reset
      </button>
    </div>
  );
}