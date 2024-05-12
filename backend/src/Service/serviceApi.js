const User = require('../Model/user')
const Film = require('../Model/film')

const findOne = async(req,res) => {
    try {
        const data= await User.find({id:req.params.id})
        return data[0]
    } catch (error) {
        return error
    }
}
const findAll = async(req,res) => {
    try {
        const data= await Film.find()
        return data
    } catch (error) {
        return error
    }
}

module.exports = {
    findOne: findOne,
    findAll:findAll
 
}