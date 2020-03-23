import React from 'react'
import './kart.css'

export default function kart(props) {
    const resetKart=()=>{
        props.clearKart();
        props.kartClose();
    }
    
    const checkOutHandler=()=>{
        alert('Your order has been Placed! Thanks for shopping with us!');
        props.clearKart();
        props.kartClose();
    }
    
    const getItems=()=>{
        let sum=0;
        props.Kart.forEach(item=>{
            sum+=item.actualcost;
        })
        return [props.Kart.map(item=><li key={item.key}>{item.supplier} {item.itemname} at Rs. {item.actualcost}</li>),sum]
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
            <div id="inline">{getItems()[1]!==0?<button onClick={checkOutHandler}>CheckOut</button>:null} <button onClick={props.kartClose}>GoBack</button> <button onClick={resetKart}>ClearKart</button></div>
        </div>
    </div>
    )
}
