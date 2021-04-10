import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentProcess from './Components/PaymentProcess/PaymentProcess';

function App() {
  return (
    <div>
      <br/><br/><h1 className="text-center">Please Pay For Me</h1>
      <h3 className="text-center">Enter your credit or debit card information</h3><br/><br/>
      <PaymentProcess></PaymentProcess>
    </div>
  );
}

export default App;
