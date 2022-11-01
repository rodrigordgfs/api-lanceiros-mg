import Joi from "joi";

const postSchema = Joi.object({
  sede: Joi.string().required(),
  cargo: Joi.string().required(),
  nome: Joi.string().required(),
  cpf: Joi.string().required(),
  apelido: Joi.string().required(),
  telefone_contato: Joi.string().required(),
  telefone_emergencia: Joi.string().required(),
  data_nascimento: Joi.date().required(),
  cep: Joi.string().required(),
  estado: Joi.string().required(),
  cidade: Joi.string().required(),
  logradouro: Joi.string().required(),
  numero: Joi.string().required(),
  bairro: Joi.string().required(),
  complemento: Joi.string().allow('', null),
  profissao: Joi.string().required(),
  estado_civil: Joi.string().required(),
  data_entrada: Joi.date().required(),
  data_saida: Joi.date().valid(null),
  observacoes: Joi.string().allow('', null),
  ativo: Joi.boolean().default(true),
});

const patchSchema = Joi.object({
  sede: Joi.string(),
  cargo: Joi.string(),
  nome: Joi.string(),
  cpf: Joi.string(),
  apelido: Joi.string(),
  telefone_contato: Joi.string(),
  telefone_emergencia: Joi.string(),
  data_nascimento: Joi.date(),
  cep: Joi.string(),
  estado: Joi.string(),
  cidade: Joi.string(),
  logradouro: Joi.string(),
  numero: Joi.string(),
  bairro: Joi.string(),
  complemento: Joi.string().allow('', null),
  profissao: Joi.string(),
  estado_civil: Joi.string(),
  data_entrada: Joi.date(),
  data_saida: Joi.date(),
  observacoes: Joi.string().allow('', null),
  ativo: Joi.boolean(),
});

export { postSchema, patchSchema };

