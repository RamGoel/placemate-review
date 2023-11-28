import React from 'react'
import { ethers } from 'ethers';
import Link from 'next/link';
import { Home2, Icon } from 'iconsax-react';
const Navbar = ({ account, setAccount, isAddButtonHidden }: { account: any, isAddButtonHidden?: boolean, setAccount: Function }) => {
    const connectHandler = async () => {
        //@ts-ignore
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);

    }
    return (
        <div className='bg-gray-900 flex items-center justify-between px-3 py-4'>

            <Link className='flex items-center' href={'/'}>
                <h1 className="text-xl cursor-pointer">
                    <Home2 size={25} />
                </h1>
                <h1 className="text-xl ml-2">Placemate Reviews</h1>
            </Link>
            <div className='w-50 flex justify-end items-center'>
                {!isAddButtonHidden ? <Link href={'/add?company=Veersa Technologies Noida'}><button className={`p-2 bg-transparent border-2 border-yellow-500 rounded-lg mx-2`}>Add a Feeback</button></Link> : null}
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