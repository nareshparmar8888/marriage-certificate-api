const responseSchema = require('../helpers/responseSchema.js');
const { STATUS_CONSTANT } = require('../constants/index.js');

function validate(rules) {
    return {
        validate: async function(req, res, next) {
            let result = await rules.validate(req.body);
            if (result.error) {
                responseSchema().apiResponse(
                    res,
                    STATUS_CONSTANT.BAD_REQUEST,
                    false,
                    'validation_fail',
                    result.error.details[0].message
                )
            } else {
                next()
            }
        }
    }
}

module.exports = validate;
