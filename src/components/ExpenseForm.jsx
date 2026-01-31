import { useEffect, useState } from "react";

const initialExpense = {
  desc: "",
  amount: "",
  category: "",
  date: "",
};

function ExpenseForm({ isEditing, submitExpense }) {
  const [expense, setExpense] = useState(initialExpense);

  useEffect(() => {
    if (isEditing) {
      setExpense(isEditing);
    }
  }, [isEditing]);

  function handleExpenseSubmit(e) {
    e.preventDefault();

    if (isEditing) {
      submitExpense(isEditing.id, expense);
    } else {
      submitExpense(expense);
    }

    setExpense(initialExpense);
  }

  return (
    <div className="expense-form">
      <form onSubmit={handleExpenseSubmit}>
        <input
          required
          type="text"
          placeholder="Description"
          value={expense.desc}
          onChange={(e) => setExpense({ ...expense, desc: e.target.value })}
        />

        <input
          required
          type="number"
          placeholder="Amount"
          value={expense.amount}
          onChange={(e) =>
            setExpense({ ...expense, amount: Number(e.target.value) })
          }
        />

        <select
          required
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="Food">Food</option>
          <option value="Bills">Bills</option>
          <option value="Orders">Orders</option>
          <option value="Clothes">Clothes</option>
          <option value="Electronics">Electronics</option>
        </select>

        <input
          required
          type="date"
          value={expense.date}
          onChange={(e) => setExpense({ ...expense, date: e.target.value })}
        />

        <button type="submit">
          {isEditing ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;