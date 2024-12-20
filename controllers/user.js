const User = require("../models/users");

async function handleGetAllUsers(req,res) {
    const  alluser = await User.find({});
    return res.json(alluser);
}

async function handleGetAllUsersgetUserById(req,res) {
    // console.log(req.params.id);
    
    const user = await User.findById(req.params.id);
    
    return res.json(user);
}

async function handleUpdateById(req,res) {
    await User.findByIdAndUpdate(req.params.id,{last_name:"chnaged"});
    return res.json({ staus: "Chnage Successfully" });
}

async function deleteUserById(req,res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ staus: "success" })
    
}

async function handleCreateUser(req,res) {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.job_title ||
        !body.gender
    ) {
        return res.status(400).json({ msg: "All fild is required ....." });
    }

    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
    });
    console.log("result", result);
    return res.status(201).json({ msg: 'success' , id:result._id});
    
}

module.exports ={
    handleGetAllUsers,
    handleGetAllUsersgetUserById,
    handleUpdateById,
    deleteUserById,
    handleCreateUser
}

