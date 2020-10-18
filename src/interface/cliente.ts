export interface APCliente {
    _id: string
    nome: string
    cpf: string
    dataNascimento: string
    telefone: string
    cep: number
    logradouro: string
    number: number
    complemento : string
    bairro: string
    cidade: string
    estado: string
} 

export interface APClienteOptionals {
    _id?: string
    nome?: string
    cpf?: string
    dataNascimento?: string
    telefone?: string
    cep?: number
    logradouro?: string
    number?: number
    complemento ?: string
    bairro?: string
    cidade?: string
    estado?: string

}

export interface APDeleteCliente {
    n: number
    ok: number
    deletedCount: number
  }
  