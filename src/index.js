import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from './Title';
import Introduction from './Introduction';
import reportWebVitals from './reportWebVitals';
import IncomeChart from './IncomeChart';
import EggPrices from './EggPrices';
import EggPriceChart from './EggPriceChart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title />
    <Introduction />
    <IncomeChart />
    <EggPrices />
    <EggPriceChart />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
