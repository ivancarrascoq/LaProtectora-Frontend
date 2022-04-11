import React, { Component } from 'react';
// import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-dom';
import Suppliers from './components/suppliers';
import SuperReports from './components/superReports';
import Dashboard from './components/dashboard';
import Users from './components/users';
import Navbar from './components/navbar';
import RendicionesC from './components/rendicionesC';
import RendicionesA from './components/rendicionesA';
import NewRendicion from './components/newRendicion';
import LoginForm from './components/LoginForm';

// import React from 'react';
import Head from './components/head';
import Header from './components/header';
import NotFound from './components/notFound';

import './App.css';


class App extends Component {
  state = {  } 
  
  render() { 
    // const navigateTo = useNavigate();
    return (
      <React.Fragment>
      <Head />
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="/login" element={ <LoginForm />} />
              <Route path="/reportes/:id" element={ <RendicionesC />} />
              <Route path="/rendicion/:id" element={ <RendicionesA />} />
              <Route path="/rendicion/new" element={ <NewRendicion />} />
              {/* <Route path="/reportes/:id" >
                <RendicionesC />
              </Route> */}
              <Route path="/proveedores" element={<Suppliers />} />
              <Route path="/super_reportes" element={<SuperReports />} />
              <Route path="/users" element={<Users />} />
              {/* <Route path="/users" render={props => <Users sortBy="newst" {...props} />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route index element={<Dashboard />} />
              {/* <Route path="/not-found" element={<NotFound />} /> */}
              {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
              <Route path="*" element={<NotFound />} />
              {/* <Route path="*" element={<Navigate to="no-found" />} /> */}
            </Routes>
          </main>
        </div>
      </div>

    </React.Fragment>
    );
  }
}
 
export default App;


// function App() {
//   state = {};
//   return (
//     <React.Fragment>

//       <Head />
//       <Header />
//       <div className="container-fluid">
//         <div className="row">
//           <Navbar />
//           <Dashboard />
//         </div>
//       </div>
//     </React.Fragment>
//     // <main className="container">
//     //   <Suppliers />
//     // </main>
//   );
// }

// export default App;


{/* <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.88.1">
    <title>Signin Template · Bootstrap v5.1</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/sign-in/">

    

    <!-- Bootstrap core CSS -->
<link href="static/assets/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="static/login/signin.css" rel="stylesheet">
  </head> 
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      */}