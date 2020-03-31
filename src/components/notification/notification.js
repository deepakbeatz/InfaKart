import React from 'react'
import './notification.css'

function Notification(props){

    const loadBox=()=>{
        if(props.type==="error"){
            return {backgroundColor:"rgb(247, 100, 64)"};
        }
        else{
            return {backgroundColor:"rgb(102, 255, 148)"};
        }
    }

    return (
        <div id="nbox" style={loadBox()}>
            <div id="nbtn" onClick={props.nHandler}>&times;</div>
            {props.message}
        </div>
    )
}

export default Notification
