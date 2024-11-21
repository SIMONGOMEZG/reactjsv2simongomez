import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <Link to={`/item/${product.id}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/item/${product.id}`}>{product.name}</Link>
        </h5>
        <p className="card-text">Precio: ${product.price}</p>
        <button className="btn btn-primary">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Item;
