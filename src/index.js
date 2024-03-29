import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/LoginForm';

// const test = <h1>Hello world</h1>;
ReactDOM.render(
  <BrowserRouter>
            {/* <Routes>
                <Route path="/login" element={ <LoginForm />} />
                <Route path="*" element={ <App />} />
          </Routes> */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();