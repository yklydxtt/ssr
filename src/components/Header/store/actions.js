import { CHANGE_LOGIN } from './constans';
import params from '../../../config';
const changeLog = (value) => ({
    type: CHANGE_LOGIN,
    value
})

export const getLogin = () => {
    return (dispatch, getState, request) => {
        return request.get('/api/isLogin.json',{params}).then((data) => {
            const value = data.data.data.login
            dispatch(changeLog(value))
        })
    }
}
export const login = () => {
    return (dispatch, getState, request) => {
        return request.get('/api/login.json',{params}).then(() => {
            dispatch(changeLog(true))
        })
    }
}
export const logout = () => {
    return (dispatch, getState, request) => {
        return request.get('/api/logout.json',{params}).then(() => {
            dispatch(changeLog(false))
        })
    }
}