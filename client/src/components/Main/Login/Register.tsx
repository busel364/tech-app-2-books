import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { registerUser } from '../../../asyncActions/loginAsyncActions';

const Register = () => {

    const dispatch = useAppDispatch();
    const [login, setLogin] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const register = () => {
        if (password1 === password2 && login && firstName && lastName && password1) {
            dispatch(registerUser({ login, password: password1, firstName, lastName }))
        }
    }

    return (
        <div className='pt-5 pb-4'>
            <h1 className='mt-5 text-center'>Login</h1>
            <div className='mt-3 py-5 shopItemPage bookSeat container text-center'>
                <div className='col-lg-5 col-sm-12 py-5 mb-5 loginMain'>
                    <div className='my-3'>
                        <input
                            placeholder='Login'
                            type={'text'}
                            value={login}
                            onChange={(e) => setLogin(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <input
                            placeholder='First Name'
                            type={'text'}
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <input
                            placeholder='Last Name'
                            type={'text'}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <input
                            placeholder='Password'
                            type={'password'}
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)} />
                    </div>
                    <div className='my-3'>
                        <input
                            placeholder='Repeat Password'
                            type={'password'}
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)} />
                    </div>
                    <div className='row loginMainDivLink my-4'>
                        <Link to={'/personal_area'} className='loginMainLink offset-3 col-3'>Back</Link>
                        <Link to={'/personal_area'} className='loginMainLink col-3'
                            onClick={register}>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register