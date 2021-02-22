import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid';
import reportWebVitals from './reportWebVitals';


const puzzle="4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <Grid puzzle={puzzle}/>

    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
