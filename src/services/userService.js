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
        const response = await userModel.showUsers()
        return response
    } catch (error) {
        return error
    }
}

async function getSingleUser(id){
    try {
        const response = await userModel.showSingleUser(id)
        return response
    } catch (error) {
        return error
    }
}

async function updateUser(id,data){
    try {
        const response = await userModel.updateUser(id,data)
        return response
    } catch (error) {
        return error
    }
}

async function deleteUser(id){
    try {
        const response = await userModel.deleteUser(id)
        return response
    } catch (error) {
        return error
    }
}



module.exports={
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
}