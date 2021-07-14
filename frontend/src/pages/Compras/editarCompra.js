import React, { useState, useEffect } from 'react';
import api from '../../services/api'

export default function EditarCompra(props) {
    const compra = props.location.state.compra

    const [total, setTotal] = useState('');
    const [tipo_pagamento, setTipo_pagamento] = useState('');
    const [status, setStatus] = useState('');

    async function handleEditarCompra(e) {
        e.preventDefault();

        const data = {
            total,
            tipo_pagamento,
            status,
        };

        try {
            const response = await api.put('compras/' + compra.id, data);

            alert('Compra editada com sucesso');
        } catch (err) {
            alert('Erro na edição');
        }

    }

    return (
        <div className="text-center container">
            <br />
            <h1>Editar Compra</h1>
            <br />
            <form onSubmit={handleEditarCompra}>
                <label>Total da Compra</label>
                <input placeholder={compra.total} onChange={e => setTotal(e.target.value)} type="text" className="form-control" id="tipo_pagamento" required />
                <br /><br /><br />
                <label>Tipo de Pagamento</label>
                <input placeholder={compra.tipo_pagamento} onChange={e => setTipo_pagamento(e.target.value)} type="text" className="form-control" id="tipo_pagamento" required />
                <br /><br /><br />
                <label>Status</label>
                <input placeholder={compra.status} onChange={e => setStatus(e.target.value)} type="text" className="form-control" id="status" required />
                <br /><br /><br />
                <button className="btn btn-primary" type="submit">Editar</button>{' '}
            </form>
        </div>
    );
}