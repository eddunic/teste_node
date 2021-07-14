import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function ListarProduto(props) {
    const produto = props.location.state.produto

    async function handleDelete(id) {
        await api.delete(`produtos/${id}`)

        alert('Produto excluído com sucesso');
    }

    return (
        <div className="text-center container">
            <br /><br /><br />
            <h1>Detalhes do produto</h1>
            <br /><br /><br />
            <ul>
                <li>
                    <h3>Nome: {produto.nome}</h3>
                    <br />
                    <h3>Descrição: {produto.descricao}</h3>
                    <br />
                    <h3>Preço: {produto.preco}</h3>
                    <br />
                    <h3>Data criação: {produto.data_criacao}</h3>
                    <br />
                    <h3>Data atualização: {produto.data_atualizacao}</h3>
                    <br />
                </li>
                <br /><br />
                <Link to={{ pathname: "/editarproduto/" + produto.id, state: { produto: produto } }} className="btn btn-primary">Editar</Link>{' '}
                <button onClick={() => handleDelete(produto.id)} className="btn btn-danger">Deletar</button>{' '}
                <br /><br /><br />
            </ul>
        </div >
    );
}