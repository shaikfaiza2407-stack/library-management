
import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [book, setBook] = useState("");

  const users = ["Rahul", "Priya"];

  const books = [
    "Java Programming",
    "React Basics"
  ];

  const [withdrawals, setWithdrawals] = useState([]);
  const [history, setHistory] = useState([]);

  function withdraw() {
    if (user === "" || book === "") {
      alert("Please select user and book");
      return;
    }

    const date = new Date().toLocaleDateString();

    setWithdrawals([
      ...withdrawals,
      { user, book, date }
    ]);

    setHistory([
      ...history,
      { user, activity: "Borrowed " + book, date }
    ]);

    alert("Book Withdrawn Successfully!");

    setUser("");
    setBook("");
  }

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <h2>Book Withdrawal</h2>

      <select value={user} onChange={(e) => setUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map((u, index) => (
          <option key={index} value={u}>{u}</option>
        ))}
      </select>

      <select value={book} onChange={(e) => setBook(e.target.value)}>
        <option value="">Select Book</option>
        {books.map((b, index) => (
          <option key={index} value={b}>{b}</option>
        ))}
      </select>

      <button onClick={withdraw}>Withdraw</button>

      <h2>Users List</h2>
      {users.map((u, index) => (
        <p key={index}>{index + 1} - {u}</p>
      ))}

      <h2>Books List</h2>
      {books.map((b, index) => (
        <p key={index}>{index + 1} - {b}</p>
      ))}

      <h2>Withdrawal Details</h2>
      {withdrawals.map((w, index) => (
        <p key={index}>
          {w.user} - {w.book} - {w.date}
        </p>
      ))}

      <h2>Withdrawal History</h2>
      {history.map((h, index) => (
        <p key={index}>
          {h.user} - {h.activity} - {h.date}
        </p>
      ))}
    </div>
  );
}

export default App;
