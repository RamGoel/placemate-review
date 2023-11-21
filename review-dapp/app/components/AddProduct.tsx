import { useEthStore } from '@/store/ethStore';
import { useProductStore } from '@/store/productStore';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

type ProductProps = {
    name: string,
    price: number,
    image: string
}
const AddProduct = () => {
    const [product, setProduct] = useState<ProductProps>(null)
    const {contract, provider} = useEthStore(state => state)
    const {setProducts}=useProductStore(state=>state)

    const handleSubmit = async () => {

        if (!product?.name || !product?.price ) {
            toast.error("All fields are required")
            return
        }

        try {
            const signer=await provider.getSigner()
            const transaction = await contract.connect(signer).addProduct(product.name, product.price, `https://m.media-amazon.com/images/I/71enDA8w01L.jpg`)
            await transaction.wait()
            const products = []
            const dt = await contract.getAllProductPids()
            dt.map(async(item:any) => {
                products.push(item.toNumber())
            })
            console.log(products, products.length)
            toast.success("Product added successfully")
        } catch {
            () => {
                toast.error("Something went wrong")
            }
        }

    }
    return (
        <div className="p-3 bg-gray-900 w-1/2 h-40 mx-auto rounded-2xl flex items-center justify-center" style={{ height: "400px" }}>
            <Toaster />
            <div className="w-3/4 mx-auto">
                <input onChange={(e) => {
                    setProduct({ ...product, name: e.target.value })
                }} className="p-2 block rounded-md my-2 w-full text-black" placeholder="product name" />
                <input onChange={(e) => {
                    setProduct({ ...product, price: e.target.value })
                }} className="p-2 block rounded-md my-2 w-full text-black" placeholder="price" />
            

                <button onClick={handleSubmit} title="All fields are required" className={`p-2 bg-yellow-500 rounded-lg w-full`}>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct