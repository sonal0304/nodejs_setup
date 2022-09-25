// const usersModel = require('../models/UsersModel');

class UsersContller{


    constructor(){
    }

    /**
     * login
     * This function is use to login for users
     * They need to send username and password to login  
     */
    login(req, res, next) {


        const response = {
            status: "success",
            message: "Welcome Amit kumar",
        };

        res.json(response);
    } // endof login function


    /**
     *  signup
     * to create a new user with their details
     * for eg firstName, lastName, email, phone and password
     */
    async signup(req, res){

        const usersModel = require('../models/UsersModel');
        const receivedData = req.body;

        // to get only one record from database where email is equal to recieved email from frontend
        // and user must not be deleted
        const checkIfUserExists = await usersModel.findOne({
            email: receivedData.email,
            isDeleted: 0,
        });
        if(checkIfUserExists){
            const response = {
                status: "error",
                message: "This email is already exists",
            };
            res.json(response)
        }else{
            /**
             * Create a new user
             * user method create
             */
            const userData = await usersModel.create({
                _id: OBJECT_ID,
                firstName : receivedData.firstName,
                lastName: receivedData.lastName,
                fullName : receivedData.firstName + ' ' + receivedData.lastName, 
                phoneNumber: receivedData.phonenumber,
                password : receivedData.password,
                email : receivedData.email,
            });
    
            const response = {
                status: "success",
                message: "Your account created successfully",
                data: {_id: userData._id}
            };
            res.json(response)
        }
    }; //endof signup


    forgot(){

    }

    resetPassword(){

    }

};

module.exports = new UsersContller();