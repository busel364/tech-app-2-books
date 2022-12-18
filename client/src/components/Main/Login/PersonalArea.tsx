import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import LoginMain from './LoginMain';
import Profile from './Profile';

const PersonalArea = () => {

    const token = useAppSelector(state => state.login.token);

    return (
        <div>
            {token ? <Profile/> : <LoginMain />}
        </div>
    )
}

export default PersonalArea