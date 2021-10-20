const User = require("../models/user");
module.exports.create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    var user = new User({
      name: name,
      email: email,
      password: password,
    });
    const us = await user.save();
    res.json(us);
  } catch (e) {
    console.log(e.message);
  }
};
module.exports.read = async (req, res) => {
  try {
    let data = await User.findOne({ _id: "6165ca011aec44f0bc986db5" });
    res.json(data);
  } catch (e) {
    console.log(e);
  }
};
module.exports.update = async (req, res) => {};
module.exports.delete = async (req, res) => {};
