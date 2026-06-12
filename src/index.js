import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Car from './Car';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Constructor from './Constructor';
import Foo from './Foo.js';
import FixedFoo from './FixedFoo.js';
import Counter from './Counter.js';
import CounterLog from './CounterLog.js';
import BasicFigure from './BasicFigure.js';
import FigureList from './FigureList.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Car />  */}
    {/* <Constructor /> */}
    <App />
    {/* <Foo /> */}
    {/* <FixedFoo /> */}
    {/* <Counter /> */}
    {/* <CounterLog /> */}
    {/* <FigureList /> */}
    {/* <BasicFigure /> */}
  </React.StrictMode>
);


reportWebVitals();
