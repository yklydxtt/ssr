import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header'
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
            <Header />
            <div>hello,{props.name}</div>
            {renderList()}
            <button onClick={() => { alert('hello') }}>点我试试</button>
        </div>
    )
}
const mapStateToProps = state => {
    return ({
        name: state.homeReducer.name,
        newsList: state.homeReducer.newsList
    })
}
const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(getList(dispatch))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);