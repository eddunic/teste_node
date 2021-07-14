import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function ListarCompra(props) {
    const compra = props.location.state.compra

    async function handleDelete(id) {
        await api.delete(`compras/${id}`)

        alert('Compra excluída com sucesso');
    }

    return (
        <div className="text-center container">
            <br /><br /><br />
            <h1>Detalhes da compra</h1>
            <br /><br /><br />
            <ul>
                <li>
                    <h3>Total: {compra.total}</h3>
                    <br />
                    <h3>Data: {compra.data_criacao}</h3>
                    <br />
                    <h3>Tipo pagamento: {compra.tipo_pagamento}</h3>
                    <br />
                    <h3>Status: {compra.status}</h3>
                    <br />
                </li>
                <br /><br />
                <Link to={{ pathname: "/editarcompra/" + compra.id, state: { compra: compra } }} className="btn btn-primary">Editar</Link>{' '}
                <button onClick={() => handleDelete(compra.id)} className="btn btn-danger">Deletar</button>{' '}
                <br /><br /><br />
            </ul>
        </div>
    );
}