function Car(props){

    const {carInfo}=props;
    const {brand,color}=carInfo;
    const text=`hi iam a ${brand} ${color} car`;
    return(
        <h1>{text}</h1>
        
    )
}

export default Car;