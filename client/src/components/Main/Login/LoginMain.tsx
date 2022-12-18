import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { fetchUser } from '../../../asyncActions/loginAsyncActions';
import { createToken } from '../../../utils/consts';

const LoginMain = () => {

    const dispatch = useAppDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

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
                            placeholder='Password'
                            type={'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='row loginMainDivLink my-4'>
                        <Link to={'/personal_area'} className='loginMainLink offset-3 col-3'
                        onClick={()=>dispatch(fetchUser(createToken(login,password)))}>Login</Link>
                        <Link to={'/register'} className='loginMainLink col-3'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginMain