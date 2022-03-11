import React from "react";
import logo from '../../assets/dadosImagem.png';
import FormLogin from '../../components/formlogin';
import './estilo.css';


export default function Login (){

    return <section className="container">
    <div className="container-data">
        <div className="container-logo">
            <h1>SearchData</h1>
          <img src={logo} alt="logo" />
        </div>    
        <FormLogin/>
    </div>
    </section>
}