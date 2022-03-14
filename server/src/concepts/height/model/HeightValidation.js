import Joi from "joi-oid";

const validateCreateHeight = (height) => {
  const schema = Joi.object({
    range: Joi.string().min(3).max(7).required(),
  });

  return schema.validate(height);
};

export default validateCreateHeight;
