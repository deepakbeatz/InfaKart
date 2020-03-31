import React from 'react'
import {withRouter} from 'react-router-dom'
import './kart.css'

const kart=(props)=>{
    const resetKart=()=>{
        props.clearKart();
        props.kartClose();
    }
    
    const checkOutHandler=()=>{
        props.renderN("success","Your order has been Placed! Thanks for shopping with us!")
        props.history.replace("/InfaKart/dashboard")
        props.clearKart();
        props.kartClose();
    }
    
    const getItems=()=>{
        let sum=0;
        props.KartContent.forEach(item=>{
            sum+=item.actualcost;
        })
        return [props.KartContent.map(item=><li key={item.key+Math.random().toString()}>{item.supplier} {item.itemname} at Rs. {item.actualcost}</li>),sum]
    }
    return (
    <div id="backdrop" onClick={props.kartClose}>
        <div id="kart">
            <i className="fas fa-shopping-cart"></i>My Kart<i className="fas fa-shopping-cart"></i>
            <hr/>
            <div className="listitems">
                {getItems()[0]}
                <b>Total: Rs. {getItems()[1]} </b>
            </div>
            <div id="buttonflex">
                <div id="inline">{getItems()[1]!==0?<button id="bbt2" onClick={checkOutHandler}>CheckOut</button>:null} <button id="bbt2" onClick={props.kartClose}>GoBack</button> <button id="bbt2" onClick={resetKart}>ClearKart</button></div>
            </div>   
        </div>
    </div>
    )
}


export default withRouter(kart);