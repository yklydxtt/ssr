import { TRANSLATION_LIST } from './constans';
import params from '../../../config'

export const translationList = () => {
    return (dispatch,getState,request) => {
        return request.get('/api/translations.json',{params}).then((data) => {
            const list = data.data.data
            dispatch({
                type: TRANSLATION_LIST,
                list
            })
        })
    }
}