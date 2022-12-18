import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { changePassword } from '../../../asyncActions/loginAsyncActions';

const ChangePassword = () => {
    const dispatch = useAppDispatch();
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    return (
        <div className='pt-5 pb-4'>
            <h1 className='mt-5 text-center'>Change Password</h1>
            <div className='mt-3 py-5 shopItemPage bookSeat container text-center'>
                <div className='col-lg-5 col-sm-12 py-5 mb-5 loginMain'>
                <div className='my-3'>
                        <input
                            placeholder='Old Password'
                            type={'password'}
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <input
                            placeholder='New Password'
                            type={'password'}
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)} />
                    </div>

                    <div className='row loginMainDivLink my-4'>
                        <Link to={'/personal_area'} className='loginMainLink offset-3 col-3'>Back</Link>
                        <Link to={'/personal_area'} className='loginMainLink col-3' onClick={() => {
                            if (password1 && password1===password2) {
                                dispatch(changePassword(password1,password2))
                            }
                        }}>Save</Link>
                    </div>
                    <Link to={'/personal_area/change_name'} className='loginMainLink p-3'>Change Name</Link>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword