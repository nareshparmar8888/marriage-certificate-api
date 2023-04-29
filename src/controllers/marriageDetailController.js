const UserModel = require('../models/userModel.js');
const responseSchema = require('../helpers/responseSchema.js');
const errorMessages = require('../messages/errorMessages.json');
const successMessages = require('../messages/successMessages.json');
const { STATUS_CONSTANT } = require('../constants/index.js'); 
const catchAsync = require('../helpers/catchAsync.js');

function MarriageDetailController() {
    return {
        addMarriageDetails: catchAsync(async function(req, res, next) {
            const { email, password } = req.body;

            let admin = await UserModel.findOne({
                email: email,
                password: password
            }).exec();

            if(!admin) {
                res.statusCode = STATUS_CONSTANT.BAD_REQUEST;
                throw new Error(errorMessages.invalid_password);
            }

            responseSchema().successResponse({
                res: res,
                statusCode: STATUS_CONSTANT.OK,
                success: true,
                code: 'admin_login_success',
                message: successMessages.common.login_success,
                data: admin
            });
        }),
        approveApplication: catchAsync(async function(req, res, next) {
            const { email, password } = req.body;

            let admin = await UserModel.findOne({
                email: email,
                password: password
            }).exec();

            if(!admin) {
                res.statusCode = STATUS_CONSTANT.BAD_REQUEST;
                throw new Error(errorMessages.invalid_password);
            }

            responseSchema().successResponse({
                res: res,
                statusCode: STATUS_CONSTANT.OK,
                success: true,
                code: 'admin_login_success',
                message: successMessages.common.login_success,
                data: admin
            });
        }),
        rejectApplication: catchAsync(async function(req, res, next) {
            const { email, password } = req.body;

            let admin = await UserModel.findOne({
                email: email,
                password: password
            }).exec();

            if(!admin) {
                res.statusCode = STATUS_CONSTANT.BAD_REQUEST;
                throw new Error(errorMessages.invalid_password);
            }

            responseSchema().successResponse({
                res: res,
                statusCode: STATUS_CONSTANT.OK,
                success: true,
                code: 'admin_login_success',
                message: successMessages.common.login_success,
                data: admin
            });
        }),
    }
}

module.exports = MarriageDetailController
