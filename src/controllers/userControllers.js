const {userServices}=require('../services')

console.log('inside user controllers')

async function createUser(req,res){
    console.log(req.body)
    
    try {
        const response = await userServices.createUser(req.body)
        if(!response){
            throw new err
        }
        return res.status(200).json({
            "error":false,
            data:response
        })
    } catch (error) {
        return err
    }
}

async function getUsers(req,res){
    try {
        const response = await userServices.getUsers()
        if(response){
            return res.status(200).json({
                "error":false,
                "data":response
            })
        }
    } catch (error) {
        return error
    }
}

module.exports={
createUser,
getUsers
}