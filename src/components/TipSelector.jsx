const presetTips = [5, 10, 15, 20];

export default function TipSelector({
  tip,
  setTip,
  customTip,
  setCustomTip,
}) {
  const handlePresetClick = (value) => {
    setTip(value);
    setCustomTip("");
  };

  const handleCustomChange = (e) => {
    const value = e.target.value;

    setCustomTip(value);
    setTip(Number(value));
  };

  return (
    <div className="input-group">
      <label>Select Tip %</label>

      <div className="tip-buttons">
        {presetTips.map((value) => (
          <button
            key={value}
            className={
              tip === value &&
              customTip === ""
                ? "active"
                : ""
            }
            onClick={() =>
              handlePresetClick(value)
            }
          >
            {value}%
          </button>
        ))}
      </div>

      <input
        type="number"
        placeholder="Custom Tip %"
        value={customTip}
        onChange={handleCustomChange}
      />
    </div>
  );
}