
const {CustomError} = require("../../errors");

module.exports = {
    isDataValid: (validationSchema, dataType = 'body') => async (req, res, next) => {
        try {
            const {error, value} = validationSchema.validate(req[dataType]);
            if(error) {
                return next(new CustomError(error.details[0].message));
            }
            req[dataType] = value;
            next();
        } catch (e) {
            next(e);
        }
    },
}
