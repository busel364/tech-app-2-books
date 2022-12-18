import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { updateUser } from '../../../asyncActions/loginAsyncActions';

const ChangeName = () => {

    const user = useAppSelector(state => state.login.user)
    const dispatch = useAppDispatch();
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);

    return (
        <div className='pt-5 pb-4'>
            <h1 className='mt-5 text-center'>Change Name</h1>
            <div className='mt-3 py-5 shopItemPage bookSeat container text-center'>
                <div className='col-lg-5 col-sm-12 py-5 mb-5 loginMain'>
                    <div className='my-3'>
                        <input
                            placeholder='First Name'
                            type={'text'}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <input
                            placeholder='Login'
                            type={'text'}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className='row loginMainDivLink my-4'>
                        <Link to={'/personal_area'} className='loginMainLink offset-3 col-3'>Back</Link>
                        <Link to={'/personal_area'} className='loginMainLink col-3' onClick={() => {
                            if (firstName && lastName) {
                                dispatch(updateUser(firstName, lastName))
                            }
                        }}>Save</Link>
                    </div>
                    <Link to={'/personal_area/change_password'} className='loginMainLink p-3'>Change Password</Link>
                </div>
            </div>
        </div>
    )
}

export default ChangeName