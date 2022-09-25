const mongoose = require('mongoose');
const Schema = mongoose.Schema;

OBJECT_ID = mongoose.Types.ObjectId();

const _schema = new Schema({

    _id: {
        type : Schema.ObjectId,
    },
    firstName : {
        type:String,
        default: null,
    },
    lastName: {
        type:String,
        default: null,
    },
    fullName: {
        type:String,
        default: null,
    },
    phoneNumber: {
        type:String,
        default: null,
    },
    password: {
        type:String,
        default: null,
    },
    email: {
        type:String,
        default: null,
    },

    dateOfBirth: {
        type:Date,
        default: null,
    },

    isActive: {
        // 0=> inactive, 1=> active
        type: Number,
        default: 1,
    } ,
    
    isDeleted: {
        // 0=> Not deleted, 1=> deleted,
        type: Number,
        default: 0
    },

    createdAt :{
        // when this record was created
        type: Date,
        default: Date.now()
    },
    
    updatedAt: {
        // last update
        type: Date,
        default: Date.now()
    }, 

});

const MyModel = mongoose.model('users', _schema);

module.exports = MyModel;
