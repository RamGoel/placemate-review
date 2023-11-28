import { useEthStore } from '@/store/ethStore'
import React, { useEffect, useState } from 'react'


const renderStars = (num: number) => {
    let str= ""
    for (let i = 0; i < num; i++) {
        str += "⭐"
    }
    return str
}

const GetReviews = () => {
    const [data, setData] = useState<any[]>([])
    const { contract } = useEthStore(state => state)
    const {account}=useEthStore(state=>state)
    useEffect(() => {

        const getFeedbacks = async () => {
            console.log("contract", contract)
            const items = await contract.getAllReviews()
            console.log("items", items)
            setData(items)
            const [reviewIds, companyNames, ratings, comments, dates] = items;

            const reviewsData = reviewIds.map((id: any, index: number) => ({
                id: id.toNumber(),
                companyName: companyNames[index],
                rating: ratings[index],
                comment: comments[index],
                date: new Date(dates[index] * 1000).toLocaleDateString(),
            }));

            setData(reviewsData);
        }

        if (account) {
            getFeedbacks()
        }
    }, [contract, account])
    return (
        <div>
            <div className="relative overflow-x-auto my-7">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Company
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Comment
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length?data.map((item, index) => {
                                return <tr key={'2'} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index+1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.companyName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {renderStars(item.rating)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.comment}
                                    </td>
                                </tr>
                            }) : <p>No feedbacks present as of now :)</p>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default GetReviews