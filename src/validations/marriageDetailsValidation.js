const joi = require('@hapi/joi');
const errorMessages = require('../messages/errorMessages.json');

function validationSchema() {
    return {
        addMarriageDetail: joi.object({
            location: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'location'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'location')
            }),
            marriageDate: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'marriageDate'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'marriageDate')
            }),
            marriageAddress: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'marriageAddress'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'marriageAddress')
            }),
            husbandSurname: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'location'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'location')
            }),
            husbandName: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandName'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandName')
            }),
            husbandBirthDate: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandBirthDate'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandBirthDate')
            }),
            husbandReligious: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandReligious'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandReligious')
            }),
            husbandLocation: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandLocation'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandLocation')
            }),
            husbandAddress: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandAddress'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandAddress')
            }),
            husbandGuardianSurname: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandGuardianSurname'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandGuardianSurname')
            }),
            husbandGuardianName: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandGuardianName'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandGuardianName')
            }),
            husbandGuardianLocation: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandGuardianLocation'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandGuardianLocation')
            }),
            husbandGuardianAddress: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandGuardianAddress'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandGuardianAddress')
            }),
            husbandMobileNumber: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandMobileNumber'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandMobileNumber')
            }),
            husbandEmailAddress: joi.string().email().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'husbandEmailAddress'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'husbandEmailAddress')
            }),
            wifeSurname: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeSurname'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeSurname')
            }),
            wifeName: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeName'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeName')
            }),
            wifeBirthDate: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeBirthDate'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeBirthDate')
            }),
            wifeReligious: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeReligious'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeReligious')
            }),
            wifeLocation: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeLocation'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeLocation')
            }),
            wifeAddress: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeAddress'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeAddress')
            }),
            wifeGuardianSurname: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeGuardianSurname'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeGuardianSurname')
            }),
            wifeGuardianName: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeGuardianName'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeGuardianName')
            }),
            wifeGuardianLocation: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeGuardianLocation'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeGuardianLocation')
            }),
            wifeGuardianAddress: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeGuardianAddress'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeGuardianAddress')
            }),
            wifeMobileNumber: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeMobileNumber'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeMobileNumber')
            }),
            wifeEmail: joi.string().email().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeEmail'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeEmail')
            }),
            wifeMobileNumber: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'wifeMobileNumber'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'wifeMobileNumber')
            }),
            priestFullName: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'priestFullName'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'priestFullName')
            }),
            priestBirthDate: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'priestBirthDate'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'priestBirthDate')
            }),
            priestBirthDate: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'priestBirthDate'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'priestBirthDate')
            }),
            priestLocation: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'priestLocation'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'priestLocation')
            }),
            priestAddress: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'priestAddress'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'priestAddress')
            }),
            witnessFirstFullName: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'witnessFirstFullName'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'witnessFirstFullName')
            }),
            witnessFirstBirthDate: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'witnessFirstBirthDate'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'witnessFirstBirthDate')
            }),
            witnessFirstAddress: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'witnessFirstAddress'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'witnessFirstAddress')
            }),
            witnessSecondFullName: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'witnessSecondFullName'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'witnessSecondFullName')
            }),
            witnessSecondBirthDate: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'witnessSecondBirthDate'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'witnessSecondBirthDate')
            }),
            witnessSecondAddress: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'witnessSecondAddress'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'witnessSecondAddress')
            }),
        }),
        approveApplication: joi.object({
            dateAndTime: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'dateAndTime'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'dateAndTime')
            }),
            requestCertificationList: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'requestCertificationList'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'requestCertificationList')
            }),
        }),
        approveApplication: joi.object({
            dateAndTime: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'dateAndTime'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'dateAndTime')
            }),
            requestCertificationList: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'requestCertificationList'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'requestCertificationList')
            }),
        }),
        rejectApplication: joi.object({
            message: joi.string().required().messages({
                'any.required': errorMessages.common.required.replace(':attribute', 'message'),
                'string.empty': errorMessages.common.required.replace(':attribute', 'message')
            })
        }),
    }
}

module.exports = validationSchema