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
    name: {
      type: String,
    },
    avatar: {
      type: String,
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
      default: ""
    },
    likesCountArray: {
      type: [String],
      default: []
    },
    likesCount: {
      type: Number,
      default: 0
    }
  })
);

function validatePost(post) {
  const schemaPost = {
    user: Joi.string()
      .email()
      .min(3)
      .required(),
    date: Joi.date(),
    text: Joi.string(),
    attachment: Joi.string(),
    likesCountArray: Joi.array().items(Joi.string())
  };
  return Joi.validate(post, schemaPost);
}

exports.Post = Post;
exports.validatePost = validatePost;
