import React from 'react';

export default function Filme() {
    // Tabela criada em bootstrap para listar os filmes
        return (
        <div>
            <h1>Lista Filmes</h1>
            <table class="table">
                <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Categoria</th>
                      <th scope="col">Ano</th>
                      </tr>
                </thead>
                <tbody>
                      <tr>
                      <th scope="row">1</th>
                          <td>Eu a patroa e as crinças</td>
                           <td>Seriado</td>
                           <td>2010</td>
                      </tr>                    
                </tbody>
            </table>
        </div>


    )
}