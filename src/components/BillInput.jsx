export default function BillInput({
  bill,
  setBill,
  error,
}) {
  return (
    <div className="input-group">
      <label htmlFor="bill">
        Bill Amount
      </label>

      <input
        id="bill"
        type="number"
        placeholder="Enter bill amount"
        value={bill}
        onChange={(e) =>
          setBill(e.target.value)
        }
      />

      {error && (
        <p className="error">{error}</p>
      )}
    </div>
  );
}