import React from 'react'
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../hook/useAuth'

export default function PrivateRouter(props) {

    let {user}= useAuth();

    if(!user){
        return <Redirect to="/" />
    } 
        
    return <Route {...props} />
}
