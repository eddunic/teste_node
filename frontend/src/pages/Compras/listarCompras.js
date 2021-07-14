import React from 'react';
import { Link } from 'react-router-dom';

export default function ListarCompras() {
    return (
        <div class="text-center container">
            <br/><br/><br/>
            <h1>Compras</h1>
            <br/><br/><br/>
            <ul>
                <li>
                    <h3>Compra1</h3>
                    <br/>
                    <Link to="/listarcompra">
                        <button class="btn btn-primary">Ver</button>{' '}
                    </Link>
                </li>
                <br/><br/><br/>
                <li>
                    <h3>Compra1</h3>
                    <br/>
                    <button class="btn btn-primary">Ver</button>{' '}
                </li>
                <br/><br/><br/>
                <li>
                    <h3>Compra1</h3>
                    <br/>
                    <button class="btn btn-primary">Ver</button>{' '}
                </li>
                <br/><br/><br/>
            </ul>
        </div>
    );
}