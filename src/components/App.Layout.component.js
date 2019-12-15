import React from 'react';
import Auth from '../Auth/auth';

export const AppLayout = props => {
  return (
      <div>
         <h1> App Layout </h1>
         <button 
         onClick={
             () =>{
                 Auth.logout(()=>{
                    props.history.push('/landing'); 
                 })
             }
         }
         >Logout</button>
      </div>
  );
}