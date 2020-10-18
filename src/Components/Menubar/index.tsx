import React from 'react';

import { Dropdown, Menu } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const Menubar: React.FC = () => {
  return (
    <Menu attached='top'>
      <Dropdown item icon='bars' simple>
        <Dropdown.Menu>
          <Dropdown.Item><Link to='/'>Inicio</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link to='/cliente'>Clientes</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link to='/formulario'>Cadastro Cliente</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>      
    </Menu>
  );
}

export default Menubar;