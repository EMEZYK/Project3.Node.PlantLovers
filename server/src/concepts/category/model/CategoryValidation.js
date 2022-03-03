const Joi = require("joi-oid");
Joi.objectId = require("joi-objectid")(Joi);

const validateCreateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });

  return schema.validate(category);
};

export default validateCreateCategory;