import { CHANGE_LOGIN } from './constans'
const defaultState = {
    isLogin:false
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {
                ...state,
                isLogin:action.value
            }
        default:
            return state;
    }
}
export default reducer;