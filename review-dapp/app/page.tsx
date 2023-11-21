

"use client";
import React, { useEffect } from 'react'
import GetReviews from './components/get-reviews/get-reviews.component'
import { useEthStore } from '@/store/ethStore';
import { ethers } from 'ethers'
import { ABI, address } from '@/utils/contract';
import Navbar from './components/navbar/Navbar';


const getProviderAndSigner = () => {
  //@ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const review = new ethers.Contract(address, ABI, signer)
  return { provider, review }
}

const FeebackPage = () => {

  const { setProvider, setContract, setAccount, account } = useEthStore(state => state)
  useEffect(() => {
    //@ts-ignore
    if (!window.ethereum) return;
    const { provider, review } = getProviderAndSigner()
    setProvider(provider)
    setContract(review)
  }, [setContract, setProvider])

  return (
    <div className=''>
      <Navbar account={account} setAccount={(val: any) => setAccount(val)} />

      <div className='mt-5 p-5'>
        
      <h1 className='text-3xl font-semibold'>View all Feebacks</h1>
      <p className='text-gray-500'>Recent Transactions can take some time to reflect here, please check some time later</p>
        {account ? <GetReviews /> : <p className=' my-5 font-semibold'> ⓘ Please connect to metamask to use application</p>}
      </div>
    </div>
  )
}

export default FeebackPage