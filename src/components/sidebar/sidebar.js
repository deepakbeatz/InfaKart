import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
export default function sidebar() {

    const closeNav=()=> {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div className="sidebar" id="mySidenav">
            <Link to="#" className="closebtn" onClick={closeNav}>&times;</Link>
            <Link to="/dashboard">Home</Link><br/>
            <Link to="/dashboard/category/clothing">Clothing</Link><br/>
            <Link to="/dashboard/category/mobiles&computers">Mobiles & Computers</Link><br/>
            <Link to="/dashboard/category/tv&electronics">TV & Electronics</Link><br/>
            <Link to="/dashboard/category/grocery&household">Grocery & Household</Link><br/>
        </div>
    )
}
