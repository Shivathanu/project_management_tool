const Joi = require('joi');

const userSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
});

exports.userSignupValidator = async (req, res, next) => {
    try {
        const value = await userSchema.validateAsync(req.body);
        res.json({
            status: 'success',
            message: 'User created successfully',
            data: value
        });
    }
    catch (err) {
        console.log('err::', err);
        res.status(422).json({
            status: 'error',
            message: 'Validation Error: Invalid request data',
            data: err
        })
    }
    next();
};
