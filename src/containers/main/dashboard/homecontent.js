import React from 'react'
import Card from '../../../components/UI/card/card'
import Box from '../../../components/UI/box/box'

export default function homecontent(props) {
    return (
        <div className="homeContent">
            <Box category="Trending Now!">
                <Card itemName="LED Light" itemSupplier="Philips" originalCost="200" actualCost="100" value={{"itemname":"LED Light","supplier":"Philips","originalcost":200,"actualcost":100,"key":"h101" }} Kart={props.Kart} setKart={props.setKart} />
                <Card itemName="Trimmer" itemSupplier="Philips"  originalCost="1100" actualCost="700" value={{"itemname":"Trimmer","supplier":"Philips","originalcost":1100,"actualcost":700,"key":"h102" }} Kart={props.Kart} setKart={props.setKart} />
                <Card itemName="SmartWatch" itemSupplier="Muzili"  originalCost="4299" actualCost="3299" value={{"itemname":"SmartWatch","supplier":"Muzili","originalcost":4299,"actualcost":3299,"key":"h103" }} Kart={props.Kart} setKart={props.setKart} />
                <Card itemName="iphoneXR" itemSupplier="Apple"  originalCost="79000" actualCost="49000" value={{"itemname":"iphoneXR","supplier":"Apple","originalcost":79000,"actualcost":49000,"key":"h104" }} Kart={props.Kart} setKart={props.setKart} />  
            </Box><br/>
            <Box category="Combo Offers!">
                <Card itemName="Rockers 400 + 405" itemSupplier="Boat" originalCost="5000" actualCost="2000" value={{"itemname":"Rockers 400 + 405","supplier":"Boat","originalcost":5000,"actualcost":2000,"key":"h105" }} Kart={props.Kart} setKart={props.setKart} />
                <Card itemName="Analog S5 +S6" itemSupplier="PZOZ"  originalCost="9000" actualCost="6000" value={{"itemname":"Analog S5 +S6","supplier":"PZOZ","originalcost":9000,"actualcost":6000,"key":"h106"}} Kart={props.Kart} setKart={props.setKart} />  
            </Box><br/><br/>
        </div>
    )
}
