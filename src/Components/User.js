import React, { useEffect } from 'react'
import { getUserAction } from '../Action';
import { useDispatch, useSelector } from 'react-redux';


const User = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserAction())
    }, [])

    const userData = useSelector(state => state.User.user_data)
    console.log("userData", userData);

    return (
        <div className='container'>
            {
                userData.length > 0 &&
                userData.map((d, n) => {
                    return (
                        <div className='card'>
                            <div className='card-body'>
                                <h3>{d.email}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default User;