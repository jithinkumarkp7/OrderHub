import { useState } from "react";
import { ORDER_DATA } from "../../store";

const ItemTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getRowColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100";
      case "Delivered":
        return "bg-green-100";
      case "In Transit":
        return "bg-red-100";
      default:
        return "bg-white";
    }
  };

  const styles = {
    th: "border border-gray-300 px-4 py-2 text-left",
    td: "border border-gray-300 px-4 py-2",
  };

  const filteredData = ORDER_DATA.filter((order) =>
    [order.Customer_Name, order.Order_ID, order.Order_Type, order.Order_Status]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200 bg-white"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-white">
              <th className={styles["th"]}>Customer Name</th>
              <th className={styles["th"]}>Order ID</th>
              <th className={styles["th"]}>Order Type</th>
              <th className={styles["th"]}>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.slice(0, 10).map((order) => (
              <tr
                key={order.Order_ID}
                className={`${getRowColor(
                  order.Order_Status
                )} hover:bg-gray-50`}
              >
                <td className={styles["td"]}>{order.Customer_Name}</td>
                <td className={styles["td"]}>{order.Order_ID}</td>
                <td className={styles["td"]}>{order.Order_Type}</td>
                <td className={styles["td"]}>{order.Order_Status}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td className="px-4 py-2 text-center" colSpan="4">
                  No matching orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemTable;
