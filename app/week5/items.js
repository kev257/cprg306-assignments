import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="border p-4 m-2 rounded-md shadow-md">
      <div className="font-semibold text-xl">{name}</div>
      <div className="text--700">Quantity: {quantity}</div>
      <div className="text-green-700">Category: {category}</div>
    </li>
  );
}

export default Item;