"use client"
import React from 'react';
import ItemList from './item-list';
import newItemFunction from './new-item'; 
import itemsData from "./items.json";
import { useState, userEffect} from 'react';




export default function Page(){
    
const [items, setItems] = useState(itemsData);
 

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  
  const handleCloseNewItem = () => {
    setNewItemOpen(false);
  };


  
  return (
        <main className="p-4">
          <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
          
          {newItemFunction({ onAddItem: handleAddItem})}         
          <ItemList items={items} />          
        
        </main>
      );

}
