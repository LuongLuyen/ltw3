const ApiService = require('../../Service/serviceApi')

const findOne = async (req, res) => {
    const data = await ApiService.findOne(req,res)
    return res.json(data)
}
const findAll = async (req, res) => {
    const data = await ApiService.findAll(req,res)
    return res.json(data)
}


module.exports = {
    findOne: findOne,
    findAll:findAll
}