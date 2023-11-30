"use client";
import react from 'react';
import Item from './items';
//import itemData from "./items.json";
import { useState } from "react";
export default function ItemList({items}) {
   
const [sortBy, setSortBy] = useState('name');

let itemList = items.map((item) => ({...item}));


if (sortBy === 'name'){
    itemList = itemList.sort((a, b) => a.name.localeCompare(b.name));
}
if (sortBy === 'category'){

    itemList = itemList.sort((a, b) => a.category.localeCompare(b.category));
}


return(
    <>
     
     <div>
      <h1 className= "py-8"> Item List </h1 >
      
      <ul>
        {itemList.map((item) => (<li className = "m-5 border-2 w-1/6 border-blue-200 grid gap-4 grid-cols-1" key={item.id}>{item.name} </li>))}
      </ul>
    </div>
     

    <div className="text-center space-x-7 ">
      <button 
        onClick={() => setSortBy('name')}
        style={{backgroundColor: sortBy === 'name' ? 'green' : 'transparent',}}>
        Sort by Name
      </button>

      <button
        onClick={() => setSortBy('category')}
        style={{backgroundColor: sortBy === 'category' ? 'green' : 'transparent',}}>
        Sort by Category
      </button>
    </div>
    

      
      
      
      
      
      
      
      
      
      </>
);

}