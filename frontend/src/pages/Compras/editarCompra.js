import React from 'react';

export default function EditarCompra() {
    return (
        <div class="text-center container">
            <br/>      
            <h1>Editar Compra</h1>
            <br/>
            <label>Tipo Pagamento</label>
            <input type="text" class="form-control" id="tipo_pagamento" required/>
            <br/><br/><br/>
            <label>Status</label>
            <input type="text" class="form-control" id="status" required/>
            <br/><br/><br/>
            <button class="btn btn-primary">Editar</button>{' '}
        </div>
    );
}