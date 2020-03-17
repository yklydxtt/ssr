import React, { useEffect,Fragment } from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { translationList } from "./store/actions";
const Translation = (props) => {
    useEffect(() => {
        props.translationList()
    }, []);
    const renderList = () => {
        return props.translation.map(item => {
            return <div key={item.id}>{item.title}</div>
        })
    }
    return props.login ? (<Fragment>
        {renderList()}
    </Fragment>):<Redirect to='/' />
}
const mapStateToProps = state => ({
    login: state.login.isLogin,
    translation: state.translation.translationList
})
const mapDispatchToProps = dispatch => ({
    translationList: () => dispatch(translationList(dispatch))
})
export default connect(mapStateToProps, mapDispatchToProps)(Translation);