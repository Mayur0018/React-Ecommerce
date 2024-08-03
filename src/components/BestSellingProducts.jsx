import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Adjust the import path as needed

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Nike Air MX Super 2500 - Red',
    price: '$449',
    oldPrice: '$699',
    rating: 5.0,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Nike Air MX Super 2500 - Red',
    price: '$449',
    oldPrice: '$699',
    rating: 5.0,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Nike Air MX Super 2500 - Red',
    price: '$449',
    oldPrice: '$699',
    rating: 5.0,
  },
  // Add more product objects as needed
];

export default function BestSellingProducts() {
  const [showAll, setShowAll] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.title} added to cart`);
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <header className="w-full flex justify-center items-center mb-6">
        <h1 className="text-3xl font-bold text-center max-w-4xl w-full text-gray-800">
          Best Selling Products
        </h1>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.slice(0, showAll ? products.length : 3).map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
          >
            <a className="relative flex h-60 overflow-hidden rounded-xl" href="#">
              <img
                className="object-cover w-full h-full"
                src={product.image}
                alt={product.title}
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                {product.rating}
              </span>
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="text-xl font-semibold text-gray-800">
                  {product.title}
                </h5>
              </a>
              <div className="mt-2 flex items-center justify-between">
                <p>
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-600 line-through ml-2">
                    {product.oldPrice}
                  </span>
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full rounded-md bg-red-500 px-4 py-2 text-center text-sm text-white hover:bg-red-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {products.length > 3 && (
        <button
          onClick={handleToggle}
          className="mt-6 rounded-md bg-red-500 px-6 py-2 text-white hover:bg-red-700"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}
