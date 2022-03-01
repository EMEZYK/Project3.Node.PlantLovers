import Joi from "joi-oid";

const validateCreateUser = (user) => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .max(255)
      .required()
      .email({ minDomainSegments: 2 }),

    password: Joi.string().min(6).max(255).required(),

    confirmPassword: Joi.string().required().valid(Joi.ref("password")),

    phoneNumber: Joi.number().optional(),

    city: Joi.string().optional(),

    isAdmin: Joi.boolean(),
  });

  return schema.validate(user);
};

export default validateCreateUser;
