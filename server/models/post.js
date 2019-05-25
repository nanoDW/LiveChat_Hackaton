const Joi = require("joi");
const mongoose = require("mongoose");
const mongooseMail = require("mongoose-type-email");
const mongooseURL = require("mongoose-type-url");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    user: {
      type: mongoose.SchemaTypes.Email,
      minlength: 3,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    text: {
      type: String,
      default: ""
    },
    attachment: {
        type: String,
        default: "",
    },
    likesCount: {
        type: Number,
        default: 0
    }
  })
);

function validatePost(post) {
  const schemaPost = {
    user: Joi.string().email().min(3).required(),
    date: Joi.date(),
    text: Joi.string(),
    attachment: Joi.string(),
    likesCount: Joi.number()
  };
  return Joi.validate(post, schemaPost);
}

exports.Post = Post;
exports.validatePost = validatePost;
