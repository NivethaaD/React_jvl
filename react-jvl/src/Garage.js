import Car from "./Car";

function Garage(){
    const brand='suzuki'
    const isdooropened=false;
    const carInfo={brand:"Ferrari",color:"Blue"};
    const carList=[
        {brand:"bmw ",color:"red"},
        {brand:"tesla",color:"black"},
        
    ];
    const numberList=[
        1,2,3,4,5,6,6,7
    ];

    return(
        <div>
            <h1>hi am Garage</h1>
            {/*<Car brand={brand}/>*/}
            {isdooropened? <h1>yes</h1> : <h1>No</h1>}
            <ul>
              {carList.map((carInfo)=> <li key={carInfo.brand}><Car carInfo={carInfo}/></li>)}
            </ul>
            <ul>
                {numberList.map((num,index)=> <p key={index}>{num}</p>)}
            </ul>
        </div>
        
    )
}

export default Garage;