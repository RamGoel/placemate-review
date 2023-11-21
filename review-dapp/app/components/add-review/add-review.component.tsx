import { useEthStore } from '@/store/ethStore';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import reviewSchema from './add-review.schema';

const AddReview = () => {
    const [review, setReview] = useState<any>(null)
    const { contract } = useEthStore(state => state)
    const [hash, setHash] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const handleSubmit = () => {
        if (!review) return;
        setLoading(true)
        const data = {
            ...review,
            year: new Date().getFullYear()
        }
        reviewSchema.validate(data).then(async () => {
            try {
                const transaction = await contract.addReview(
                    data.company, data.rating, data.comment
                )
                console.log("data", transaction)
                setHash(transaction.hash)
                toast.success("Review added successfully")
                setLoading(false)

            } catch {
                (err:any) => {
                    toast.error("Something went wrong")
                    console.log("error", err)
                }
                setLoading(false)
            }
        }).catch((err) => {
            toast.error(err.message)
            return;
        })

    }

    return (
        <div className="p-3  my-5 mx-auto w-lg-3/4 w-1/2" >
            <Toaster />
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }} className="w-full mx-auto">
                <input required={true} onChange={(e) => {
                    setReview({ ...review, company: e.target.value })
                }} className="p-2 block rounded-md my-2 w-full text-black" placeholder="Company Name" />
                <textarea required={true} onChange={(e) => {
                    setReview({ ...review, comment: e.target.value })
                }} className="p-2 block rounded-md my-2 w-full text-black" placeholder="Your Experience" />
                <input max={5} min={0} type='number' required={true} onChange={(e) => {
                    setReview({ ...review, rating: e.target.value })
                }} className="p-2 block rounded-md my-2 w-full text-black" placeholder="Rating out of 5" />


                <button type='submit' title="All fields are required" className={`p-2 bg-yellow-500 rounded-lg w-full`}>
                    {loading ? `Loading....` : `Add Feedback`}
                </button>
                {hash ? <div className='p-3 rounded-lg bg-zinc-900 my-5'>
                    <p>Transaction hash is <span className='font-bold text-violet-500'>{hash}</span></p>
                </div> : null}
            </form>
        </div>
    )
}

export default AddReview