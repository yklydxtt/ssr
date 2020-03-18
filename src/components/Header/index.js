import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {login, logout} from './store/actions'
const Header = (props) => {
    return (
        <div>
            <Link to='/'>首页</Link>
            <br />
            {props.login ? <Fragment><Link to='/Translation'>翻译列表</Link>
                <br />
                <div onClick={props.changeLogout}>退出</div></Fragment> : <div onClick={props.changeLogin}>登录</div>}
        </div>
    )
}
const mapStateToProps = state => {
    return ({
        login: state.login.isLogin,
    })
}
const mapDispatchToProps = dispatch => ({
    changeLogin: () => dispatch(login(dispatch)),
    changeLogout: () => dispatch(logout(dispatch))
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);