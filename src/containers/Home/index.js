import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Helmet } from "react-helmet";
import { getList } from "./store/actions";
import style from './style.css';
import withStyle from '../../withStyle';
const Home = (props) => {
    withStyle(props, style)
    useEffect(() => {
        props.getList()
    }, []);
    const renderList = () => {
        return props.newsList.map(item => {
            return <div key={item.id}>{item.title}</div>
        })
    }
    return (
        <div className={style.test}>
            <Helmet>
                <title>小郭郭新闻网--丰富多彩的资讯</title>
                <meta name="description" content="这是一个神奇的网站，在这里你可以看到你想看的的资讯" />
            </Helmet>
            <div>hello,{props.name}</div>
            {renderList()}
            <button onClick={() => { alert('hello') }}>点我试试</button>
        </div>
    )
}
Home.loadData = (store) => {
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