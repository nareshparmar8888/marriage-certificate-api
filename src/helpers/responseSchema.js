function responseSchema() {
    return {
        apiResponse(res, statusCode, success, code, message, data = null) {
            res.json({
                statusCode: statusCode,
                success: success,
                code: code,
                message: message,
                data: data
            });
        },

        successResponse(data) {
            let responseData = null;

            if(data.data) {
                responseData = data.data;
            }

            data.res.json({
                statusCode: data.statusCode,
                success: data.success,
                code: data.code,
                message: data.message,
                data: responseData
            });
        }
    }
}

module.exports = responseSchema
