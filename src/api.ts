import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL // URL da API
const token = process.env.REACT_APP_TOKEN // Token de autorização para comunicar com a API

export default axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'X-API-Key': token
  }
})
