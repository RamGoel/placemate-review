import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const AddProduct = () => {
    const [product, setProduct] = useState<any>(null)
    
    const handleSubmit = () => {

        if (!product?.name || !product?.price || !product?.image) {
            toast.error("All fields are required")
            return
        }
        
    }
    return (
        <div className="p-3 bg-gray-900 w-1/2 h-40 mx-auto rounded-2xl flex items-center justify-center" style={{ height: "400px" }}>
            <Toaster />
            <div className="w-3/4 mx-auto">
                <input onChange={(e)=>{
                    setProduct({...product, name: e.target.value})
                }} className="p-2 block rounded-md my-2 w-full text-black" placeholder="product name" />
                <input onChange={(e)=>{
                    setProduct({...product, price:e.target.value})
                }} className="p-2 block rounded-md my-2 w-full text-black" placeholder="price" />
                <label className="text-sm">Product Image:</label>
                <input onChange={(e)=>{
                    setProduct({...product, image:e.target.files[0].uri})
                }} className="p-2 block rounded-md my-2 w-full text-white" type="file" />

                <button onClick={handleSubmit}  title="All fields are required" className={`p-2 bg-yellow-500 rounded-lg w-full`}>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct