const mongoose = require('mongoose');
const env = require('../environment/dev');

mongoose.connect(env.dbUrl, {
    user: env.dbUser,
    pass: env.dbUserPwd,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connexion a la db etablie !");
}).catch(err => {
    console.log(err);
})