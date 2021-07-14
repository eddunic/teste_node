import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function ListarCompras() {
    const [compras, setCompras] = useState([]);
    let history = useHistory();

    useEffect(() => {
        api.get('compras', {}).then(response => {
            setCompras(response.data);
        });
    }, []);

    return (
        <div className="text-center container">
            <br /><br /><br />
            <h1>Compras</h1>
            <br /><br /><br />
            <ul>
                {compras.map(compra => (
                    <li key={compra.id}>
                        <h3>{compra.total}</h3>
                        <br />
                        <Link to={{ pathname: "/listarcompra/" + compra.id, state: { compra: compra } }} className="btn btn-primary"> Ver compra</Link>
                        <br /><br /><br /><br />
                    </li>
                ))}
            </ul>
        </div>
    );
}