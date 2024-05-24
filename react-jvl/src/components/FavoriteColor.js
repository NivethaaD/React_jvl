import { useState } from "react"; 

function FavoriteColor(){
   // const color="red";
   const [color,setColor]=useState('Blue')

    return <>
    
            <h1>My favorite color is {color}</h1>
            <button onClick={()=>{setColor("red")}}>Change color</button>
    </>
}
export default FavoriteColor;