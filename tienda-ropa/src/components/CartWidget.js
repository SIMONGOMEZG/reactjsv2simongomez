import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget ms-3 d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span className="badge bg-danger rounded-pill ms-2">3</span>
    </div>
  );
};

export default CartWidget;
