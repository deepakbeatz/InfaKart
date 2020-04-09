import React,{useState} from 'react'
import './itemdescription.css'
import image from '../../files/placeholder.jpg'

const ItemDescription=(props)=> {
    const [quantity,setQuantity]=useState(1);
    return (
        <div id="dbox">
            <div id="dleft">
                <img src={image} width="60%" height="280px" alt="img"/>
            </div>
            <div id="dright">
                <h1>{props.itemName}</h1><br/>
                by <b>{props.itemSupplier}</b><br/>
                Price:<span style={{"textDecoration":"line-through"}}> {props.originalCost}</span> {props.actualCost}<br/>
                <span style={{fontSize:"small"}}><b>save Rs.{props.originalCost-props.actualCost}</b></span><br/>
                <div id="desc">
                <b>Description:</b><br/>
                Lorem ipsum dolor sit amet, eum facilis hendrerit necessitatibus an, an detracto offendit adipisci est, quo an cibo soleat. 
                Qui an vero salutandi eloquentiam, vim case diceret iracundia no, vix hinc minimum et. 
                Ex aeque graece dicunt sed, ex sit amet prima. Ea eum porro euismod inimicus, ius cu wisi soluta numquam, mei etiam inciderint ad.
                </div><br/>
                <div id="qbox">Quantity:<b>{quantity}</b><div id="plus" onClick={()=>{setQuantity(quantity+1)}}>+</div><div id="minus" onClick={()=>{if(quantity>1){setQuantity(quantity-1)}}}>-</div></div><br/>
                <button id="bbt3" onClick={()=>{props.submitHandler(quantity,props.item.key)}}>Add to Kart</button>
            </div>
        </div>
        
    )
}

export default ItemDescription;