import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getList } from "./store/actions";
const Home = (props) => {
    useEffect(() => {
        props.getList()
    }, []);
    const renderList=()=>{
        return props.newsList.map(item=>{
        return <div key={item.id}>{item.title}</div>
        })
    }
    return (
        <div>
            <div>hello,{props.name}</div>
            {renderList()}
            <button onClick={() => { alert('hello') }}>点我试试</button>
        </div>
    )
}
Home.loadData = (store)=>{
    return store.dispatch(getList())
}
const mapStateToProps = state => {
    return ({
        name: state.home.name,
        newsList: state.home.newsList
    })
}
const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(getList(dispatch))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);