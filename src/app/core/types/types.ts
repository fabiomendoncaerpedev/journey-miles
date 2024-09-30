export interface Sale {
  id: number,
  destino: string,
  imagem: string,
  preco: number
}

export interface Testimony {
  id: number,
  texto: string,
  autor: string,
  avatar: string
}

export interface UF {
  id: number,
  sigla: string,
  nome: string
}

export interface User {
  nome: string,
  nascimento: string,
  cpf: string,
  telefone: string,
  email: string,
  senha: string,
  genero: string,
  cidade: string,
  estado: UF
}
