import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function ListarProdutos() {
    const [produtos, setProdutos] = useState([]);
    let history = useHistory();

    useEffect(() => {
        api.get('produtos', {}).then(response => {
            setProdutos(response.data);
        });
    }, []);

    return (
        <div className="text-center container">
            <br /><br /><br />
            <h1>Produtos</h1>
            <br /><br /><br />
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <h3>{produto.nome}</h3>
                        <br />
                        <Link to={{ pathname: "/listarproduto/" + produto.id, state: { produto: produto } }} className="btn btn-primary"> Ver produto</Link>
                        <br /><br /><br /><br />
                    </li>
                ))}
            </ul>
        </div>
    );
}