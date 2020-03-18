import { CHANGE_LIST } from './constans';
import params from '../../../config'

export const getList = () => {
    return (dispatch,getState,request) => {
        return request.get('/api/news.json',{params}).then((data) => {
            const list = data.data.data
            dispatch({
                type: CHANGE_LIST,
                list
            })
        })
    }
}