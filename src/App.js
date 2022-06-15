import React from "react"
import { Routes, Route } from "react-router-dom";
import { Product } from './components/Product';
import { User } from './components/User';
import { Layout } from "./Layout";

import './App.css';

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div class="wrapper">
              <section id='steezy'>
                <h2> This is some steezy stuff</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero cupiditate deserunt earum, fuga, ab labore esse animi, nihil est tenetur non delectus perferendis. Maxime accusamus ea rem sint at!</p>
        
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ut aspernatur omnis neque iusto. Veritatis rem ad atque optio perferendis. Dolorum qui consequatur, repellat soluta impedit porro totam molestiae sit.</p>
        
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus iusto, omnis quas, rem minus cupiditate, sunt voluptates minima sint nemo ipsa itaque consequatur dolor, quam necessitatibus vitae. Quod, eaque, quam.</p>
        
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>
        
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>
              </section>
            </div>}/>
        <Route path="app" element={
            <User />
        }/>
        <Route path="sec" element={
            <div class="wrapper">
              <h1>123123</h1>
            </div>
        }/>  
        <Route path="product/:id" element={<Product />}/> 
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  </>
  );
}

export default App;
