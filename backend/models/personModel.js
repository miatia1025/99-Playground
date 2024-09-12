import { query } from "express";
import mongoose from "mongoose";

const licenseSchema = new mongoose.Schema({
  licenseId: { type: Number, required: true },

  licenseName: {
    name: { type: String, required: true },
    alphabetPronouciation: { type: String },
    jpPronounciation: { type: String },
  },

  lisenceNumber: { type: Number },

  expiresAt: { type: Date },
});

const personSchema = new mongoose.Schema({
  employeeNumber: {
    type: Number,

    // Options
    required: true,
    unique: true,
  },

  id: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },

  name: {
    name: {
      type: String,

      //   Options
      required: true,
    },

    jpPronunciation: {
      type: String,
    },

    alphabetPronunciation: {
      type: String,
    },
  },

  licenses: [licenseSchema],
});

const Person = mongoose.model("employee", personSchema);

export default Person;
