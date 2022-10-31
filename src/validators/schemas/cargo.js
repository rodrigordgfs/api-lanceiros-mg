import Joi from "joi";

const postSchema = Joi.object({
  nome: Joi.string().required(),
  ativo: Joi.boolean().default(true),
});

const patchSchema = Joi.object({
  nome: Joi.string(),
  ativo: Joi.boolean(),
});

export { postSchema, patchSchema };

