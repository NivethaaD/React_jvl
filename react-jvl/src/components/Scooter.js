
import { useState } from "react"
function Scooter(){
  //  const [color,setColor]=useState("red")
  //  const [year,setYear]=useState("2044")

  //state with objects
    const [Scooter,setScooter]=useState(
      {  
        color:"yelow",
        year:"2098"
      }
    )
    
    function updateColor(){
        //to get the previous state
        setScooter(previousState=>{
            return{...previousState,color:"white"}
        })
    }


    return <>
    <h1>My Scooter</h1>
    <p>Colour:{Scooter.color}</p>
    <p>year:{Scooter.year}</p>
    <button onClick={updateColor}>Change</button>
    </>
}
export default Scooter;