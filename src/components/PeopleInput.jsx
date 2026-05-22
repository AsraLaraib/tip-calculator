export default function PeopleInput({
  people,
  setPeople,
  error,
}) {
  return (
    <div className="input-group">
      <label htmlFor="people">
        Number of People
      </label>

      <input
        id="people"
        type="number"
        min="1"
        value={people}
        onChange={(e) =>
          setPeople(e.target.value)
        }
      />

      {error && (
        <p className="error">{error}</p>
      )}
    </div>
  );
}