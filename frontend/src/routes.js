import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Aluno from './pages/Aluno';
import Documentos from './pages/Documentos';
import Arquivos from './pages/Arquivos';
import Notas from './pages/Notas';
import Financeiro from './pages/Financeiro';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Aluno} />
                <Route path="/login" component={Login} />
                <Route path="/documentos" component={Documentos} />
                <Route path="/arquivos" component={Arquivos} />
                <Route path="/notas" component={Notas} />
                <Route path="/financeiro" component={Financeiro} />
            </Switch>
        </BrowserRouter>
    );
}