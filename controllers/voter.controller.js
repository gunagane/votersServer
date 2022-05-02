const { response } = require('../app')
const voterService = require('../services/voter.service')

exports.getVoters = async (req,res)=>{
    try{
        let response = await voterService.getVoters(req.body)
        res.json(response)
    }catch(err){
        res.json(err)
    }
}

exports.postVoters = async (req,res)=>{
    try{
        let response = await voterService.postVoters(req.body)
        res.json(response)
    }catch(err){

    }
}