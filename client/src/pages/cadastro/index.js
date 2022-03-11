import React from "react";
import FormCadastro from "../../components/formcadastro";
import logo from '../../assets/dadosImagem.png';

import './estilo.css';

export default function Cadastro(){
    return (<section className="container">
        <div className="container-data">
            <div className="container-logo">
                <h1>SearchData</h1>
            <img src={logo} alt="" />
            </div>    
            <FormCadastro/>
        </div>
    </section>
    );
}