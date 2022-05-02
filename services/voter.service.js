const DB = require('../configurations/db.config')

exports.getVoters = async(body)=>{
    try{
        const [rows,fields] = await DB.query("SELECT * from register");
        return rows
    }catch(err){
        throw err
    }
}

exports.postVoters = async(body)=>{
    console.log("request body",body)
    try{
        const [rows,fields] = await DB.query(`insert into register (first_name,last_name,age,gender,adhae_no)
        values ("${body.firstName}","${body.lastName}",${body.age},"${body.gender}",${body.adharNo})`)
    }catch(err){
        throw err
    }
}