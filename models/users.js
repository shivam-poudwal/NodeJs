const mongo = require("mongoose");

const userSchma = new mongo.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    job_title: {
        type: String
    },
    gender: {
        type: String
    }

},{
    timestamps:true
});

const User = mongo.model("user", userSchma);
module.exports = User;