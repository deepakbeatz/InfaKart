import React from 'react'
import './fform.css'

export default function fform() {
    return (
        <div id="box1">
                <h3>FORGET PASSWORD LINK</h3>
                <form autoComplete="off">
                    <input type="email" id="email" name="email" placeholder="email"/><br/><br/>
                    <input type="submit" value="send password link"/><br/><br/>
                </form><br/><br/>
            </div>
    )
}
