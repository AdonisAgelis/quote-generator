import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then(res => {
        const { advice } = res.data.slip;
        setAdvice(advice);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <h1 className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button onClick={fetchQuote} className="button">
          <span>Give me an advice!</span>
        </button>
      </div>
    </h1>
  );
};

export default App;
