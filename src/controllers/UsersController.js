class UsersContller{

    /**
     * login
     * This function is use to login for users
     * They need to send username and password to login  
     */
    login(req, res, next) {
        res.send('Wow this works from controller');
    } // endof login function


    signup(){

    }


    forgot(){

    }

    resetPassword(){

    }

};

module.exports = new UsersContller;