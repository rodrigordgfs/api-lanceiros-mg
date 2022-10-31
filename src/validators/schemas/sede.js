import Joi from "joi";

const patchSchema = Joi.object({
  nome: Joi.string(),
  regiao: Joi.string(),
  endereco: Joi.string(),
  ativo: Joi.boolean(),
});

const postSchema = Joi.object({
  nome: Joi.string().required(),
  regiao: Joi.string().required(),
  endereco: Joi.string().required(),
  ativo: Joi.boolean().default(true),
});

export { patchSchema, postSchema };

