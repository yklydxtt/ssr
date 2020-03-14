import axios from "axios"

// export const getList = list => ({
//     type: 'CHANGE_LIST',
//     list
// })
export const getList = () => {
    return (dispatch) => {
        axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE').then((data) => {
            const list = data.data.data
            dispatch({
                type: 'CHANGE_LIST',
                list
            })
            // console.log(data.data.data)
        })
    }
}