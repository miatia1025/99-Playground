import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gray-800 bg-opacity-50 overflow-hidden rounded-2xl shadow-xl backdrop-filter backdrop-blur-xl"
      >
        <div className="p-8">
          {/* Title Divisiopn */}
          <div className="">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
              ホーム
            </h2>
          </div>

          {/* ContentDivision */}
          <div>
            <p className="text-green-500">登録 : 従業員情報の登録ができます</p>
            <p className="text-green-500">一覧 : 従業員情報の確認ができます</p>
          </div>
        </div>

        {/* Links Division */}
        <div className="w-full py-6 flex text-center justify-center bg-gray-900 bg-opacity-50">
          <p className="w-full text-sm text-green-400 hover:underline">
            <Link to={"/registration"}>登録</Link>
          </p>
          <p className="w-full text-sm text-green-400 hover:underline">
            <Link to={"/list"}>一覧</Link>
          </p>
          <p className="w-full text-sm text-green-400 hover:underline">
            <Link to={"/logout"}>ログアウト</Link>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
