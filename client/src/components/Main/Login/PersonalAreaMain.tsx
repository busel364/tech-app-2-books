import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChangeName from './ChangeName'
import ChangePassword from './ChangePassword'
import PersonalArea from './PersonalArea'

const PersonalAreaMain = () => {
  return (
    <div>
        <Routes>
            <Route
            path='/'
            element={<PersonalArea/>}/>
            <Route
            path='change_name'
            element={<ChangeName/>}/>
            <Route
            path='change_password'
            element={<ChangePassword/>}/>
        </Routes>
    </div>
  )
}

export default PersonalAreaMain