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

    async showUsers(){
        const [row]= await DB.query(`select * from ${this.table}`)
        console.log(row)
        return row
    }

    async updateUser(id,data){
        const [row] =await DB.query('update users SET name=? , email=? where id=?',[data.name,data.email,id])
        console.log(row)
        return row
    }

    async showSingleUser(id){
        const [row]=await DB.query(`select * from ${this.table} where id=?`,[id])
        return row
    }
    
    async deleteUser(id){
        const [result]= await DB.query(`delete from ${this.table} where id=?`,[id])
        return result
    }
}



module.exports= usersModel


