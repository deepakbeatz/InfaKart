import React from 'react'
import {withRouter} from 'react-router-dom'
import './kart.css'

const Kart=(props)=>{

    const plusHandler=(key)=>{
        var temp=[]
        var updatedItem={}
        for(var i=0;i<props.KartContent.length;i++){
            if(props.KartContent[i].key===key){
                updatedItem={...props.KartContent[i],quantity:props.KartContent[i].quantity+1}
                temp.splice(i, 0, updatedItem);
            }
            else{
                temp.push(props.KartContent[i])
            }
        }
        props.setKartContent(temp)
    }

    const minusHandler=(key)=>{
        var temp=[]
        var updatedItem={}
        for(var i=0;i<props.KartContent.length;i++){
            if(props.KartContent[i].key===key){
                if(props.KartContent[i].quantity!==1){
                    updatedItem={...props.KartContent[i],quantity:props.KartContent[i].quantity-1}
                    temp.splice(i, 0, updatedItem);
                }
            }
            else{
                temp.push(props.KartContent[i])
            }
        }
        props.setKartContent(temp)
    }

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
            sum+=item.actualcost*item.quantity;
        })
        return [props.KartContent.map(item=><li id="fitem" key={item.key}>{item.supplier} {item.itemname} (x<b>{item.quantity}</b>) at Rs. {item.actualcost*item.quantity}</li>),sum]
    }

    return (
    <div id="backdrop">
        <div id="closeButton"  onClick={props.kartClose}>&times;</div>
        <div id="kart">
            <i className="fas fa-shopping-cart"></i>My Kart<i className="fas fa-shopping-cart"></i>
            <hr/>
            <div className="listitems">
                {getItems()[0].map(item=><div id="flist">{item}<div id="plus" onClick={()=>{plusHandler(item.key)}}>+</div><div id="minus" onClick={()=>{minusHandler(item.key)}}>-</div></div>)}
                <b id="flist">Total: Rs. {getItems()[1]} </b>
            </div>
            <div id="buttonflex">
                <div id="inline">{getItems()[1]!==0?<button id="bbt2" onClick={checkOutHandler}>CheckOut</button>:null} <button id="bbt2" onClick={props.kartClose}>GoBack</button> <button id="bbt2" onClick={resetKart}>ClearKart</button></div>
            </div>   
        </div>
    </div>
    )
}


export default withRouter(Kart);