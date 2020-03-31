import React,{useRef,useContext} from 'react'
import './loginform.css'
import {Link,withRouter} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext/AuthContext'


const LoginForm=(props)=>{
    const auth=useContext(AuthContext)
    const userRef=useRef(null);
    const passwordRef=useRef(null);

    const hideForm=(event)=>{
        const id=event.target.id
        if(id==="closeButton"){
            document.getElementById("backdrop2").style.display="none";
        } 
    }

    const submitHandler=(event)=>{
        
        event.preventDefault();
        if(passwordRef.current.value==="admin"){
            auth.login();
            document.getElementById("backdrop2").style.display="none";
            props.renderN("success","Login successful!")
        }
        else{
            props.renderN("error","Invalid username or password!")
        }
        
    }
    

    return (
        <div id="backdrop2" onClick={hideForm}>
            <div id="closeButton">&times;</div>
                <div id="right">
                    <h3>LOGIN</h3>
                    <form autoComplete="off"  onSubmit={submitHandler}>
                        <input type="textbox" ref={userRef} id="username1" name="username" placeholder="username"/><br/><br/>
                        <input type="password" ref={passwordRef} id="password1" name="password" placeholder="password"/><br/><br/>
                        <input type="submit" value="login"/><br/><br/>
                        <div id="small">forgot <Link to="#">username/password?</Link></div>
                    </form><br/><br/>
                    <div id="bottom">
                        <Link to="#" onClick={props.showReg}>create your account <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
        </div>
        
    )
}

export default withRouter(LoginForm);
