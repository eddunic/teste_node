import React, { useState, useEffect } from 'react';
import api from '../../services/api.js'

var total = 0;
var dataProdutoCompra = 0;

export default function CadastrarCompra() {
    const [produtos, setProdutos] = useState([]);
    const [produtoCompra, setProdutoCompra] = useState([]);
    const [produto_id, setProdutoId] = useState([]);

    useEffect(() => {
        api.get('produtos', {}).then(response => {
            setProdutos(response.data);
        });
    }, []);

    useEffect(() => {
        api.get('produtoCompra', {}).then(response => {
            setProdutoCompra(response.data);
        });
    }, []);

    const [tipo_pagamento, setTipo_pagamento] = useState('');
    const [status, setStatus] = useState('');
    const [data_criacao, setData_criacao] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const [oldTotal, setOldTotal] = useState(0);

    async function calculaTotal(produto) {

        total = produto.preco * quantidade + oldTotal;

        setOldTotal(total);

        setProdutoId(produto.id);

        // dataProdutoCompra = {
        //     quantidade,
        //     produto_id,
        // };

        //aplicar para gerar uma edição dos produtos na compra
        // const response = await api.post('produtoCompra', dataProdutoCompra);

        console.log("total -> ", total);
        console.log("valor produto -> ", produto.preco);
        console.log("quantidade ->", quantidade);
    }

    async function handleCadastrarCompra(e) {
        e.preventDefault();
        dataProdutoCompra = 0;

        const data = {
            total,
            tipo_pagamento,
            status,
            data_criacao,
        };

        try {
            const compra_id = await api.post('compras', data);

            // dataProdutoCompra = {
            //     compra_id,
            // };

            //aplicar para gerar uma edição dos produtos na compra
            // const response = await api.put('produtocompra', dataProdutoCompra);

            alert('Compra realizada com sucesso');
        } catch (err) {
            alert('Erro na compra');
        }

    }

    return (
        <div className="text-center container">
            <br />
            <h1>Fazer Compras</h1>
            <br />
            <form onSubmit={handleCadastrarCompra}>
                <label>Valor total: {total}</label>
                <br /><br /><br />
                <label>Tipo Pagamento</label>
                <input value={tipo_pagamento} onChange={e => setTipo_pagamento(e.target.value)} type="text" className="form-control" id="tipo_pagamento" required />
                <br /><br /><br />
                <label>Status</label>
                <input value={status} onChange={e => setStatus(e.target.value)} type="text" className="form-control" id="status" required />
                <br /><br /><br />
                <label>Data criação</label>
                <input value={data_criacao} onChange={e => setData_criacao(e.target.value)} type="text" className="form-control" id="data_criacao" required />
                <br /><br /><br />
                <br /><br /><br />
                <h1>Produtos</h1>
                <label>Observação: para apagar os campos e recomeçar a compra, recarregue a página.</label>
                <br /><br /><br />
                <ul>
                    {produtos.map(produto => (
                        <li key={produto.id}>
                            <h3>{produto.nome}</h3>
                            <h3>{produto.preco}</h3>
                            <br />
                            <label>Quantidade</label>
                            <input onChange={e => setQuantidade(e.target.value)} type="text" className="form-control" id="quantidade" />
                            <br />
                            <a onClick={() => calculaTotal(produto)} className="btn btn-primary">Incluir</a>{' '}
                            <br /><br /><br />
                        </li>
                    ))}
                </ul>
                <label>Valor total: {total}</label>
                <tr />
                <button className="btn btn-success" type="submit">Concluir Compra</button>{' '}
            </form>
        </div>
    );
}