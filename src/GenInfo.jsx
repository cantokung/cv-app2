// src/GenInfo.jsx
import React, {useState} from 'react';

function GenInfo({firstName, lastName, onChange, onSubmit}){

    return(
        <div className='GenInfo'>
            <h2>General Info</h2>
            <input
                type = "text"
                name = "firstName"
                placeholder = "First Name"
                value = {firstName}
                onChange = {onChange}
            ></input>
            <input
                type = "text"
                name = "lastName"
                placeholder = "Last Name"
                value = {lastName}
                onChange = {onChange}
            ></input>
            <button onClick = {() =>{
                console.log('clicked clicked')
                onSubmit();
            }}>Submit</button>
        </div>

    )
}
export default GenInfo;