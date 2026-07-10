const { register, login } = require("../controller/user.controller");


function userRoutes(app){
    // register
    app.post('/api/register', register);
    
    // login
    app.post('/api/login', login);
}

module.exports = userRoutes;







