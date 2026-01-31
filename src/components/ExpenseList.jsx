function ExpenseList({ expenses, updateExpense, deleteExpense }) {
  if (expenses.length === 0) {
    return <p>No Expense found!</p>;
  }

  return (
    <div className="expense-list">
      <ul>
        {expenses.map((e) => (
          <li key={e.id}>
            {e.desc} | ₹{e.amount} | {e.category} | {e.date}
            <button onClick={() => updateExpense(e)}>Update</button>
            <button onClick={() => deleteExpense(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;