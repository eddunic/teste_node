import React from 'react';

export default function EditarProduto() {
    return (
        <div class="text-center container">
            <br/>      
            <h1>Editar Produto</h1>
            <br/>
            <label>Nome</label>
            <input type="text" class="form-control" id="nome" required/>
            <br/><br/><br/>
            <label>Descrição</label>
            <input type="text" class="form-control" id="descricao" required/>
            <br/><br/><br/>
            <label>Preço</label>
            <input type="text" class="form-control" id="preco" required/>
            <br/><br/><br/>
            <label>Data atualização</label>
            <input type="text" class="form-control" id="data_atualizacao" required/>
            <br/><br/><br/>
            <button class="btn btn-primary">Editar</button>{' '}
        </div>
    );
}