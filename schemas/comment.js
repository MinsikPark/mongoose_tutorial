const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commnectSchema = new Schema({
    commneter : {
        type : ObjectId,
        required : true,
        ref : 'User'
    },
    comment : {
        type : String,
        required : true
    },
    createAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Comment", commnectSchema);