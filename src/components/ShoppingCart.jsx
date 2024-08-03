import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCart = ({ onClick }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="relative">
      <button onClick={onClick} className="relative">
        <FaShoppingCart className="w-6 h-6" />
        {cart.items.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {cart.items.length}
          </span>
        )}
      </button>
    </div>
  );
};

ShoppingCart.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShoppingCart;
