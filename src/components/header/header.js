import React from 'react'
import './header.css'

export default function header(props) {
    return (
        <div>
            <header>
                <div className="left">
                    {props.left[0]}
                </div>
                <div className="center">
                    {props.center[0]}
                </div>
                <div className="right">
                    {props.right[0]}
                    {props.right[1]}
                    {props.right[2]}
                </div>
            </header>
        </div>
    )
}
