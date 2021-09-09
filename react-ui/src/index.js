import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import reportWebVitals from './reportWebVitals';
import GhostLight from './components/GhostLight';

ReactDOM.render(
  <React.StrictMode>
    <GhostLight />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
