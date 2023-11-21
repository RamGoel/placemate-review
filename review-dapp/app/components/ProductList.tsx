import { useEthStore } from '@/store/ethStore'
import { useProductStore } from '@/store/productStore'
import React, {useEffect} from 'react'

const ProductList = () => {
    const { products, setProducts } = useProductStore(state => state)
    const { contract } = useEthStore(state => state)


    const fetchProducts = () => {
        try {
            const data = contract.productDetails
            setProducts(data)
        } catch {
            () => {
                toast.error("Something went wrong")
            }
        }
    }


    useEffect(() => {
        fetchProducts()

    }, [])

    return (
        <div>
            <p className="text-white">{JSON.stringify(products)}</p>
        </div>
    )
}

export default ProductList