import React, {useState} from "react";
import './estilo.css'

import { Link } from "react-router-dom";

import api from '../../services/api';



export default function FormLogin(){

    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');


    const handleEmail = (event)=>{
        setEmail(event.target.value)
        console.log(event.target.value);
    }

    const handlePassword = (event)=>{
        setPassword(event.target.value);
        console.log(event.target.value);
    }

   

    const handleSubmit = async ()=>{
        const data = {
            email: email,
            password: password
        }

        const response = await api.post('/login', data) 

       
        console.log(response);
        
    }

    return <form className="container-form">
        <input
        className="input-email"
        type="text"
        placeholder="Email"
        onChange={handleEmail}/><br/>
        <input 
        className="input-password"
        type="password"
        placeholder="Password"
        autoComplete="off"
        onChange={handlePassword}/><br/>
        <button
        className="button"
        onClick={handleSubmit}>Enter</button>
        <div className="container-link">
            <p>Nao possui uma conta?<Link to="cadastro">click aqui!</Link></p>
        </div>
    </form>
}