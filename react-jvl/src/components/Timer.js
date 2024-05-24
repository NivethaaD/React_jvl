import { useEffect, useState } from "react"

function Timer(){

    const [count,setCount]=useState(0);

    useEffect(()=>{
       console.log('screen rendered')
       // checkCount();
      /* setTimeout(()=>{
            setCount((previousCount)=>{return previousCount+1})
       },1000)*/
    })

    function checkCount(){
        if(count>3)
        {
            setCount(1);
        }
    }

    function updateCount(){
        setCount((previousCount)=>{ return previousCount+1})
    }

    return <>
        <h1>I have rendered {count} times</h1>
        <button onClick={updateCount}>increase</button>
    </>

}
export default Timer;