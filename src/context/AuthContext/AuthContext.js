import React,{useState} from 'react'

export const AuthContext=React.createContext({
    isAuth:false,
    login:()=>{},
    logout:()=>{}
})

const AuthContextProvider=(props)=>{
    const[isAuth,setAuth]=useState();

    const login=()=>{
        setAuth(true);
    }

    const logout=()=>{
        setAuth(false);
    }

    return(
    <AuthContext.Provider value={{isAuth:isAuth,login:login,logout:logout}}>
        {props.children}
    </AuthContext.Provider>
    )
}

export default AuthContextProvider
