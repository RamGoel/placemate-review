import React from 'react'
import { ethers } from 'ethers';
const Navbar = ({ account, setAccount }: { account: any, setAccount: Function }) => {
    const connectHandler = async () => {
        console.log("exec")
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }
    return (
        <div className='bg-gray-900 flex items-center justify-between p-4'>
            <h1 className="text-xl ">ReviewSytem</h1>
            {
                account
                    ? <h2 >{account}</h2>
                    : <button className="p-2 bg-yellow-600 rounded-lg" onClick={connectHandler}>Connect to Metamask</button>
            }
        </div>
    )
}

export default Navbar