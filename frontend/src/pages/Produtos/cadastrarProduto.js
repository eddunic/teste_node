import React, { useState } from 'react';

import api from '../../services/api.js'

export default function CadastrarProduto() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [data_criacao, setData_criacao] = useState('');

    async function handleCadastrarProduto(e) {
        e.preventDefault();

        const data = {
            nome,
            descricao,
            preco,
            data_criacao,
        };

        try {
            const response = await api.post('produtos', data);

            alert('Produto cadastrado com sucesso');
        }catch(err) {
            alert('Erro no cadastro');
        }

    }

    return (
        <div class="text-center container">
            <br />
            <h1>Cadastrar Produto</h1>
            <br />
            <form onSubmit={handleCadastrarProduto}>
                <label>Nome</label>
                <input value={nome} onChange={e => setNome(e.target.value)} type="text" class="form-control" id="nome" required />
                <br /><br /><br />
                <label>Descrição</label>
                <input value={descricao} onChange={e => setDescricao(e.target.value)} type="text" class="form-control" id="descricao" required />
                <br /><br /><br />
                <label>Preço</label>
                <input placeholder="32.32" value={preco} onChange={e => setPreco(e.target.value)} type="text" class="form-control" id="preco" required />
                <br /><br /><br />
                <label>Data criação</label>
                <input placeholder="12/12/12" value={data_criacao} onChange={e => setData_criacao(e.target.value)} type="text" class="form-control" id="data_criacao" required />
                <br /><br /><br />
                <button class="btn btn-primary" type="submit">Cadastrar</button>{' '}
            </form>
        </div>
    );
}