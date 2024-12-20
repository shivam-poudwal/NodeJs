const mongo = require("mongoose");

async function connectMongoDb(url) {

    return mongo.connect(url);
    console.log(url);
    
    
}

module.exports ={
    connectMongoDb,
};