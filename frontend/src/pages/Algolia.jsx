import React, { useState } from "react";
import { useAlgoliaTestMutation } from "../redux/api/personApiSlice";
import Input from "../components/Input";

const Algolia = () => {
  const [id, setId] = useState("");

  const [algoliaTest, { isLoading }] = useAlgoliaTestMutation();

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      const res = algoliaTest({
        id,
      });
    } catch (error) {
      console.log(error);
    }
    console.log("AlgoliaSubmitHandlerを通過しました");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="placeholder"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </form>
    </div>
  );
};
export default Algolia;
