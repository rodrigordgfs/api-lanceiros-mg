import Joi from "joi";

const patchSchema = Joi.object({
  nome: Joi.string(),
  regiao: Joi.string(),
  endereco: Joi.string(),
  ativo: Joi.boolean(),
});

export default patchSchema;
