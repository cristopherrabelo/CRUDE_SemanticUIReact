import React from 'react';

import { Grid, Icon, Divider } from 'semantic-ui-react';
import { Container, Pagina, Divs } from './styles';

import { Link } from 'react-router-dom';

import Menubar from '../../Components/Menubar';

const Index: React.FC = () => {
  return (
    
    <Container>
      <Menubar />
      <Divs><Divider horizontal><h4>HOME</h4></Divider></Divs>
      <Pagina>        
        <Grid centered doubling relaxed='very' columns={6}>
          <Grid.Column>
            <Link to='/clientes'><Icon circular name='user' size='huge' inverted color='teal' /></Link>
            <h4>Lista de Clientes</h4>
          </Grid.Column>          

          <Grid.Column>
            <Link to='/formulario'><Icon circular name='add user'size='huge' inverted color='teal'/></Link>
            <h4>Adicionar Cliente</h4>

          </Grid.Column>          
        </Grid>
      </Pagina>
    </Container>
    
  );
}

export default Index;