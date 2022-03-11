import React, { useState, useEffect } from "react";
import './estilo.css'
import axios from "axios";
import api from '../../services/api'

export default function FormCadastro(){

    const [name, setName] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    useEffect(()=>{
        axios.get('http://localhost:3001/api/dadosCadastrados').then(response =>{
            console.log(response)
        })
    },[])

    const handleName = (event)=>{
        setName(event.target.value)
        console.log(event.target.value);
    }

    const handleEmail = (event)=>{
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const handlePassword = (event)=>{
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const onSubmit = async ()=>{
        const dados = {
            name: name,
            email: email,
            password: password, 
        }

        await api.post('/cadastro', dados)

    }

    return (
        <form className="container-cadastro-form">
            <input
            className="input-cadastro-name"
            type="text"
            placeholder="Name"
            onChange={handleName}/><br/>
            <input
            className="input-cadastro-email"
            type="email"
            placeholder="Email"
            onChange={handleEmail}/><br/>
            <input
            className="input-cadastro-password"
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={handlePassword}/><br/>
            <button
            className="button"
            onClick={onSubmit}>Cadastrar</button>
        </form>
    );
}