const Joi = require("joi");

const postValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    title: Joi.string().required(),
    message: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports.postValidation = postValidation;
