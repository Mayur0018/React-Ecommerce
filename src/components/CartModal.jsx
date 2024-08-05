import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../redux/cartSlice'; // Adjust the import based on your file structure
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PjeB7P92KzHwMGNfOSWoBFU8Z59m6qmBNmtQ4N9w7LbA3ejpx3g2tv5W4EziObSV0DIogEPmExtjMdGkFlgE4nE00JVm25ITB'); // Your Stripe publishable key

const CartModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [selectedCardId, setSelectedCardId] = useState(null);

  const totalPrice = cart.items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 0),
    0
  );

  const selectedCard = cart.items.find((item) => item.id === selectedCardId);

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handlePayment = async () => {
    const stripe = await stripePromise;

    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart.items }),
      });

      if (!response.ok) {
        console.error('Failed to create checkout session:', response.statusText);
        alert('Failed to create checkout session');
        return;
      }

      const session = await response.json();

      if (session.id) {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          alert(result.error.message);
        }
      } else {
        alert('Failed to create a checkout session');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the checkout session');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 animate-fade-in">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
        <ul className="divide-y divide-gray-200">
          {cart.items.length === 0 ? (
            <li className="text-center text-gray-500 py-4">Your cart is empty</li>
          ) : (
            cart.items.map((item) => (
              <li key={item.id} className="py-4 px-2 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-grow">
                  <span
                    onClick={() => setSelectedCardId(item.id)}
                    className={`font-medium text-gray-700 cursor-pointer ${
                      item.id === selectedCardId ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md shadow-sm hover:bg-gray-400 transition"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity || 0}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md shadow-sm hover:bg-gray-400 transition"
                  >
                    +
                  </button>
                </div>
                <span className="ml-4 font-medium text-gray-900">
                  ${(item.price * (item.quantity || 0)).toFixed(2)}
                </span>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-4 px-2 py-1 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 transition"
                >
                  Remove
                </button>
                {item.image && (
                  <div className="flex-shrink-0 ml-4">
                    <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                  </div>
                )}
              </li>
            ))
          )}
        </ul>
        {selectedCard && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-800">Selected Card</h3>
            <p className="mt-1 text-gray-700">
              <strong>Title:</strong> {selectedCard.title}
            </p>
            {selectedCard.image && (
              <div className="flex justify-center mt-2">
                <img src={selectedCard.image} alt={selectedCard.title} className="w-24 h-24 object-cover rounded-md" />
              </div>
            )}
            <p className="mt-1 text-gray-700">
              <strong>Price:</strong> ${selectedCard.price.toFixed(2)}
            </p>
            <p className="mt-1 text-gray-700">
              <strong>Quantity:</strong> {selectedCard.quantity || 0}
            </p>
            <p className="mt-1 text-gray-700">
              <strong>Total Price:</strong> $
              {(selectedCard.price * (selectedCard.quantity || 0)).toFixed(2)}
            </p>
          </div>
        )}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
          <span className="text-lg sm:text-xl font-bold text-gray-800">
            Total: ${totalPrice.toFixed(2)}
          </span>
          <button
            onClick={handlePayment}
            className="mt-4 sm:mt-0 px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition"
          >
            Proceed to Payment
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

CartModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CartModal;
