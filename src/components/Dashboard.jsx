import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

function Dashboard({ expense }) {
  if (expense.length === 0) {
    return <p>No data to display</p>;
  }

  const totalCat = expense.reduce((total, e) => {
    const cat = e.category || "Others";
    total[cat] = (total[cat] || 0) + Number(e.amount);
    return total;
  }, {});

  const pieChartsData = Object.entries(totalCat).map(([name, value]) => ({
    name,
    value,
  }));

  const colors = ["#22c55e", "#3b82f6", "#ef4444", "#eab308", "#f97316", "#a855f7"];

  return (
    <div className="dashboard">
      <div className="dashboard-stats">
        <p>Total Expense Count: {expense.length}</p>
        <p>
          Total Expense Amount: ₹
          {expense.reduce((sum, e) => sum + Number(e.amount), 0)}
        </p>
        <p>
          Highest Expense: ₹
          {Math.max(...expense.map((e) => Number(e.amount)))}
        </p>
      </div>
      <div className="dashboard-chart">
        <PieChart width={300} height={300}>
          <Pie data={pieChartsData} dataKey="value" nameKey="name">
            {pieChartsData.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default Dashboard;