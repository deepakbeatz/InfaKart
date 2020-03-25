import React,{useState,useEffect,useCallback,useReducer} from 'react'
import {Link} from 'react-router-dom'
import Card from '../../../components/UI/card/card'
import Box from '../../../components/UI/box/box'
import Header from '../../../components/header/header'
import Sidebar from '../../../components/sidebar/sidebar'
import KartC from '../../../components/kart/kart'
import Homecontent from './homecontent'
import logo from '../../../files/gifs/loading.gif'

import './dashboard.css'
import axios from 'axios'

const httpreducer=(currentHttp,action)=>{
    switch(action.type){
        case 'REQUEST':
            return {loading:true}
        
        case 'RESPONSE':
            return {loading:false}

        default:
            throw new Error("Shouldn't have reached here!")
    }
}

const dashboard=React.memo(props=>{
    const {location}=props

    const [http,httpDispatch]=useReducer(httpreducer,{})


    const [content,setContent]=useState([])
    const [Kart,setKart]=useState([])
    

    const loadHandler=(status)=>{
        if(status){
            return <div id="backdrop1"><div id="loader"><img src={logo} alt="loading...." width="6%" min-width="150px"/></div></div>;
        }
        else{
            return null;
        }
    }
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

        httpDispatch({type:'REQUEST'});

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
            httpDispatch({type:'RESPONSE'})

            if(category==="Best Offers!"){
            setContent([res,<br/>,<Homecontent Kart={Kart} setKart={setKart} />])
            }

            else{
                setContent(res)
            } 

            })
            
        }
        ,[location.pathname,Kart,httpDispatch])
    
    useEffect(()=>{
        getContent()
    }, [getContent])

    return (
        <div>
            {loadHandler(http.loading)}
            <KartC kartClose={kartClose} clearKart={clearKart} Kart={Kart}/>
            <Sidebar />
            <Header left={[<Link to="#" onClick={openNav}><i id="sb1" className="fas fa-bars"></i> </Link>]} center={[]} right={[<Link to="#" onClick={kartOpen}><i className="fas fa-shopping-cart"></i> My Cart </Link>," | ",<Link onClick={clearKart} to="/InfaKart/"> <i className="fas fa-sign-out-alt"></i> SignOut</Link>]} /><br/><br/><br/>
                {content}
        </div>
    )
})

export default dashboard