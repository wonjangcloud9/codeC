import type { NextPage } from "next";
import React from "react";
import useUser from "../lib/client/useUser";

const Home: NextPage = () => {
  let user = useUser();
  return (
    <div style={{ height: "100vh" }} className="bg-black px-36">
      <div className="text-white border-2 border-solid border-gray-700 px-2 py-4">
        <div className="flex justify-between">
          <div className="">홈</div>
          <div className="">✨</div>
        </div>
        <div className="flex items-center">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEDBUM4MGZq9PCugjrxGxNM2lyNNrzKOD8Q&usqp=CAU"
              className="bg-black w-20 h-20 rounded-full"
            />
          </div>
          <div>
            <input
              type="text"
              required
              placeholder="무슨 일이 일어나고 있나요?"
              className="border-0 border-gray-600 px-4 text-2xl py-4 w-80 mt-8 bg-black placeholder-gray-600 text-white focus: bordeer-0 "
            />
          </div>
        </div>
        <div className="flex justify-between pl-20">
          <div className="flex">
            <div className="mr-2">🏞</div>
            <div className="mr-2">🎦</div>
            <div className="mr-2">📊</div>
            <div className="mr-2">😎</div>
            <div className="mr-2">🗓</div>
            <div className="mr-2">⬇️</div>
          </div>
          <div className="w-20 bg-blue-400 rounded-full text-center py-1 cursor-pointer">
            트윗하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
