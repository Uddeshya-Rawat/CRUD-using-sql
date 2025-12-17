const {userServices}=require('../services')

console.log('inside user controllers')

async function createUser(req,res){
    console.log("this is data comming from front end ",req.body)
    
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

async function getSingleUser(req,res){
    
    try {
        const response=await userServices.getSingleUser(req.params.id)
        console.log("this is single user response",response)
        if(!response){
            return res.status(300).json({
                error:true,
                message:'something went wrong or id didnt matched '
            })
        }
        return res.status(200).json({
            error:false,
            data:response,
        })
    } catch (error) {
        return error
    }
}

async function updateUser(req,res){
    
    try {
        const response = await userServices.updateUser(req.params.id,req.body)
         if(!response){
            return res.status(400).json({
                message:"soemthing went wrong or id is incorrect"
            })
         }
         return res.status(200).json({
            error:false,
            message:"user updated successfully"
         })
    } catch (error) {
        return error
    }
}

async function deleteUser(req,res){
    try {
        const response = await userServices.deleteUser(req.params.id)
        if(!response){
            return res.status(400).json({
                message:"soemthing went wrong or id is incorrect"
            })
         }
         return res.status(200).json({
            error:false,
            message:"user deleted successfully"
         })
    } catch (error) {
        return error 
    }
}


module.exports={
createUser,
getUsers,
getSingleUser,
updateUser,deleteUser
}