import Joi from "joi-oid";

const validateCreateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });

  return schema.validate(category);
};

export default validateCreateCategory;
