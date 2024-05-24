import { useState } from "react"

function Form(){


    const [name,setName]=useState("");
    const [age,setAge]=useState("")
    const [country,setCountry]=useState("")

    function handleSubmit(event){
        //event.preventDefault();
        console.log("submitted")
        console.log("current state",name);
        console.log("current Age",age)
        return <h2>Form Submitted</h2>
    }

    return <form onSubmit={handleSubmit}>
        <label>
            Enter your name:<input type="text" onChange={(event)=>{setName(event.target.value)}}></input>
        </label>
        <label>
            Enter your age:<input type="text" onChange={(event)=>{setAge(event.target.value)}}></input>
        </label>
        <label>
            Enter your country:
            <select name="country" onChange={(event)=>{setCountry(event.target.value)}}>
                <option value="australia">Australia</option>
                <option value="India">India</option>
                <option value="Usa">Usa</option>
            </select>
        </label>
        <input type="submit" value="Submit Form"></input>
    </form>



}
export default Form;
