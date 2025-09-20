import {
  FaClipboardList,
  FaMoneyBillWave,
  FaTrashRestoreAlt,
  FaUser,
} from "react-icons/fa";

const OrderSummary = ({ orders }) => {
  const orderCount = orders.length;
  const customerSet = new Set();

  orders?.forEach((order) => {
    customerSet.add(order.Customer_Name);
  });

  const customerCount = customerSet.size;
  const totalPriceReceived = orders
    .map((order) =>
      order.Items.reduce((subtotal, item) => subtotal + item.Total_Price, 0)
    )
    .reduce((total, subtotal) => total + subtotal, 0);

  const styles = {
    wrapper:
      "bg-white shadow-md rounded-lg p-4 min-w-[200px] text-center w-full md:w-auto",
    icon: "text-4xl text-gray-600 mb-2 mx-auto",
    value: "text-xl font-bold text-gray-800",
    label: "text-gray-600",
  };
  return (
    <div className="flex flex-wrap gap-4 justify-start">
      <div className={styles["wrapper"]}>
        <FaClipboardList className={styles["icon"]} />
        <p className={styles["value"]}>{orderCount}</p>
        <p className={styles["label"]}> Total Orders</p>
      </div>
      <div className={styles["wrapper"]}>
        <FaUser className={styles["icon"]} />
        <p className={styles["value"]}>{customerCount}</p>
        <p className={styles["label"]}> Total Customers</p>
      </div>
      <div className={styles["wrapper"]}>
        <FaMoneyBillWave className={styles["icon"]} />
        <p className={styles["value"]}>${totalPriceReceived.toFixed(2)}</p>
        <p className={styles["label"]}>Total Received </p>
      </div>
      <div className={styles["wrapper"]}>
        <FaTrashRestoreAlt className={styles["icon"]} />
        <p className={styles["value"]}>{10}</p>
        <p className={styles["label"]}>Vacant Tables</p>
      </div>
      <div className={styles["wrapper"]}>
        <FaTrashRestoreAlt className={styles["icon"]} />
        <p className={styles["value"]}>{10}</p>
        <p className={styles["label"]}>Sample data</p>
      </div>
      <div className={styles["wrapper"]}>
        <FaTrashRestoreAlt className={styles["icon"]} />
        <p className={styles["value"]}>{10}</p>
        <p className={styles["label"]}>Sample data</p>
      </div>
    </div>
  );
};
export default OrderSummary;
