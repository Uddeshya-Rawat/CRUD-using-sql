const {DB} = require('../config')

class usersModel{
    constructor(model){
        this.table="users"
    }
    
   async addUser(data){
    console.log('inisde user model')
        const [user]= await DB.query(`
            INSERT INTO ${this.table} (name,email) values (?,?) `,[data.name,data.email]
        )
        console.log(user)
        return user

    }

    async showUser(){
        
    }
    
}



module.exports= usersModel


