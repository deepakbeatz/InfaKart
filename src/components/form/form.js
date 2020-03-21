import React,{useRef} from 'react'
import './form.css'
import {Link,withRouter} from 'react-router-dom'



const form=React.memo(props=>{
    const userRef=useRef(null);
    const passwordRef=useRef(null);
    const submitHandler=(event)=>{
        
        event.preventDefault();
        if(userRef.current.value==="user" && passwordRef.current.value==="user"){
            props.history.replace('/InfaKart/dashboard')
        }
        else{
            alert('Invalid Credentials')
        }
        
    }
    

    return (
        <div id="box">
            <div id="right">
                <h3>LOGIN</h3>
                <form autoComplete="off"  onSubmit={submitHandler}>
                    <input type="textbox" ref={userRef} id="username" name="username" placeholder="username"/><br/><br/>
                    <input type="password" ref={passwordRef} id="password" name="password" placeholder="password"/><br/><br/>
                    <input type="submit" value="login"/><br/><br/>
                    <div id="small">forgot <Link to="/InfaKart/link">username/password?</Link></div>
                </form><br/><br/>
                <div id="bottom">
                    <Link to="/InfaKart/register">create your account <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
})

export default withRouter(form);
