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
              <Table.HeaderCell content="nome" ></Table.HeaderCell>
              <Table.HeaderCell content="cpf" ></Table.HeaderCell>
              <Table.HeaderCell content="telefone" ></Table.HeaderCell>
              <Table.HeaderCell content="dataNascimento" ></Table.HeaderCell>
              <Table.HeaderCell content="logradouro" ></Table.HeaderCell>
              <Table.HeaderCell content="number" ></Table.HeaderCell>
              <Table.HeaderCell content="cidade" ></Table.HeaderCell>
              <Table.HeaderCell content="estado" ></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {clientes.map(cliente => ( 
              <Table.Row key={cliente._id}>
                <Table.Cell content={cliente.nome}></Table.Cell>
                <Table.Cell content={cliente.cpf}></Table.Cell>
                <Table.Cell content={cliente.telefone}></Table.Cell>
                <Table.Cell content={cliente.dataNascimento}></Table.Cell>
                <Table.Cell content={cliente.logradouro}></Table.Cell>
                <Table.Cell content={cliente.number}></Table.Cell>
                <Table.Cell content={cliente.cidade}></Table.Cell>
                <Table.Cell content={cliente.estado}></Table.Cell>
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