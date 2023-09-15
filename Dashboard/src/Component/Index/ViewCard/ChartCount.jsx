import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ChartUser({ adminInfo }) {

    const [countUser, setCountUser] = useState('')

    const fetchCountUser = async () => {
        try {
            const res = await axios.get(`http://localhost:9000/api/users/count`, {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                },
            })
            setCountUser(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCountUser()
    }, [])

    return (
        <>
            <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                    <div className="card-body">
                        User  <span>Count : {countUser}</span>
                    </div>
                </div>
            </div>
        </>
    )
}



export function ServiceProvider({ adminInfo }) {
    const [countServiceProvider, setCountServiceProvider] = useState('')
    const caculateproduct=(data)=>{
        let sum=0
        for(let i=0;i<data.length;i++){
           sum+=data[i]
        }
        return sum;
            }
    const fetchCountProducts = async () => {
        try {
            const res = await axios.get(`http://localhost:9000/api/products/get/count`, {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                },
            })
            setCountServiceProvider(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCountProducts()
    }, [])


    return (
        <>
            <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                    <div className="card-body">
                        product  <span>Count : {caculateproduct(countServiceProvider)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}



// export function CountPost({ adminInfo }) {
//     const [countPost, setCountPost] = useState('')

//     const fetchCountPost = async () => {
//         try {
//             const res = await axios.get(`http://localhost:9000/api/post/count`, {
//                 headers: {
//                     Authorization: 'Bearer ' + adminInfo.token,
//                 },
//             })
//             setCountPost(res.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     useEffect(() => {
//         fetchCountPost()
//     }, [])

//     return (
//         <>
//             <div className="col-xl-3 col-md-6">
//                 <div className="card bg-primary text-white mb-4">
//                     <div className="card-body">
//                         Post <span>Count : {countPost}</span>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


// export function BookCars({ adminInfo }) {
//     const [countBookCars, setCountBookCars] = useState('')

//     const fetchCountBookCars = async () => {
//         try {
//             const res = await axios.get(`http://localhost:9000/api/book-cars/count`, {
//                 headers: {
//                     Authorization: 'Bearer ' + adminInfo.token,
//                 },
//             })
//             setCountBookCars(res.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     useEffect(() => {
//         fetchCountBookCars()
//     }, [])

//     return (
//         <>
//             <div className="col-xl-3 col-md-6">
//                 <div className="card bg-primary text-white mb-4">
//                     <div className="card-body">
//                         Book Cars <span>Count : {countBookCars}</span>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }