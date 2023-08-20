// utilização o axios para que o frontend consuma o backend 

// configurações para incluir a parte do endereço que sempre se repete nas requisições

import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3333"
})