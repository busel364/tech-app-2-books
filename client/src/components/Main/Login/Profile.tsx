import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'

const Profile = () => {

    const user = useAppSelector(state => state.login.user)

    return (
        <div className='pt-5'>
            <h1 className='mt-5 text-center'>Hello {user?.firstName}</h1>
            <div className='mt-3 shopItemPage container'>
                <div className='mt-5 profile pt-3 ps-3'>
                    <p>Name: {user?.firstName} {user?.lastName}</p>
                    <p>Login: {user?.login}</p>
                    <Link to={'change_name'} className={'shopItemPageLink'}>Change info</Link>
                    <p className='text-start ps-3 pt-3'>Purchases list:</p>
                    {/* last purchases? <>: */}
                    <p className=' text-center'>Your purchases list is empty</p>
                </div>
            </div>
        </div>
    )
}

export default Profile