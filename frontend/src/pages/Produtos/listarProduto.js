import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function ListarProduto(props) {
     const {produto} = props

    //criar delete

    // async function handleEnviaIdPagina(id) {
    //         // await api.delete(`produtos/${id}`)
    // }

    useEffect(() => {
        api.get('produtos', {}).then(response => {
            console.log(produto.nome)
        });
    }, []);

    return (
        <div class="text-center container">
            <br /><br /><br />
            <h1>Detalhes do produto</h1>
            <br /><br /><br />
            <ul>
                <li>
                    <h3>Nome: {props.nome}</h3>
                    <br />
                    <h3>Descrição: {props.descricao}</h3>
                    <br />
                    <h3>Preço: {props.preco}</h3>
                    <br />
                    <h3>Data criação: {props.data_criacao}</h3>
                    <br />
                    <h3>Data atualização: {props.data_atualizacao}</h3>
                    <br />
                </li>
                <br /><br />
                <Link to="/editarproduto">
                    <button class="btn btn-primary">Editar</button>{' '}
                </Link>
                <button class="btn btn-danger">Deletar</button>{' '}
                <br /><br /><br />
            </ul>
        </div >
    );
}