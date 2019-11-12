import React, { Component } from 'react'
import {connect} from 'react-redux'
import styles from './login.module.css'

class index extends Component {
    state={
        username:"163231000791",
        password:'Lyr1310070068!'
    }
    handleChange(e){
        e.persist()//将合成事件（同步）转成原生事件，原生事件支持异步

        this.setState((state)=>{//异步过程
            return {
                ...state,
                [e.target.name]:e.target.value
            }
        })
    }
    gologin(){
        let {username,password} = this.state
        this.props.getToken(username,password)
    }
    render() {
        let {username, password} = this.state
        let {loading} = this.props
        return (
            <div>
                <h1>login</h1>
                <h2>{this.props.token}</h2>
                <input type="text" name="username" value={username} onChange={this.handleChange.bind(this)}/>
                <input type="password" name="password" value={password} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.gologin.bind(this)}>login</button>
                {loading && <div className={styles["my-loading"]}>
                    loading...
                </div>}
            </div>
        )
    }
}
export default connect((state)=>{
    return {
        token:state.users.token,
        loading:state.loading.global
    }
},(dispatch)=>{
    return {
        getToken(username,password){
            dispatch({
                type:'users/ASYNC_SET_TOKEN',
                payload: {
                    username,
                    password
                }
            })
        }
    }
})(index)
