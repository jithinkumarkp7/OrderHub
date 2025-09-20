import React from "react";
import { ORDER_DATA, TRENDING_MENUS } from "../store";
import OrderSummary from "../components/dashboard/OrderSummary";
import TrendingMenuCard from "../components/dashboard/TrendingMenuCard";
import TodayChart from "../components/dashboard/TodayChart";
import ItemPriceList from "../components/dashboard/ItemPriceList";
import ItemTable from "../components/dashboard/ItemTable";
import Footer from "../components/common/Footer";

const Home = () => {
  const orders = ORDER_DATA;
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="tile w-full">
          <h2 className="text-2xl font-bold mb-4">Overall Details</h2>
          <OrderSummary orders={orders} />
        </div>
        <div className="tile w-full">
          <h2 className="text-2xl font-bold mb-4">
            Today's Income, Expenses, and Other
          </h2>
          <TodayChart />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        <div className="tile xl:col-span-2 w-full">
          <h2 className="text-2xl font-bold mb-4">Price Details</h2>
          <ItemPriceList />
        </div>
        <div className="tile xl:col-span-3 w-full">
          <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
          <ItemTable order={orders} />
        </div>
      </div>
      <div className="tile w-full">
        <h2 className="text-2xl font-bold mb-4">Daily Trending Menus</h2>
        <div className="flex flex-wrap gap-4">
          {TRENDING_MENUS?.map((menu) => (
            <TrendingMenuCard
              key={menu?.id}
              title={menu?.title}
              description={menu?.description}
              imageSrc={menu?.imageSrc}
              className="flex-1 min-w-[250px] max-w-[300px]"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
