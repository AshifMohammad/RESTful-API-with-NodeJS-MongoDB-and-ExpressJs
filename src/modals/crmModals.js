import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter First Name of the Customer"
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  },
  create_date: {
    type: Date,
    default: Date.now()
  }
});
