import { TRANSLATION_LIST } from './constans'
const defaultState = {
    name: 'xiaoguoguo',
    translationList:[]
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case TRANSLATION_LIST:
            return {
                ...state,
                translationList:action.list
            }
        default:
            return state;
    }
}
export default reducer;