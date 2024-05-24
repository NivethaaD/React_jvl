import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Garage from './Garage';
import Header from './Header';
import FavoriteColor from './components/FavoriteColor';
import Car1 from './components/Car1';
import Scooter from './components/Scooter';
import List from './components/List';
import Timer from './components/Timer'
import Form from './components/Forms';


/*function Car(){

    return(
        <h1>hi iam a car</h1>
    )
}*/ 

/*function Garage(){
  return(
    <div>
      <h2>who is that?</h2>
      <Car/>
    </div>
   

  )
} */



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Garage/> */}
    {/*<Header />*/}
    {/*<App/> */}
    {/*<FavoriteColor/>*/}
    {/*<Car1/> */}
    {/*<Scooter/> */}
    <App/>
    {/* <List/>*/}
    {/*<Timer/> */}
    <Form/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
