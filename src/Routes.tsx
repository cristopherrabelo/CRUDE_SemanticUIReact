import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Clientes from './Pages/Clientes';
import Formulario from './Pages/Formulario';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/clientes" exact component={Clientes} />
        <Route path="/formulario" exact component={Formulario} />     
        <Route path="/clientes/formulario/:_id" exact component={Formulario} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
