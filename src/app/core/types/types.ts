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

export interface AuthResponse {
  access_token: string
}

export interface Result {
  paginaAtual: number
  ultimaPagina: number
  total: number
  precoMin: number
  precoMax: number
  resultado: Array<Ticket>
}

export interface Ticket {
  tipo: string;
  precoIda: number;
  precoVolta: number;
  taxaEmbarque: number;
  conexoes: number;
  tempoVoo: number;
  origem: UF;
  destino: UF;
  companhia: Airline;
  dataIda: Date;
  dataVolta: Date;
  total: number;
  orcamento: Array<Budget>;
}

export interface Airline {
  id: string;
  nome: string;
}

export interface Budget {
  descricao: string;
  preco: number;
  taxaEmbarque: number;
  total: number
}

export interface SearchData {
  somenteIda?: boolean;
  passageirosAdultos?: number;
  passageirosCriancas?: number;
  passageirosBebes?: number;
  tipo?: string;
  origemId?: number;
  destinoId?: number;
  precoMin?: number;
  precoMax?: number;
  conexoes?: number;
  tempoVoo?: number;
  dataIda: string;
  dataVolta?: string;
  companhiasId?: Array<number>;
  pagina: number;
  porPagina: number;
}

export interface StopOptions {
  display: string,
  value: string
}
