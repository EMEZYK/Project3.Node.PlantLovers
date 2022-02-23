const Joi = require("joi-oid");
Joi.objectId = require("joi-objectid")(Joi);

const validateUser = (user) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),

    email: Joi.string()
      .min(6)
      .max(255)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),

    password: Joi.string().min(6).max(255).required(),

    isAdmin: Joi.boolean().required(),

    phoneNumber: Joi.number().optional(),

    city: Joi.string().optional(),

    isActive: Joi.boolean().required(),

    favourites: Joi.array().default([]).items(Joi.string()),
  });

  return schema.validate(user);
};

export default validateUser;
