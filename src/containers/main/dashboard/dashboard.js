import React,{useState,useEffect,useCallback,useReducer,useContext} from 'react'
import {Link} from 'react-router-dom'
import Card from '../../../components/UI/card/card'
import Box from '../../../components/UI/box/box'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import Sidebar from '../../../components/sidebar/sidebar'
import Kart from '../../../components/kart/kart'
import Homecontent from './homecontent'
import logo from '../../../files/gifs/loading.gif'
import Home from '../../main/home/home'
import LoginForm from '../../../components/loginform/loginform'
import RegistrationForm from '../../../components/registrationform/registrationform'
import {AuthContext} from '../../../context/AuthContext/AuthContext'
import Notification from '../../../components/notification/notification'
import './dashboard.css'
import axios from 'axios'


const httpreducer=(currentHttp,action)=>{
    switch(action.type){
        case 'REQUEST':
            return {error:false,loading:true}
        
        case 'RESPONSE':
            return {...currentHttp,loading:false}

        case 'ERROR':
            return {loading:false,error:action.errorData}

        default:
            throw new Error("Shouldn't have reached here!")
    }
}

const Dashboard=(props)=>{
    const Auth=useContext(AuthContext)
    const {location}=props

    const [http,httpDispatch]=useReducer(httpreducer,{})

    const [content,setContent]=useState([])
    const [KartContent,setKartContent]=useState([])

    const [notif,setNotif]=useState([])
    const signOutHandler=()=>{
        Auth.logout();
        renderN("success","Logged out successfully!")
        clearKart();
    }

    const setHeader=()=>{

        if(Auth.isAuth){
            return [<Link to="#" onClick={kartOpen}><i className="fas fa-shopping-cart"></i> My Cart </Link>," | ",<Link onClick={signOutHandler} to="/InfaKart/dashboard"> <i className="fas fa-sign-out-alt"></i> SignOut</Link>]
        }
        else{
            return [<Link to="#" onClick={showLogin}><i className="fas fa-sign-in-alt"></i> Sign In</Link>," | ",<Link to="#"><i className="fas fa-user-plus"></i> Register</Link>]
        }
    }

    const loadHandler=(status)=>{
        if(status){
            return <div id="backdrop1"><div id="loader"><img id="loadimg" src={logo} alt="loading...." width="90px" /></div></div>;
        }
        else{
            return null;
        }
    }

    const openNav=()=> {
        document.getElementById("mySidenav").style.width = "270px";
    }
    
    const clearKart=()=>{
        setKartContent([]);
    }

    const kartOpen=()=>{
        document.getElementById("backdrop").style.display="block";
        document.getElementById("kart").style.display="block";
    }

    const kartClose=()=>{
        document.getElementById("backdrop").style.display="none";
        document.getElementById("kart").style.display="none";
    }

    const nHandler=()=>{
        document.getElementById("nbox").style.display="none";
    }
    
    const renderN=useCallback((type,message)=>{
        setTimeout(()=>{document.getElementById("nbox").style.display="none";}, 1800);
        setNotif([type,message]); 
        document.getElementById("nbox").style.display="block";
    },[])

    const showReg=()=>{
        document.getElementById('backdrop2').style.display="none";
        document.getElementById('rbackdrop2').style.display="block";
    }

    const showLogin=()=>{
        document.getElementById('backdrop2').style.display="block";
    }


    

    const getContent=useCallback(()=>{
        let category=location.pathname.split('/').pop()
        

        httpDispatch({type:'REQUEST'});


        if(category==="dashboard" || category==="" || category==="InfaKart"){
            category="Best Offers!"
        }

        axios.get(`https://infakar-209b6.firebaseio.com/items/${category}.json`)
        .catch(err=>{
            httpDispatch({type:'ERROR',errorData:err})
            renderN("error","Error 404! check your network settings!")
        })
        .then(res=>Object.values(res['data']))
        .then(res=>{
            const final=[]
                
            return(
            <Box category={category}>
            {
            res.forEach(item=>
                {
                final.push(<Card itemName={item.itemname} itemSupplier={item.supplier} originalCost={item.originalcost} actualCost={item.actualcost} key={item.key+Math.random().toString()} value={item} setKartContent={setKartContent} KartContent={KartContent} setContent={setContent} renderN={renderN}/>)
                }
            ) 
            }
            {final}
            </Box>
            
            )
            }).then(res=>{
            httpDispatch({type:'RESPONSE'})
            

            if(category==="Best Offers!" || category==="" || category==="InfaKart"){
            setContent([<br/>,<Home />,<br/>,res,<br/>,<Homecontent KartContent={KartContent} setKartContent={setKartContent} setContent={setContent} renderN={renderN}/>,<Footer />])
            }

            else{
                setContent([<br/>,res])
            } 

            })
            .catch(err=>{
                httpDispatch({type:'ERROR',errorData:err})
            })
        }   
    ,[location.pathname,KartContent,httpDispatch,renderN])


    useEffect(()=>{
        getContent()
    }, [getContent])


    return (
        <div id="viewport">
            {loadHandler(http.loading)}
            <Notification type={notif[0]} message={notif[1]} nHandler={nHandler}/>
            <LoginForm showReg={showReg} renderN={renderN}/>
            <RegistrationForm/>
            <Kart kartClose={kartClose} clearKart={clearKart} KartContent={KartContent} renderN={renderN}/>
            <Sidebar />
            <Header left={[<div onClick={openNav}><i id="sb1" className="fas fa-bars"></i><b id="l3"> InfaKart</b></div>]} center={[]} right={setHeader()} /><br/><br/><br/>
            <div id="dcontent">
                {content}
            </div>
        </div>
    )
}

export default Dashboard