import React, { useState } from 'react';
import api from '../../services/api.js'

export default function CadastrarCompra() {
    let contador = 0;

    function increment() {
        // contador +;
        // console.log(contador);
    }

    const [valor, setValor] = useState('');
    const [tipo_pagamento, setTipo_pagamento] = useState('');
    const [status, setStatus] = useState('');
    const [data_criacao, setData_criacao] = useState('');
    const [quantidade, setQuantidade] = useState('');

    async function handleCadastrarCompra(e) {
        e.preventDefault();

        const data = {
            valor,
            tipo_pagamento,
            status,
            data_criacao,
        };

        const data2 = {
            quantidade,
        };

        try {
            const response = await api.post('compras', data);

            alert('Compra realizada com sucesso');
        } catch (err) {
            alert('Erro na compra');
        }

    }

    return (
        <div class="text-center container">
            <br />
            <h1>Fazer Compra</h1>
            <br />
            <form onSubmit={handleCadastrarCompra}>
                <label>Valor total: {contador}</label>
                <br /><br /><br />
                <label>Tipo Pagamento</label>
                <input value={tipo_pagamento} onChange={e => setTipo_pagamento(e.target.value)} type="text" class="form-control" id="tipo_pagamento" required />
                <br /><br /><br />
                <label>Status</label>
                <input value={status} onChange={e => setStatus(e.target.value)} type="text" class="form-control" id="status" required />
                <br /><br /><br />
                <label>Data criação</label>
                <input value={data_criacao} onChange={e => setData_criacao(e.target.value)} type="text" class="form-control" id="data_criacao" required />
                <br /><br /><br />
                <br /><br /><br />
                <h1>Produtos</h1>
                <br /><br /><br />
                <ul>
                    <li>
                        <h3>Produto1</h3>
                        <br />
                        <label>Quantidade</label>
                        <input type="text" class="form-control" id="quantidade" required />
                        <br /><br />
                        <button onClick={increment} class="btn btn-primary">Incluir</button>{' '}
                        <br /><br /><br />
                    </li>
                    <br /><br /><br />
                </ul>
                <button class="btn btn-primary" type="submit">Comprar</button>{' '}
            </form>
        </div>
    );
}