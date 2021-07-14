import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import CadastrarProduto from './pages/Produtos/cadastrarProduto';
import ListarProdutos from './pages/Produtos/listarProdutos';
import ListarProduto from './pages/Produtos/listarProduto';
import EditarProduto from './pages/Produtos/editarProduto';
import CadastrarCompra from './pages/Compras/cadastrarCompra';
import ListarCompras from './pages/Compras/listarCompras';
import ListarCompra from './pages/Compras/listarCompra';
import EditarCompra from './pages/Compras/editarCompra'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/cadastrarproduto" component={CadastrarProduto}/>
                <Route path="/listarprodutos" component={ListarProdutos}/>
                <Route path="/listarproduto" component={ListarProduto}/>
                <Route path="/editarproduto" component={EditarProduto}/>
                <Route path="/cadastrarcompra" component={CadastrarCompra}/>
                <Route path="/listarcompras" component={ListarCompras}/>
                <Route path="/listarcompra" component={ListarCompra}/>
                <Route path="/editarcompra" component={EditarCompra}/>
            </Switch>
        </BrowserRouter>
    )
}