const { User } = require('../../models/users');
const AuthSerivce = require('./service');
const constants = require('../../utils/constants')

const login = async (req, res) => {
    
    let token = await AuthSerivce.login(req.body, res)
    return res.status(constants.CODE.GET_OK).json({'token ': token});


}

module.exports = {
    login,
}