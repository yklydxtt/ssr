import { TRANSLATION_LIST } from './constans';

export const translationList = () => {
    return (dispatch,getState,request) => {
        return request.get('/api/translations.json?secret=PP87ANTIPIRATE').then((data) => {
            const list = data.data.data
            dispatch({
                type: TRANSLATION_LIST,
                list
            })
        })
    }
}