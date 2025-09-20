const TrendingMenuCard = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:w-full md:w-1/2 lg:w-1/4 ">
      <img className="w-full h-32 object-cover" src={imageSrc} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default TrendingMenuCard;
