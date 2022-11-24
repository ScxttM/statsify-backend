const usersCtrl = {};
const User = require('../models/User');
usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}
usersCtrl.createUser = async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({
        username: username,
        password: password
    });
    await newUser.save();
    res.json({ message: 'User created' });
}
usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
}
module.exports = usersCtrl;