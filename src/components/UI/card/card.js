import React from 'react'
import './card.css'

const card=React.memo((props)=> {

    const submitHandler=()=>{
        alert("Item added to Kart!")
        console.log(props.value)
        props.setKart([...props.Kart,props.value])
    }

    return (
        <div id="card">
            <div id="cleft">
                    {props.orignalCost===null?"Starting from":"Available at"}<br/>
                    {props.orignalCost!==null?<span style={{"textDecoration":"line-through"}}>{props.originalCost}</span>:null} {props.actualCost}<br/>
                    <button onClick={submitHandler}>Buy Now!</button>
                </div>
                <div id="cright">
                    <h2>
                        {props.itemName}
                    </h2>
                    by {props.itemSupplier}
                </div>
        </div>
    )
})

export default card;