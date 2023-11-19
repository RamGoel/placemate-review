import React, { useState, useEffect } from 'react'
const ethers = require("ethers");
import { ABI } from '../abi/abi.js'
const ReviewList = () => {
    const [reviews, setReviews] = useState<any[]>([]);
    const [provider, setProvider] = useState<any>(null);
    const [contract, setContract] = useState<any>(null);
    const getReviews = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setProvider(provider)
        const network = await provider.getNetwork()
        const signer = provider.getSigner();

        const dappazon = new ethers.Contract('0x5fbdb2315678afecb367f032d93f642f64180aa3', ABI, signer)
        setContract(dappazon)

        const data = await dappazon.addProduct("Ram Goel", 290, 'Image1.jpg')

        console.log(data)
    }


    useEffect(() => {
        getReviews()

    }, [])

    return (
        <div>
            
        </div>
    )
}

export default ReviewList
