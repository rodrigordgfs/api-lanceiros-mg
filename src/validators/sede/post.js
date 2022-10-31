import Joi from "joi";

const postSchema = Joi.object({
  nome: Joi.string().required(),
  regiao: Joi.string().required(),
  endereco: Joi.string().required(),
  ativo: Joi.boolean().default(true),
});

export default postSchema;
