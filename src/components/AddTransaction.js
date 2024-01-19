import "./AddTransaction.css";
import { useState } from "react";

export default function AddTransaction() {

  const [transaction, setTransaction] = useState({
    "location": "",
    "amount": 0,
    "date": "",
    "category": ""
  });

  function handleChange(key, value) {

    let update = transaction;

    if (key == "location") {
      update.location = value;
    } else if (key === "amount") {
      update.amount = (Math.round(value * 100) / 100).toFixed(2);
    } else if (key === "date") {
      update.date = value;
    } else {
      update.category = value;
    }

    setTransaction(update);
  }

  function handleSubmit() {
    console.log(transaction);
  }

  return (
    <section>
      <div className="add-transaction-container">
        <div className="input-container">
          <label>
            Location:  
            <input className="input-field" onChange={(event) => handleChange("location", event.target.value)} type="text"></input>
          </label>
        </div>
        <div className="input-container">
          <label>
            Amount:  
            <input className="input-field" onChange={(event) => handleChange("amount", event.target.value)} type="number"></input>
          </label>
        </div>
        <div className="input-container">
          <label>
            Date:  
            <input className="input-field" onChange={(event) => handleChange("date", event.target.value)} type="date"></input>
          </label>
        </div>
        <div className="input-container">
          <label>
            Category:  
            <select className="input-field" onChange={(event) => handleChange("category", event.target.value)}>
              <option value="Groceries">Groceries</option>
              <option value="Mortgage">Mortgage</option>
            </select>
          </label>
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </section>
  ) 

}