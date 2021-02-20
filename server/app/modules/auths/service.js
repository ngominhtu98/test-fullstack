const { User } = require('../../models/users');

const { jwtToken, pareJwtToken } = require("../../utils/func");
const constants = require('../../utils/constants')


const config = require('../../../config/index');


const login = async (body , res) => {
    
    const { email, password } = body;

    let user = await User.findOne({ email, status: 'active' }).exec();

    if (!user || !user.checkPassword(password)){
        return res.status(constants.CODE.BAD_REQUEST).json({'errors ':"wrong email or password"});
    }

    return jwtToken({ _id: user._id ,password});

}

  

module.exports = {
    login,
}