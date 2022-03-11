import React from 'react';

import {Route, Routes} from 'react-router-dom'

import Login from '../pages/login'
import Cadastro from '../pages/cadastro';
import Logado from '../pages/logado';

export default function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/logado' element={<Logado/>}/>
        </Routes>
    );
}