const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../model/User");

/**
 * @todo modify the fields accordingly
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user === null) {
      res.json({
        data: null,
        error: true,
        message: "Account not found!",
      });
    } else {
      if (await bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign(
          { name: email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({
          data: {
            id: user._id,
            fullname: user.fullname,
            email: user.email,
            invited: user.invited,
            accessToken,
          },
          error: false,
          message: "",
        });
      } else {
        res.status(200).json({
          data: null,
          error: true,
          message: "Incorrect password!",
        });
      }
    }
  } catch (err) {
    res.status(500).json({ data: null, error: true, message: err });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const userExist = await Users.findOne({ email });
    if (userExist)
      return res.status(200).json({
        error: true,
        message: "The email address already exist!",
      });
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    // check out this too
    await Users.create({
      fullname,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ error: false, message: "" });
  } catch (err) {
    res.status(500).json({ error: true, message: err });
  }
});

module.exports = router;
