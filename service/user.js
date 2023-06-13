// import User from "../model/user";

const User = require("../model/user");

const user = {};

user.get = async function (id) {
    if (id) {
        return await User.findById(id);
    }
    return await User.find();
}

user.add = async function (user) {
    return await User.create(user);
}

user.update = async function (id, user) {
    return await User.findByIdAndUpdate(id, user);
}
user.delete = async function (id) {
    return await User.findByIdAndDelete(id);
}
module.exports = user;