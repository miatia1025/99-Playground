import dotenv from "dotenv";
import Person from "../models/personModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

dotenv.config();

const signup = async (req, res) => {
  const mes = "You passed signup route";
  console.log(mes);
  res.status(200).json({ success: true, message: mes });
  return 0;
};
const login = async (req, res) => {
  const mes = "You passed login route";
  console.log(mes);
  res.status(200).json({ success: true, message: mes });
  return 0;
};
const logout = async (req, res) => {
  const mes = "You passed logout route";
  console.log(mes);
  res.status(200).json({ success: true, message: mes });
  return 0;
};

const personRegistration = asyncHandler(async (req, res) => {
  // Get request body
  const {
    employeeNumber,
    id,
    name: { name, alphabetPronunciation, jpPronunciation },
    email,
  } = req.body;
  // Show request body
  console.log("🚀 ~ personRegistration ~ req.body;:", req.body);

  // Existing Check
  const alreadyExist = await Person.findOne({ id });
  if (alreadyExist) {
    return res
      .status(400)
      .json({ success: false, message: `ID: ${id} は既に登録されています` });
  }

  // Blank Check
  if (!id || !name || !email) {
    console.log(`足りない入力箇所が存在します`);
    throw new Error("足りない入力箇所があります");
  }

  try {
    const person = new Person({
      employeeNumber: Number(employeeNumber),
      id: id,
      name: { name, alphabetPronunciation, jpPronunciation },
      email: email,
    });

    await person.save();

    console.log(`Name: ${name} passed User Registration route`);
    res.status(201).json({
      success: true,
      message: `${person.name.name} [${person.email}] 登録完了！`,
    });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
});

const addLisence = async (req, res) => {
  const { lisenceId, lisenceName, lisenceNumber, expiresAt } = req.body;
};

export { signup, login, logout, personRegistration };
