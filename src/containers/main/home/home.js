import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'

export default function home() {
    return (
        <div id="container">
            <section id="b1">
                <div id="wbox">
                    <div id="big">InfaKart</div>
                    <div id="light">An Exclusive Online Shopping Portal</div><br/>
                    <i className="fas fa-shopping-cart"></i> Keep Shopping! Keep Moving! <i className="fas fa-shopping-cart"></i><br/><br/>
                    <hr/><br/>
                    <div id="light1">Shop and win amazing offers for your deals</div><br/>
                    <Link type="button" id="button1" to="/login"> Start Shopping! </Link>
                </div>
            </section>
        </div>
    )
}
