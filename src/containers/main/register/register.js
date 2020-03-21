import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../../components/footer/footer'
import Header from '../../../components/header/header'
import Rform from '../../../components/rform/rform'

export default function register() {
    return (
        <div>
            <Header left={[<Link to="/InfaKart/"><i class="fas fa-home"></i> Home</Link>]} center={[]} right={[<Link to="/InfaKart/login"><i class="fas fa-sign-in-alt"></i> Login</Link>]} /><br/>
            <Rform />
            <Footer />
        </div>
    )
}
