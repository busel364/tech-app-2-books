import { AppDispatch, RootState } from "../app/store"
import { logIn, putToken } from "../reducers/loginReducer"
import { base_url_login, createToken } from "../utils/consts"
import { UserRegister } from "../utils/types"

export const registerUser = (user: UserRegister) => {
    return (dispatch: AppDispatch) => {
        fetch(`${base_url_login}/user`, {
            method: 'Post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.status.toString())
                }
            })
            .then(userProfile => {
                dispatch(logIn(userProfile));
                dispatch(putToken(createToken(user.login, user.password)));
            })
            .catch(e => {
                console.log(e.message);
                //TODO handle error               
            })
    }
}


export const fetchUser = (token: string) => {
    return (dispatch: AppDispatch) => {
        fetch(`${base_url_login}/login`, {
            method: 'Post',
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.status.toString())
                }
            })
            .then(userProfile => {
                dispatch(logIn(userProfile));
                dispatch(putToken(token));
            })
            .catch(e => {
                console.log(e.message);
                //TODO handle error               
            })
    }
}

export const updateUser = (firstName: string, lastName: string) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        fetch(`${base_url_login}/user`, {
            method: 'PUT',
            body: JSON.stringify({ firstName, lastName }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: getState().login.token!
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.status.toString())
                }
            })
            .then(userProfile => {
                dispatch(logIn(userProfile));
            })
            .catch(e => {
                console.log(e.message);
                //TODO handle error               
            })

    }
}

export const changePassword = (oldPassword: string, newPassword: string) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        fetch(`${base_url_login}/user/password`, {
            method: 'PUT',
            headers: {
                'X-Password': newPassword,
                Authorization: createToken(getState().login.user!.login, oldPassword)
            }
        })
            .then(response => {
                if (response.ok) {
                    dispatch(putToken(createToken(getState().login.user!.login, newPassword)))
                } else {
                    throw new Error(response.status.toString())
                }
            })
            .catch(e => {
                console.log(e.message);
                //TODO handle error               
            })

    }
}