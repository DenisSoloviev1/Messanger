import React from 'react';

export default function Form({title}){
    return(
        <section>
            <h1>{title}</h1>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password'/>
        </section>
    );
}