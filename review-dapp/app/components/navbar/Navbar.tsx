import React from 'react'
import { ethers } from 'ethers';
import Link from 'next/link';
const Navbar = ({ account, setAccount, isAddButtonHidden }: { account: any, isAddButtonHidden?:boolean, setAccount: Function }) => {
    const connectHandler = async () => {
        console.log("exec")
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }
    return (
        <div className='bg-gray-900 flex items-center justify-between px-3 py-4'>
            
            <h1 className="text-xl ">Placemate Reviews</h1>
            <div className='w-50 flex justify-end items-center'>
                {!isAddButtonHidden ? <Link href={'/add'}><button className={`p-2 bg-transparent border-2 border-yellow-500 rounded-lg mx-2`}>Add a Feeback</button></Link> : null}
                {
                    account
                        ? <h2 >{account}</h2>
                        : <button className="p-2 my-0 bg-yellow-600 rounded-lg animate-pulse" onClick={connectHandler}>Connect to Metamask</button>
                }
            </div>
        </div>
    )
}

export default Navbar