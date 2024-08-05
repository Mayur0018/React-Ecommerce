import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Adjust the import path as needed
import mrfbatImg from "../assets/mrf-bat.jpg"; // Import local image
import keyboardImg from "../assets/key1.jpg"
const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Nike Air MX Super 2500 - Red',
    price: 449,
    oldPrice: 699,
    rating: 5.0,
  },
  {
    id: 2,
    image: mrfbatImg, // Use local image directly
    title: 'MRF Bat - Classic',
    price: 299,
    oldPrice: 399,
    rating: 4.5,
  },
  {
    id: 3,
    image: keyboardImg,
    title: ' ZEB mouse and keyboard',
    price: 449,
    oldPrice: 699,
    rating: 5.0,
  },
  // Add more product objects as needed
];

export default function FlashSales() {
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
    <div className="flex flex-col items-center mt-8">
      <header className="w-full flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-center max-w-4xl w-full text-gray-800">
          Flash Sales
        </h1>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, showAll ? products.length : 3).map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <a className="relative flex h-60 overflow-hidden rounded-xl" href="#">
              <img
                className="object-cover w-full h-full"
                src={product.image}
                alt={product.title}
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                {product.rating}
              </span>
            </a>
            <div className="mt-4 px-4 pb-4">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {product.title}
                </h5>
              </a>
              <div className="mt-2 mb-4 flex items-center justify-between">
                <p>
                  <span className="text-2xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-slate-900 line-through">
                    ${product.oldPrice}
                  </span>
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center justify-center rounded-md bg-red-500 px-4 py-2 text-center text-sm text-white hover:bg-red-700"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {products.length > 3 && (
        <button
          onClick={handleToggle}
          className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}
