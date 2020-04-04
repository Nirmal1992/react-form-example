import React, { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [aggrement, setAgreement] = useState(false);
  const [finalName, setFinalName] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let valueArray = name.split(" ");
    if (valueArray.length === 1) {
      setFinalName(valueArray[0]);
    } else {
      const finalValue = valueArray.reduce((acc, item, index) => {
        if (index === valueArray.length - 1) {
          return acc.concat(item);
        }
        return acc.concat(`${item[0].toUpperCase()}. `);
      }, "");
      setFinalName(finalValue);
    }
    setOutput(true);
  };

  const handleClear = e => {
    e.preventDefault();
    setOutput(false);
    setAgreement(false);
    setGender("");
    setName("");
    setAge("");
  };

  return (
    <>
      <form>
        <label htmlFor="name">
          {" "}
          <strong>Name</strong>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label htmlFor="age">
          {" "}
          <strong>Age</strong>
          <input
            type="number"
            name="age"
            id="age"
            onChange={e => setAge(e.target.value)}
            value={age}
          />
        </label>{" "}
        <strong>Gender</strong>
        <br />
        <div>
          <input
            type="radio"
            value="Male"
            id="male"
            checked={gender === "Male"}
            onChange={e => setGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            value="Female"
            id="female"
            checked={gender === "Female"}
            onChange={e => {
              setGender(e.target.value);
            }}
          />
          <label htmlFor="female">Female</label>
        </div>
        <label htmlFor="occupation">
          <strong>Occupation</strong>

          <select onChange={e => setOccupation(e.target.value)}>
            <option value=""> Select Occupation</option>
            <option value="eng">Engineer</option>
            <option value="doc">Doctor</option>
            <option value="law">Lawyer</option>
          </select>
        </label>
        <label htmlFor="agreement">
          <input
            type="checkbox"
            onChange={e => setAgreement(e.target.checked)}
            checked={aggrement}
          />
          I agree to the rules and regulation.
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          {" "}
          SUBMIT{" "}
        </button>
        <button type="clear" onClick={handleClear}>
          {" "}
          CLEAR{" "}
        </button>
      </form>
      {output && (
        <div className="result">
          Name: {finalName}
          <br />
          Age: {age}
          <br />
          Gender: {gender}
          <br />
          Occupation: {occupation}
          <br />
          Aggrement: {aggrement ? "true" : "false"}
        </div>
      )}
    </>
  );
};

export default UserForm;
