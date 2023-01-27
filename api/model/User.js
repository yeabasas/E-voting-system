const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

const nonReqString = {
  type: String,
  required: false,
  default: "",
};

const nonReqBoolean = {
  type: Boolean,
  default: false,
};

/**
 * @todo file the other fields
 */

const UserSchema = mongoose.Schema(
  {
    fullname: reqString,
    email: reqString,
    password: reqString,
    invited: nonReqBoolean,
    deleted: nonReqBoolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
