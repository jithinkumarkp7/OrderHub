const ItemPriceCard = ({ itemName, itemPrice }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-auto">
      <h3 className="font-bold text-lg mb-2">{itemName}</h3>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
          <p className="text-gray-600">Price: ${itemPrice.toFixed(2)}</p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DWjgECdmxa-Tr_3Xb9Va4Ogp1fb7v44ghA&s"
            alt="Item"
            className="w-16 h-16 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemPriceCard;
