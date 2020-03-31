import React,{useContext} from 'react'
import {withRouter} from 'react-router-dom'
import './card.css'
import {AuthContext} from '../../../context/AuthContext/AuthContext'
import ItemDescription from '../../itemdescription/itemdescription'

const Card=(props)=> {

    const Auth=useContext(AuthContext)


    const CardHandler=()=>{
        props.setContent([<br/>,<ItemDescription itemName={props.itemName} itemSupplier={props.itemSupplier} originalCost={props.originalCost} actualCost={props.actualCost} submitHandler={submitHandler} item={props.item}/>])
        props.history.push(props.location.pathname+'/item?ItemName='+props.itemName+'&Supplier='+props.itemSupplier+'&ActualCost='+props.actualCost+'&OriginalCost='+props.originalCost)
    }

    const submitHandler=()=>{
        if(Auth.isAuth){
            props.renderN("success","Item added to the kart!")
            props.setKartContent([...props.KartContent,props.value])
            props.history.replace(props.location.pathname)
        }
        else{
            props.renderN("error","Please login first!")
            props.history.replace(props.location.pathname)
            document.getElementById('backdrop2').style.display="block";
        }
    }

    return (
        <div id="card" onClick={CardHandler}>
            <div id="cleft">
                    {props.orignalCost===null?"Starting from":"Available at"}<br/>
                    {props.orignalCost!==null?<span style={{"textDecoration":"line-through"}}>{props.originalCost}</span>:null} {props.actualCost}<br/>
                    <button id="bbt1" onClick={CardHandler}>View Details</button>
                </div>
                <div id="cright">
                    <h3>
                        {props.itemName}
                    </h3>
                    by {props.itemSupplier}
                </div>
        </div>
    )
}

export default withRouter(Card);