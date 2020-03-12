import React from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header'
const Home=(props)=>{
    return(
        <div>
            <Header />
            <div>{props.name}</div>
            <button onClick={()=>{alert('hello')}}>点我试试</button>
        </div>
    )
}
const mapStateToProps = state => ({
    name: state.name
  })
export default connect(mapStateToProps, null)(Home);