"use client"
import React from 'react';
import ItemList from './item-list';
import newItemFunction from './new-item'; 
import itemsData from "./items.json";
import { useState, useEffect} from 'react';
import MealIdeas from './meal-ideas';



export default function Page(){
    
const [items, setItems] = useState(itemsData);
const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  
  

  const handleItemSelect = (itemName) => {
    let cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    cleanedItemName = cleanedItemName.split(",")[0];
    cleanedItemName = cleanedItemName.trim();
    setSelectedItemName(cleanedItemName);
  };
  
  return (
        <main className="p-4">
          <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
          
          {newItemFunction({ onAddItem: handleAddItem})}         
          {/* <ItemList items={items} />           */}

          <ItemList items={items} onItemSelect={handleItemSelect} />
          <MealIdeas ingredient={selectedItemName} />

        </main>
      );

}
