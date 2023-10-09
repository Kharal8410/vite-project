// import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Counter from './components/Counter'
import QuoteDisplay from './components/Students';
import Signup from "./components/Signup";
import Login from './components/Login';
import ProductList from './components/Product';
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/product' element={<ProductList />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/quotes' element={<QuoteDisplay />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
      <ToastContainer />
    </>

  )
}

export default App;
