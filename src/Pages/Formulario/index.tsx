import React, { FormEvent, useState, useEffect } from 'react';
import MenuBar from '../../Components/Menubar';
import { Formu, Container} from './styles';
import { Form, Button, Divider, Icon} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom'

import api from '../../api';

import { APCliente, APClienteOptionals } from '../../interface/cliente';
import { AxiosResponse } from 'axios'

interface IChangeInput {
  name: string
  value: string | number | boolean
}

interface IParams {
  _id?: string
} 

const endereco = {
  complemento: ''  
}

const defaultValues = {
  dataNascimento: '',
  telefone: '',
  cadastroAtivo: true,
  endereco
}

export default function Formulario() {
  const { _id } = useParams<IParams>()
  const [values, setValues] = useState<APClienteOptionals>({
    ...defaultValues,
    endereco,
    _id
  })
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!_id) return

    setLoading(true)

    api
      .get<APCliente, AxiosResponse<APCliente>>(`/cliente/${_id}`)
      .then(response => setValues(response.data))
      .catch(e => {
        console.log(e)
        alert('Error ao dados')
      })
      .finally(() => setLoading(false))
  }, [_id])

  function handleChange({ name, value }: IChangeInput) {
    setValues({ ...values, [name]: value })
  }

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    setLoading(true)

    const method = _id ? 'PUT' : 'POST'
    const url = _id ? `/cliente/${_id}` : '/cliente'

    api({
      url,
      method,
      data: values
    })
      .then(() => alert('Sucesso'))
      .catch(e => {
        console.log(e)
        alert('Erro . . . . . . . .')
      })
      .finally(() => setLoading(false))
  }

  return (
  <Container>
    <MenuBar />
    <Formu>       
      <div><Link to='/'><Icon name='arrow alternate circle left' size='big' color='blue' /></Link></div>
      <Divider horizontal><h4>Cadastro de Clientes</h4></Divider> 
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input 
            fluid label='Nome' 
            placeholder='Nome'
            width={16} 
            required
            values={values.nome}
            onChange={(_, { name, value }) => handleChange({ name, value })}
          />            
        </Form.Group> 
        <Form.Group>
          <Form.Input fluid label='Data de Nascimento' 
          placeholder='Data de Nascimento' 
          width={4}
          values={values.dataNascimento}
          onChange={(_, { name, value }) => handleChange({ name, value })}
           /> 
          <Form.Input fluid label='CPF'
            placeholder='CPF' 
            values={values.cpf}
            width={6}
            required             
            onChange={(_, { name, value }) => handleChange({ name, value })}
            />            
          <Form.Input fluid label='Telefone'
            placeholder='Telefone'
            width={6}
            values={values.telefone}
            onChange={(_, { name, value }) => handleChange({ name, value })}
           />
        </Form.Group>
        <Form.Group inline>
            <label>Cadastro Ativo:</label>
            <Form.Radio
              label="Sim"
              checked={values.cadastroAtivo}
              onChange={() => handleChange({ name: 'cadastroAtivo', value: true })}
            />
        </Form.Group>
        <Form.Group>
          <Form.Input fluid label='Logradouro' 
          placeholder='Logradouro' 
          width={14} 
          required
          values={values.endereco.logradouro}
          onChange={(_, { name, value }) => handleChange({ name, value })}
          />
          <Form.Input fluid label='Numero'
          placeholder='Numero' 
          width={2} 
          required
          values={values.endereco.number}
          onChange={(_, { name, value }) => handleChange({ name, value })}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input fluid label='Complemento'
            placeholder='Complemento' 
            values={values.endereco.complemento}
            onChange={(_, { name, value }) => handleChange({ name, value })}            
            />
          <Form.Input fluid label='Bairro'
            placeholder='Bairro'
            required
            values={values.endereco.bairro}
            onChange={(_, { name, value }) => handleChange({ name, value })}
            />
        </Form.Group>

          <Form.Group widths='equal'>
            <Form.Input fluid label='CEP'
              placeholder='CEP'
              required
              values={values.endereco.cep}
              onChange={(_, { name, value }) => handleChange({ name, value })}
            />
            <Form.Input fluid label='Cidade'
              placeholder='Cidade'
              required
              values={values.endereco.cidade}
              onChange={(_, { name, value }) => handleChange({ name, value })}
              />
            <Form.Input fluid label='Estado'
              placeholder='Estado' 
              required
              values={values.endereco.estado}
              onChange={(_, { name, value }) => handleChange({ name, value })}
              />
          </Form.Group>

          <Button
            color='teal'
            content='Adicionar'
            icon='add'
            type="submit"
            loading={loading}
            labelPosition='left'
          />
        </Form>
      </Formu>
    </Container>
  );
}


