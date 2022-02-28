import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from "./Navbar" 

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='pageName'>
      <h1>Home Page</h1>
      </div>
    </>
  )
}

export default Home