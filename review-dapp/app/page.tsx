"use client";
import Navbar from './components/Navbar'
import { useState } from 'react'
import ReviewList from './components/ReviewList';
import AddProduct from './components/AddProduct';
export default function Home() {
  const [account, setAccount] = useState<any>(null)

  
  return (
    <div className="">
      <Navbar account={account} setAccount={(val:any)=>setAccount(val)} />
      <h1 className="text-3xl text-center my-10">Welcome to Review System</h1>
      <AddProduct />
    </div>
  )
}
