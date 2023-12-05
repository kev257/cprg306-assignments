// "use client"
// import { useEffect, useState } from "react";

// export default function MealIdeas() {

// const component = ({ingredient}) => {

//     const [meals, setMeal] = useState([]);

//     const loadMealIdeas = async () => {
//       const mealIdeas = await fetchMealIdeas(ingredient);
//       setMeals(mealIdeas);
//     };
    
    
//     useEffect(() => {
//       loadMealIdeas();
//     }, [ingredient]);
  
// }

// async function fetchMealIdeas(){

//     try {
//         const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}');
//         const data = await response.json();
//         return data.meals;
//       } catch (error) {
//         console.error("error",error);
//       }

// }

// return (
//     <div>
//     <h1> Meal Ideas </h1>
//     <ul>
//     {meals.map((meal) => (
//           <li className="m-5 border-2 w-1/6 border-blue-200 grid gap-4 grid-cols-1" key={meals.idMeal}>
//             {meals.strMeal}
//           </li>
//         ))}
//     </ul>
//     </div>
// );

// };

"use client";
import React, { useEffect, useState } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas();
    setMeals(mealIdeas);
  };

  useEffect(() => {
     if (ingredient) {     // This effect will run when the 'ingredient' prop changes
     loadMealIdeas();
     } else {    
       setMeals([]);
     }
  }, [ingredient]);
console.log({meals});

  return (
    <div>
      <h1 >Meal Ideas</h1>
      {ingredient ?
       (meals.length > 0 ?
         <h2>Here are some meal ideas using {ingredient} </h2>:
         <h2>There are no meal recipes using {ingredient} </h2>):
      <h2>Please select an ingredient </h2> }
      

      
    
      <ul>
        {meals.map((meal) => (
          <li className="m-5 border-2 w-60 border-blue-200 grid gap-4 grid-cols-1" key={meal.idMeal}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
