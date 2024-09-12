import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../components/Input";
import { User } from "lucide-react";

const Home = () => {
  const [id, setId] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [name, setName] = useState("");
  const [alphabetPronunciation, setAlphabetPronunciation] = useState("");
  const [jpPronunciation, setJpPronunciation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("HomeSubmitHandlerを通過しました");
  };

  return (
    <motion.div>
      <h2 className="text-2xl text-green-400">ホーム</h2>
    </motion.div>
  );
};

export default Home;
