import React from 'react';
import { Link } from 'react-router-dom';

export default function ListarCompra() {
    return (
        <div class="text-center container">
            <br/><br/><br/>
            <h1>Detalhes da compra</h1>
            <br/><br/><br/>
            <ul>
                <li>
                    <h3>Total: a</h3>
                </li>
                <br/><br/><br/>
                <li>
                    <h3>Data: a</h3>
                    <br/>
                </li>
                <br/><br/><br/>
                <li>
                    <h3>Tipo pagamento: a</h3>
                    <br/>
                </li>
                <br/><br/><br/>
                <li>
                    <h3>Status: a</h3>
                    <br/>
                </li>
                <br/><br/><br/>
                <Link to="/editarcompra">
                    <button class="btn btn-primary">Editar</button>{' '}
                </Link>
                <button class="btn btn-danger">Deletar</button>{' '}
                <br/><br/><br/>
            </ul>
        </div>
    );
}