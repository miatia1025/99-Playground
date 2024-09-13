import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../components/Input";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useRegistrationMutation } from "../redux/api/personApiSlice.js";

const Registration = () => {
  const [id, setId] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [alphabetPronunciation, setAlphabetPronunciation] = useState("");
  const [jpPronunciation, setJpPronunciation] = useState("");

  const [register, { isLoading }] = useRegistrationMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await register({
        id,
        employeeNumber,
        email,
        name: { name, alphabetPronunciation, jpPronunciation },
      }).unwrap();

      toast.success(res.message);
    } catch (error) {
      console.log(error);
      toast.error(error.data?.message);
    }

    console.log("RegistrationSubmitHandlerを通過しました");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          情報登録画面
        </h2>

        {/* Content */}
        <form onSubmit={submitHandler}>
          <Input
            icon={User}
            type="number"
            placeholder="従業員番号"
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
          />
          <Input
            icon={User}
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            icon={User}
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={User}
            type="text"
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={User}
            type="text"
            placeholder="ローマ字"
            value={alphabetPronunciation}
            onChange={(e) => setAlphabetPronunciation(e.target.value)}
          />
          <Input
            icon={User}
            type="text"
            placeholder="ひらがな"
            value={jpPronunciation}
            onChange={(e) => setJpPronunciation(e.target.value)}
          />

          {/* Submit */}
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:bg-green-500 focus-within:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            登録
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          <Link to="/" className="text-green-400 hover:underline">
            ホームへ
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Registration;
