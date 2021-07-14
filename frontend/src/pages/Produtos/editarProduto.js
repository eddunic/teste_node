import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function EditarProduto(props) {
    const produto = props.location.state.produto
    
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [data_atualizacao, setData_atualizacao] = useState('');

    async function handleEditarProduto(e) {
        e.preventDefault();

        const data = {
            nome,
            descricao,
            preco,
            data_atualizacao,
        };

        try {
            const response = await api.put('produtos/' + produto.id, data);

            alert('Produto editado com sucesso');
        } catch (err) {
            alert('Erro na edição');
        }

    }

    return (
        <div className="text-center container">
            <br />
            <h1>Editar Produto</h1>
            <br />
            <form onSubmit={handleEditarProduto}>
                <label>Nome</label>
                <input placeholder={produto.nome} onChange={e => setNome(e.target.value)} type="text" className="form-control" id="nome" required />
                <br /><br /><br />
                <label>Descrição</label>
                <input placeholder={produto.descricao} onChange={e => setDescricao(e.target.value)} type="text" className="form-control" id="descricao" required />
                <br /><br /><br />
                <label>Preço</label>
                <input placeholder={produto.preco} onChange={e => setPreco(e.target.value)} type="text" className="form-control" id="preco" required />
                <br /><br /><br />
                <label>Data atualização</label>
                <input onChange={e => setData_atualizacao(e.target.value)} type="text" className="form-control" id="data_atualizacao" required />
                <br /><br /><br />
                <button className="btn btn-primary" type="submit">Editar</button>{' '}
            </form>
        </div>
    );
}