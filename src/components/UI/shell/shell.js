import React from 'react'
import './shell.css'

export default function box(props) {
    return (
        <div id="itembox">
            <h2>{props.category}</h2>
            <hr/><br/>
            <div id="flexbox">
                {props.children}
            </div>
        </div>
        
    )
}
