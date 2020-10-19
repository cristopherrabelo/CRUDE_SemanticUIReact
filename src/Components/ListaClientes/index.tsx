import React from 'react';
import { Table, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import { Lista} from './styles';

import {APCliente} from '../../interface/cliente';

interface AProps {
  clientes: APCliente[]
  deleteCliente: (_id: string) => Promise<any>
}

export default function ListaClientes({ clientes, deleteCliente }: AProps) {


  function handleDeleteClick(cliente: APCliente): void {
    const msg = `Deseja excluir ${cliente.nome}?`
    const response = window.confirm(msg)

    if (response) {
      deleteCliente(cliente._id)
    }
  }  

  return (
    <Lista>        
        <Table celled>        
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell content="Nome" ></Table.HeaderCell>
              <Table.HeaderCell content="CPF" ></Table.HeaderCell>
              <Table.HeaderCell content="Telefone" ></Table.HeaderCell>
              <Table.HeaderCell content="Data de Nascimento" ></Table.HeaderCell>
              <Table.HeaderCell content="Logradouro" ></Table.HeaderCell>
              <Table.HeaderCell content="Número" ></Table.HeaderCell>
              <Table.HeaderCell content="Cidade" ></Table.HeaderCell>
              <Table.HeaderCell content="Estado" ></Table.HeaderCell>
              <Table.HeaderCell content="Ação" ></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {clientes.map(cliente => ( 
              <Table.Row key={cliente._id}>
                <Table.Cell content={cliente.nome}></Table.Cell>
                <Table.Cell content={cliente.cpf}></Table.Cell>
                <Table.Cell content={cliente.telefone}></Table.Cell>
                <Table.Cell content={cliente.dataNascimento}></Table.Cell>
                <Table.Cell content={cliente.endereco.logradouro}></Table.Cell>
                <Table.Cell content={cliente.endereco.number}></Table.Cell>
                <Table.Cell content={cliente.endereco.cidade}></Table.Cell>
                <Table.Cell content={cliente.endereco.estado}></Table.Cell>
                <Table.Cell>
                  <Button
                    basic
                    circular
                    compact
                    icon="pencil alternate"
                    size="tiny"
                    title="Editar"
                    to={`/clientes/formulario/${cliente._id}`}
                    as={Link}
                  />
                  <Button
                    basic
                    circular
                    compact
                    icon="trash"
                    size="tiny"
                    title="Excluir"
                    onClick={() => handleDeleteClick(cliente)}
                  />                  
                  </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        </Lista>

  );
}