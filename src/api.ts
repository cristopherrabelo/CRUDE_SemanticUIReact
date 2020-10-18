import axios from 'axios';

export default axios.create({
  baseURL: 'https://test.api.scontti.com/cris/v1/cliente',
  headers: {'X-API-Key': 'z5o9Ne3tT0sF8@rA5P8&Ry4EuG9GT'}
})