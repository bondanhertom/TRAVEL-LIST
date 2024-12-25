import { useState } from "react";
export default function Form({ handleAddItem }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(1);
  const options = Array.from({ length: 20 }, (_, index) => index + 1);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newItem = {
        id: Date.now(),
        name: inputValue,
        quantity: selectedValue,
        packed: false,
      };

      handleAddItem(newItem);
      setInputValue("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="add-form">
        <div>
          <div>
            <h3>What do you need for your trip? 😍</h3>
          </div>
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <select onChange={handleSelectChange} name="count" id="countid">
              {options.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Item ..."
              style={{ marginRight: "4px" }}
            />
            <button>Add</button>
          </div>
        </div>
      </form>
    </>
  );
}
