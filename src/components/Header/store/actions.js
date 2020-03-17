import { CHANGE_LOGIN } from './constans';
const changeLog = (value) => ({
    type: CHANGE_LOGIN,
    value
})

export const getLogin = () => {
    return (dispatch, getState, request) => {
        return request.get('/api/isLogin.json?secret=PP87ANTIPIRATE').then((data) => {
            const value = data.data.data.login
            dispatch(changeLog(value))
        })
    }
}
export const login = () => {
    return (dispatch, getState, request) => {
        return request.get('/api/login.json?secret=PP87ANTIPIRATE').then(() => {
            dispatch(changeLog(true))
        })
    }
}
export const logout = () => {
    return (dispatch, getState, request) => {
        return request.get('/api/logout.json?secret=PP87ANTIPIRATE').then(() => {
            dispatch(changeLog(false))
        })
    }
}