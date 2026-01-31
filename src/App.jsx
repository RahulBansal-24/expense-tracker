import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";

function App() {
  const [expense, setExpense] = useLocalStorage("expense", []);
  const [editing, setEditing] = useState(null);

  function submitExpense(newExpense) {
    setExpense([...expense, { ...newExpense, id: crypto.randomUUID() }]);
  }

  function deleteExpense(id) {
    setExpense(expense.filter((e) => e.id !== id));
  }

  function updateExpense(id, updatedExpense) {
    setExpense(expense.map((e) => (e.id === id ? { ...updatedExpense, id } : e)));
    setEditing(null);
  }

  function startEdit(exp) {
    setEditing(exp);
  }

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <Dashboard expense={expense} />
      <ExpenseForm
        submitExpense={editing ? updateExpense : submitExpense}
        isEditing={editing}
      />
      <ExpenseList
        expenses={expense}
        deleteExpense={deleteExpense}
        updateExpense={startEdit}
      />
    </div>
  );
}

export default App;