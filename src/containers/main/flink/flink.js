import React from 'react'
import {Link} from 'react-router-dom'
import Fform from '../../../components/fform/fform'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'

export default function flink() {
    return (
        <div>
            <Header left={[<Link to="/InfaKart/"><i class="fas fa-home"></i> Home</Link>]} center={[]} right={[<Link to="/InfaKart/register"><i class="fas fa-user-plus"></i> Register</Link>]} />
            <Fform />
            <Footer />
        </div>
    )
}
