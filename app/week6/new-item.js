"use client";
import { useState } from "react";

export default function newItemFunction({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
      quantity,
      category,
    };
    console.log(newItem);
    //alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    onAddItem(newItem);

    setName("");
    setQuantity(0);
    setCategory("");
  };

  return (
    <div>
      <h2 className="text-3xl" >Create a New Item</h2>
      <form onSubmit={handleSubmit}>
        <label >
          Name:
          <input className = "text-blue-600"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Quantity:
          <input className = "text-blue-600"
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </label>

        <label>
          Category:
          <select className = "text-blue-600"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
