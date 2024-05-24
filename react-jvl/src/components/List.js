import { useState } from "react"

function List(){


    const [List,setList]=useState([]);
    const [count,setCount]=useState(1);

    function addItem(){
        const itemName='Item'+count;

        setList((previousList)=>{
            return [...previousList,itemName]
            
        })
        setCount((previousList)=>{

            return previousList+1
        })
    }
    return <>
         <h1>List</h1>
         <button onClick={addItem}></button>
        <ul>
            {List.map((el,index)=> <li key={index}>{el}</li>)}
        </ul>
    </>
   
}
export default List;