const Joi = require('@hapi/joi');

const user_schema = Joi.object({
    first_name: Joi.string().required().min(4).max(50),
    last_name: Joi.string().optional().min(4),
    gender: Joi.string().required().valid('male', 'female'),
    phone: Joi.number().required().min(100000000),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().required(),
    birth_date: Joi.date().max('2021-01-30').iso().required(),
});

async function validateUser(object){

    try{ 
        const value = await user_schema.validateAsync(object);

    }catch(error){
      throw new Error(error);
    }

}

module.exports = { validateUser }