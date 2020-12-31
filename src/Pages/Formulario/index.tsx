import React, { FormEvent, useState, useEffect } from 'react';
import MenuBar from '../../Components/Menubar';
import { Formu, Container} from './styles';
import { Form, Button, Divider, Icon} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom'

import api from '../../api';

import { APCliente, APClienteOptionals } from '../../interface/cliente';
import { AxiosResponse } from 'axios';

interface IChangeInput {
  name: string
  value: string | number | boolean
}

interface IParams { 
  _id?: string
} 

const defaultValues = {
  telefone: '',
  cadastroAtivo: true,
  endereco: {
      complemento: '',
  }
}

export default function Formulario() {
  const { _id } = useParams<IParams>()
  const [values, setValues] = useState<APClienteOptionals>({
    ...defaultValues,
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
        alert('Error')
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
        alert('Da esse erro ao cadastrar')
        console.log(values)
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
            name='nome'
            fluid label='Nome' 
            placeholder='Nome'
            width={16} 
            required
            value={values.nome}
            onChange={(_, { name, value }) => handleChange({ name, value })}
          />            
        </Form.Group> 
        <Form.Group>
          <Form.Input 
            name='cpf'
            fluid label='CPF'
            placeholder='CPF' 
            value={values.cpf}
            width={8}
            required             
            onChange={(_, { name, value }) => handleChange({ name, value })}
            />            
          <Form.Input
            name='telefone'
            fluid label='Telefone'
            placeholder='Telefone'
            width={8}
            value={values.telefone}
            onChange={(_, { name, value }) => handleChange({ name, value })}
           />
        </Form.Group>
        <Form.Group inline>
            <label>Cadastro Ativo:</label>
            <Form.Radio
              name='cadastroAtivo'
              label="Sim"
              checked={values.cadastroAtivo}
              onChange={() => handleChange({ name: 'cadastroAtivo', value: true })}
            />
        </Form.Group>
        <Form.Group>
          <Form.Input 
          name='logradouro'
          fluid label='Logradouro' 
          placeholder='Logradouro' 
          width={14} 
          required
          value={values.endereco.logradouro}
          onChange={(_, { name, value }) => handleChange({ name, value })}
          />
          <Form.Input
          name='numero'
          fluid label='Numero'
          placeholder='Numero' 
          width={2} 
          required
          value={values.endereco.numero}
          onChange={(_, { name, value }) => handleChange({ name, value })}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input
            name='complemento'
            fluid label='Complemento'
            placeholder='Complemento' 
            value={values.endereco.complemento}
            onChange={(_, { name, value }) => handleChange({ name, value })}            
            />
          <Form.Input 
            name='bairro'
            fluid label='Bairro'
            placeholder='Bairro'
            required
            value={values.endereco.bairro}
            onChange={(_, { name, value }) => handleChange({ name, value })}
            />
        </Form.Group>

          <Form.Group widths='equal'>
            <Form.Input 
              name='cep'
              fluid label='CEP'
              placeholder='CEP'
              required
              value={values.endereco.cep}
              onChange={(_, { name, value }) => handleChange({ name, value })}
            />
            
            <Form.Input
              name='cidade'
              fluid label='Cidade'
              placeholder='Cidade'
              required
              value={values.endereco.cidade}
              onChange={(_, { name, value }) => handleChange({ name, value })}
              />

            <Form.Input 
              name='estado'
            fluid label='Estado'
              placeholder='Estado' 
              required
              value={values.endereco.estado}
              onChange={(_, { name, value }) => handleChange({ name, value })}
              />

          </Form.Group>

          <Button
            color='teal'
            content='Enviar'
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


