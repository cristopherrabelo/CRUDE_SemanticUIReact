import React, { useState, useEffect } from 'react';

import { Container, HeaderTabela, Lista } from './styles';
import { Icon, Divider, Button } from 'semantic-ui-react';
import MenuBar from '../../Components/Menubar';
import ListaClientes from '../../Components/ListaClientes';

import { Link } from 'react-router-dom';

import api from '../../api';
import { AxiosResponse } from 'axios';
import {APCliente, APDeleteCliente} from '../../interface/cliente';

export default function Clientes() {
  const [clientes, setClientes] = useState<APCliente[]>([])
  
    function getClientes() {
      api
        .get<APCliente[], AxiosResponse<APCliente[]>>('/cliente')
        .then(response => setClientes(response.data))
        .catch(e => {
          console.log(e)
          alert(e.message)
        })
    }
 
    async function deleteCliente(_id: string): Promise<void> {
      api
        .delete<APDeleteCliente, AxiosResponse<APDeleteCliente>>(
          `/cliente/${_id}`
        )
        .then(response => {
          if (response.data.n < 1) {
            throw new Error('')
          }
  
          setClientes(clientes.filter(clientes => clientes._id !== _id))
        })
        .catch(e => {
          console.log(e)
          alert('Item não foi excluído')
        })
    }
    
  useEffect(() => {
    getClientes()
  }, [])
 

  return (
      <Container>
        <MenuBar />
        <Lista>
        <div><Link to='/'><Icon name='arrow alternate circle left' size='big' color='blue' /></Link></div>
        <Divider horizontal><h4>Lista de Clientes</h4></Divider>
        <HeaderTabela>
          <Link to='/formulario'>
            <Button
              color='teal'
              as={Link}
              to="/formulario"
              content='Adicionar'
              icon='add user'
              labelPosition='right'
            />
          </Link>
        </HeaderTabela>
      <ListaClientes clientes={clientes} deleteCliente={deleteCliente}/>
      </Lista>
    </Container>
  );
}