const {usersModel} = require('../models')

const userModel= new usersModel

async function createUser(data){
    console.log('inside user service')
    try {
        const response = await userModel.addUser(data)
        console.log(response)
        return response
    } catch (error) {
         return error 
    }
}

async function getUsers(){
    try {
        const response = await userModel.showUser()
        return response
    } catch (error) {
        return error
    }
}

module.exports={
    createUser,
    getUsers
}