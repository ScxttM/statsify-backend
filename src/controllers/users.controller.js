const usersCtrl = {};
const User = require('../models/User');
usersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}
usersCtrl.createUser = async (req, res) => {
    const { id, display_name, country, email, images, user_url } = req.body;
    await User.findOneAndUpdate(
        { id_user: id },
        {
            display_name: display_name,
            country: country,
            email: email,
            images: images,
            user_url: user_url
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
    ).catch(err => res.json({ error: err }));
    res.json({ message: 'User logged' });
}
usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
}
module.exports = usersCtrl;