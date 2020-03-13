import React from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header'
import { getList } from "./store/actions";
const Home = (props) => {
    return (
        <div>
            <Header />
            <div>{props.name}</div>
            <div>{props.newsList}</div>
            <button onClick={() => { alert('hello') }}>点我试试</button>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return({
    name: state.homeReducer.name,
    newsList: state.homeReducer.newsList
})}
const mapDispatchToProps = dispatch => ({
    mapDispatchToProps: () => dispatch(getList([123]))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);