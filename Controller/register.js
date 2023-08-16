const User = require("../Model/userSchema");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

const usercreate = async (req, res) => {
  const { firstname, lastname, email, password, conformpassword } = req.body;

  const salt = await bycrpt.genSalt(10);
  const hash = await bycrpt.hash(password, parseInt(salt));
  console.log(hash);

  const exist = await User.findOne({ email });

  if (exist) {
    res.json("USER ALREADY EXIST");
  }
  if (!firstname || !lastname || !email || !password || !conformpassword) {
    res.json("INPUT IS MISSING ");
  }
  if (password.length < 6) {
    res.json("PASSWORD: ENTER MINIMUM 6 CHARACTER");
  } else {
    const userdetails = await User.create({
      firstname,
      lastname,
      email,
      password: hash,
      conformpassword,
    });
    res.json({
      firstName: userdetails.fistname,
      lastName: userdetails.lastname,
      email: userdetails.email,
      password: userdetails.password,
      conformpassword: userdetails.conformpassword,
      Token: tokengenerate(userdetails._id),
    });
  }
};

const tokengenerate = (id) => {
  return jwt.sign({ id }, "12345" ,{
    expiresIn: "1d",
  });
};

module.exports = usercreate;
