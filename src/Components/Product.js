import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction } from '../Action';

const Product = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductAction())
    }, [])

    const productData = useSelector(state => state.Product.product_data)
    console.log("productData", productData)

    return (
        <div className='container'>
            <div className='row'>
                {
                    productData.map((d, n) => {
                        return (
                            <div className='col-sm-4 my-3'>
                                <div className='card w-100 h-100'>
                                    <div className='card-body text-center'>
                                        <h3>{d.category}</h3>
                                        <div>
                                            <img src={d.image} width={120} height={120} />
                                        </div>
                                        <h5 className='text-wrap'>{d.description}</h5>
                                        <h5 className='text-wrap'>{d.title}</h5>
                                        <h5>{d.price}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Product;