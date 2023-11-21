"use client";
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react'
import ReviewList from './components/ReviewList';
import AddProduct from './components/AddProduct';
import { ethers } from 'ethers'
import { useEthStore } from '@/store/ethStore';
import { ABI } from './abi/abi';
import ProductList from './components/ProductList';

const getProviderAndSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const dappazon = new ethers.Contract('0x5fbdb2315678afecb367f032d93f642f64180aa3', ABI, signer)

  return { provider, dappazon }
}
export default function Home() {
  const { setProvider, setContract, setAccount, account } = useEthStore(state => state)

  useEffect(() => {
    const { provider, dappazon } = getProviderAndSigner()
    setProvider(provider)
    setContract(dappazon)
  }, [])

  return (
    <div className="">
      <Navbar account={account} setAccount={(val: any) => setAccount(val)} />
      <h1 className="text-3xl text-center my-10">Welcome to Review System</h1>
      <AddProduct />
      <ProductList />
    </div>
  )
}
