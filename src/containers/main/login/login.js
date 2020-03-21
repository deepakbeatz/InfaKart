import React from 'react'
import {Link} from 'react-router-dom'
import Form from '../../../components/form/form'
import './login.css'
import Footer from '../../../components/footer/footer'
import Header from '../../../components/header/header'
export default function login() {
    return (
        <div>
            <Header left={[<Link to="/InfaKart/"><i className="fas fa-home"></i> Home</Link>]} center={[]} right={[<Link to="/InfaKart/register"><i className="fas fa-user-plus"></i> Register</Link>]} />
            <Form />
            <Footer />
        </div>
    )
}
