import { useState } from "react";
import ItemPriceCard from "./ItemPriceCard";
import { ORDER_DATA } from "../../store";

const ItemPriceList = () => {
  const orders = ORDER_DATA;
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-start">
        {(showAll ? orders.slice(0, 4) : orders.slice(0, 2)).map((order) => (
          <div
            key={order.Order_ID}
            className="flex flex-col gap-4 w-full md:w-auto"
          >
            {order.Items.map((item) => (
              <ItemPriceCard
                key={`${order.Order_ID}-${item.Item_Name}`}
                itemName={item.Item_Name}
                itemPrice={item.Item_Price}
                quantity={item.Quantity}
                totalPrice={item.Total_Price}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-start mt-3">
        <button
          onClick={toggleShowAll}
          className="bg-transparent focus:outline-none focus:border-transparent text-black rounded-lg"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
};

export default ItemPriceList;
