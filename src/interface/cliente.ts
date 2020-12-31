export interface APCliente {
    _id: string
    nome: string
    cpf: string
    telefone: string
    cadastroAtivo: boolean
    endereco: {
        cep: string
        logradouro: string
        numero: string
        complemento : string
        bairro: string
        cidade: string
        estado: string
    }
}  

export interface APClienteOptionals {
    _id?: string
    nome?: string
    cpf?: string
    telefone?: string
    cadastroAtivo?: boolean
    endereco: {
        cep?: string
        logradouro?: string
        numero?: string
        complemento?: string
        bairro?: string
        cidade?: string
        estado?: string
    }
}

export interface APDeleteCliente {
    n: number
    ok: number
    deletedCount: number
  }
  