
import Model from "./model";
import { useState } from "react";
import "./formStyle.css";

export default function LoanForm() {
  const [errorMassage, setErrorMassage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [LoanInputs, setloanInput] = useState({
    name: "",
    phone: "",
    age: "",
    status: false,
    salaryRange: "",
  });

  function HandelFormSubmit(e) {
    e.preventDefault();
    setErrorMassage(null);

    const age = parseInt(LoanInputs.age);
    const phone = LoanInputs.phone.trim();

    // Validation
    if (isNaN(age) || age < 18 || age > 100) {
      setErrorMassage("The age must be between 18 and 100 years old.");
    } else if (!/^\d{11}$/.test(phone)) {
      setErrorMassage("The phone number must contain exactly 11 digits.");
    }

    setShowModel(true);
  }

  const isDisable =
    LoanInputs.name === "" || LoanInputs.phone === "" || LoanInputs.age === "";
  const btnDisable = isDisable ? "disable" : "";

  function handelDiv() {
    if (showModel) setShowModel(false);
  }

  return (
    <div className="loan-container" onClick={handelDiv}>
      <form className="loan-form">
        <h1>Loan Application Form</h1>

        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={LoanInputs.name}
          onChange={(e) =>
            setloanInput({ ...LoanInputs, name: e.target.value })
          }
        />

        <label>Phone :</label>
        <input
          type="tel"
          placeholder="Enter 11-digit phone number"
          value={LoanInputs.phone}
          onChange={(e) =>
            setloanInput({ ...LoanInputs, phone: e.target.value })
          }
        />

        <label>Age </label>
        <input
          type="number"
          placeholder="Enter your age (must be 18+)"
         
          value={LoanInputs.age}
          onChange={(e) =>
            setloanInput({ ...LoanInputs, age: e.target.value })
          }
        />

        <div className="checkbox-group">
          <label>Are you an employee?</label>
          <input
            type="checkbox"
            checked={LoanInputs.status}
            onChange={(e) =>
              setloanInput({ ...LoanInputs, status: e.target.checked })
            }
          />
        </div>

        <label>Salary:</label>
        <select
          value={LoanInputs.salaryRange}
          onChange={(e) =>
            setloanInput({ ...LoanInputs, salaryRange: e.target.value })
          }
        >
          <option value="">Select salary range</option>
          <option>Less than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>

        <button
          type="submit"
          className={btnDisable}
          disabled={isDisable}
          onClick={HandelFormSubmit}
        >
          Submit
        </button>
      </form>

      <Model errorMassage={errorMassage} isVisable={showModel} />
    </div>
  );
}

