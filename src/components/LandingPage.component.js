import React from 'react';
import Auth from '../Auth/auth';
import { Redirect } from 'react-router-dom';
export const LandingPage = props =>{
    return (
        <div>
           <h1> Landing Page</h1>
           <button
            onClick={() => {
                Auth.login(()=>{
                    props.history.push("/app-layout");
                })
            }}
           >Login</button>
            
        </div>
    );
}