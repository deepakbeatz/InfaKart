import React,{useState,useEffect,useCallback} from 'react'
import {Link} from 'react-router-dom'
import Card from '../../../components/UI/card/card'
import Box from '../../../components/UI/box/box'
import Header from '../../../components/header/header'
import Sidebar from '../../../components/sidebar/sidebar'
import KartC from '../../../components/kart/kart'

import './dashboard.css'
import axios from 'axios'

const dashboard=React.memo(props=>{
    const {location}=props


    const [content,setContent]=useState('')
    const [Kart,setKart]=useState([])

    const openNav=()=> {
        document.getElementById("mySidenav").style.width = "270px";
      }
    
    const clearKart=()=>{
        setKart([]);
    }

    const kartOpen=()=>{
        document.getElementById("backdrop").style.display="block";
        document.getElementById("kart").style.display="block";
    }

    const kartClose=()=>{
        document.getElementById("backdrop").style.display="none";
        document.getElementById("kart").style.display="none";
    }
    const getContent=useCallback(()=>{
        let category=location.pathname.split('/').pop()

        if(category==="dashboard"){
            category="Best Offers!"
        }

        axios.get(`https://infakar-209b6.firebaseio.com/items/${category}.json`)
        .then(res=>Object.values(res['data']))
        .then(res=>{
            const final=[]
            return(
            <Box category={category}>
            {
            res.forEach(item=>
                {
                final.push(<Card itemName={item.itemname} itemSupplier={item.supplier} originalCost={item.originalcost} actualCost={item.actualcost} key={item.key} value={item} setKart={setKart} Kart={Kart} />)
                }
            )
            }
            {final}
            </Box>
            )
            }).then(res=>{ 
            setContent(res)
            })  
        }
        ,[location.pathname,Kart])
    
    useEffect(()=>{
        getContent()
    }, [getContent])

    return (
        <div>
            <KartC kartClose={kartClose} clearKart={clearKart} Kart={Kart}/>
            <Sidebar />
            <Header left={[<Link to="#" onClick={openNav}><i className="fas fa-bars"></i> </Link>]} center={[]} right={[<Link to="#" onClick={kartOpen}><i className="fas fa-shopping-cart"></i> My Cart </Link>," | ",<Link to="/InfaKart/"> <i className="fas fa-sign-out-alt"></i> SignOut</Link>]} /><br/><br/><br/>
            {content}
        </div>
    )
})

export default dashboard