import React from "react";
import logo from "../../assets/dadosImagem.png"
import BuscarDado from "../../components/buscarDado"

import './estilo.css'

export default function Logado () {
    return <section className="container">
        <div className="container-data">
            <div className="container-logo">
                <h1>SearchData</h1>
                <img src={logo} alt="logo"/>
            </div>
            <BuscarDado/>
        </div>
        
    </section>

}