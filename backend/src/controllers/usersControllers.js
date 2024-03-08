const userControllers = {};
const User = require('../models/User');

userControllers.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
userControllers.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    })
    await newUser.save();
    console.log(newUser);
    res.json({ message: 'User saved' })
};

userControllers.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

userControllers.updateUser = (req, res) => res.json({ message: 'User updated' });

userControllers.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' })
};

module.exports = userControllers;