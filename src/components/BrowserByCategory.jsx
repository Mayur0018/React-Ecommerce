import { FaPhone, FaLaptop, FaApple, FaHeadphonesAlt, FaGamepad } from 'react-icons/fa';

const categories = [
  { name: 'Phone', icon: <FaPhone className="text-6xl text-blue-500" /> },
  { name: 'Computer', icon: <FaLaptop className="text-6xl text-green-500" /> },
  { name: 'Smartwatch', icon: <FaApple className="text-6xl text-purple-500" /> },
  { name: 'Headphones', icon: <FaHeadphonesAlt className="text-6xl text-red-500" /> },
  { name: 'Gaming', icon: <FaGamepad className="text-6xl text-yellow-500" /> },
];

const BrowserByCategory = () => {
  return (
    <div className="p-6 mt-16" >
      {/* Heading Section */}
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Browse by Category
      </h2>
      
      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative flex flex-col items-center p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="mb-4">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity hover:opacity-30 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowserByCategory;
