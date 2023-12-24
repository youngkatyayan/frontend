import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './page/Home.js';
import Menu from './page/Menu.js';
import About from './page/About.js';
import Contact from './page/Contact.js';
import Login from './page/Login.js';
import Newproduct from './page/Newproduct.js';
import SignUp from './page/SignUp.js';

// createBrowserRouter is use for handling and render URL  
const router = createBrowserRouter(
  // createRoutesFromElements to provide Route element 
  createRoutesFromElements(

    <Route path='/' element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='menu' element={<Menu />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='newproduct' element={<Newproduct/>}></Route>
      <Route path='signup' element={<SignUp/>}></Route>
    </Route>

  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
