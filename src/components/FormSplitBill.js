import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const friendExpense = bill ? bill - myExpense : "";
  const [whoPaid, setWhoPaid] = useState("user");

  const handleSplit = (e) => {
    e.preventDefault();
    if (whoPaid === "user") {
      onSplitBill(friendExpense);
    } else {
      onSplitBill(-myExpense);
    }
  };

  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => setMyExpense(e.target.value)}
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>🤑 Who is paying the bill</label>
      <select value={whoPaid} onChange={(e) => setWhoPaid(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
