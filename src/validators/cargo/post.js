import Joi from "joi";

const postSchema = Joi.object({
  nome: Joi.string().required()
});

export default postSchema;
