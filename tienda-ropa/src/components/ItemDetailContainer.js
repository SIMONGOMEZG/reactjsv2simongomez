import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/productsData';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = products.find(p => p.id === parseInt(itemId));
      setProduct(result || null);
    };

    fetchProduct();
  }, [itemId]);

  if (!product) {
    return <p className="text-center mt-4">Producto no encontrado.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <button className="btn btn-primary">Agregar al Carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
