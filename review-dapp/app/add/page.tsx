"use client";
import Navbar from '../components/navbar/Navbar'
import React from 'react'
import AddReview from '../components/add-review/add-review.component';
import { useEthStore } from '@/store/ethStore';
import { useRouter } from 'next/navigation';

export default function Home() {
    const {account, setAccount} = useEthStore(state => state)
    const router=useRouter()

    
    if (!account) {
        router.push('/')
        return <>Sign in to use application</>
    }
    return (
        <div className="">
            <Navbar account={account} setAccount={setAccount} isAddButtonHidden={true} />
            <div className='p-10 text-center'>
                <h1 className='text-3xl font-semibold'>Add a Feebacks</h1>
                <p className='text-gray-500'>Please submit a feeback to make the whole process of placement more effective.</p>
                <AddReview />
            </div>
        </div>
    )
}
