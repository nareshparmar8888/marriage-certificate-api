const UserModel = require('../models/userModel.js');

function seedData(app) {
    app.get('/createAdminUser', async function(req, res) {
        const email = "admin@gmail.com";

        const adminUser = {
            "name": 'Admin Name',
            "role": "Admin",
            "email": email,
            "password": "admin@123",
            "loginToken": "adminLoginToken"
        };

        const isAdminExists = await UserModel.findOne({role: 'Admin'}).exec();

        if(isAdminExists) {
            throw new Error('Admin alrady exists.');
        }

        await UserModel.create(adminUser, function(err, results) {
            if(err) throw err;
            res.send(results);
        })
    })
}

module.exports = seedData;