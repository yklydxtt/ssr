import { CHANGE_LIST } from './constans';

export const getList = () => {
    return (dispatch,getState,request) => {
        return request.get('/api/news.json?secret=PP87ANTIPIRATE').then((data) => {
            const list = data.data.data
            dispatch({
                type: CHANGE_LIST,
                list
            })
        })
    }
}