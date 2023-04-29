const joi = require('@hapi/joi');
const errorMessages = require('../messages/errorMessages.json');

function validationSchema() {
    return {
        adminLogin: joi.object({
            email: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'email'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'email')
            }),
            password: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'password'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'password')
            })
        })
    }
}

module.exports = validationSchema