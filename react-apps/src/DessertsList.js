import React from "react";
// function DessertsList(props) {
//     // Implement the component here.
//     // Filter desserts with less than 500 calories
//     const lowCalorieDesserts = props.data.filter(dessert => dessert.calories < 500);

//     // Step 2: Sort the desserts by calories from low to high.
//     lowCalorieDesserts.sort((a,b) => a.calories - b.calories);

//     return(
//         <div>
//             <ul>
//                 {lowCalorieDesserts.map((dessert, index)=>
//                 <li key={index}>
//                     {dessert.name} - {dessert.calories} cal
//                 </li>
//                 )}
//             </ul>
//         </div>
//     );
//   }
  
//   export default DessertsList;

function DessertsList(props) {

    const lowCalorieDesserts = props.data.filter(dessert => {
        return dessert.calories < 500;
    })
    .sort((a,b) => {
        return a.calories - b.calories;
    })
    .map(dessert => {
        return(
            <li>
                {dessert.name} - {dessert.calories} cal
            </li>
        );
    })

    return <ul>
        {lowCalorieDesserts}
    </ul>
}

export default DessertsList;
  