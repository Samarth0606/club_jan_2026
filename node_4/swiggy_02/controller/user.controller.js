const UserModel = require("../model/User.model");
const bcrypt = require('bcrypt');

async function register(req,res){
    let {fullName , email , password} = req.body;
    let data = await UserModel.findOne({email})
    if(data){
        return res.status(409).json({msg:"user already exists"})
    }else{
        let newUser = await UserModel.create({
            fullName , 
            email , 
            password: bcrypt.hashSync(password, 10)
        })
        return res.status(201).json(newUser);
    }
}

async function login(req,res){
    let {email , password} = req.body;
    let data = await UserModel.findOne({email})
    if(!data){
        return res.status(409).json({msg:"user doesnot exists"})
    }
    let validPassword = bcrypt.compareSync(password, data.password);
    if(!validPassword){
        return res.status(403).json({msg:"Invalid creds"})
    }
    return res.status(200).json({
        user:{
            email: data.email,
            fullName: data.fullName
        },
        // accessToken: token
    })
}

module.exports = {register, login}