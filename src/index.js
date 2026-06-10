import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Car from './Car';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Constructor from './Constructor';
import Props from './Props';
import PropConstructor from './PropConstructor';  
import Garage from './ComponentInComponent';
import State from './State.jsx';
import ChangingState from './ChangingState.jsx';
import Foo from './Foo.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Car />  */}
    {/* <Props color="blue" /> */}
    {/* <Constructor /> */}
    {/* <PropConstructor model ="Mustang" /> */}
    {/* <Garage /> */}
    {/* <App /> */}
    {/* <State /> */}
    {/* <ChangingState /> */}
    <Foo />
  </React.StrictMode>
);


reportWebVitals();
