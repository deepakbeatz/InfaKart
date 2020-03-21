import React from 'react'
import './rform.css'

export default function rform() {
    return (
            <div id="box2">
                <h3>REGISTER</h3>
                <form autoComplete="off">
                    <input type="email" id="email" name="email" placeholder="email"/><br/><br/>
                    <input type="textbox" id="username" name="username" placeholder="username"/><br/><br/>
                    <input type="textbox" id="password" name="password" placeholder="password"/><br/><br/>
                    <input type="textbox" id="rpassword" name="rpassword" placeholder="retype password"/><br/><br/>
                    <input type="submit" value="register"/><br/><br/>
                </form><br/><br/>
            </div>
    )
}
