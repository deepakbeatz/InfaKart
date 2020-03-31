import React from 'react'
import './registrationform.css'

export default function rform() {
    
    const hideForm=(event)=>{
        const id=event.target.id
        if(id==="closeButton"){
            document.getElementById("rbackdrop2").style.display="none";
        } 
    }

    return (
        <div id="rbackdrop2" onClick={hideForm}>
            <div id="closeButton">&times;</div>
            <div id="box2">
                <h3>REGISTER</h3>
                <form autoComplete="off">
                    <input type="email" id="email" name="email" placeholder="email"/><br/><br/>
                    <input type="textbox" id="username2" name="username" placeholder="username"/><br/><br/>
                    <input type="textbox" id="password2" name="password" placeholder="password"/><br/><br/>
                    <input type="textbox" id="rpassword" name="rpassword" placeholder="retype password"/><br/><br/>
                    <input type="submit" value="register"/><br/><br/>
                </form><br/><br/>
            </div>
        </div>
    )
}
