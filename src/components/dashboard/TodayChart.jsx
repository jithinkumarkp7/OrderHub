import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ORDER_DATA } from "../../store";
ChartJS.register(ArcElement, Tooltip, Legend);

const TodayChart = () => {
  const { income, expenses, other } = ORDER_DATA.reduce(
    (acc, order) => {
      const totalPrice = order.Items.reduce(
        (sum, item) => sum + item.Total_Price,
        0
      );

      if (order.Order_Status === "Delivered") {
        acc.income += totalPrice;
      } else if (order.Order_Status === "In Transit") {
        acc.expenses += totalPrice;
      } else {
        acc.other += totalPrice;
      }

      return acc;
    },
    { income: 0, expenses: 0, other: 0 }
  );
  const data = {
    labels: ["Income", "Expenses", "Other"],
    datasets: [
      {
        label: "Today Data",
        data: [income, expenses, other],
        backgroundColor: ["#68D391", "#FC8181", "#A0AEC0"],
      },
    ],
  };

  return (
    <div className="container mx-auto p-5 bg-white shadow-md rounded-lg">
      <div className="flex justify-center h-[350px]">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default TodayChart;
