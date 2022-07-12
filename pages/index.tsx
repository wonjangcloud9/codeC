import type { NextPage } from "next";
import React from "react";
import useUser from "../lib/client/useUser";

const Home: NextPage = () => {
  let user = useUser();
  return (
    <div>
      <div className="text-white fixed left-20">
        <div className=" mb-4 mt-4">
          <span className="text-3xl">🕊</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl">🛖</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl">🔍</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl">🛎</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl">💌</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl">🏷</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl">📋</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl">👩‍🔧</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl">．．</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl">✚</span>
        </div>
      </div>
      <div style={{ height: "100vh" }} className="bg-black px-36">
        <div
          style={{ border: "1px solid rgb(55, 65, 81)" }}
          className="text-white border-gray-700 px-4 py-4"
        >
          <div className="flex justify-between">
            <div className="">홈</div>
            <div className="">✨</div>
          </div>
          <div className="flex justify-start align-middle">
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
                className="border-0 border-gray-600 px-4 text-2xl py-4 w-96 mt-8 bg-black placeholder-gray-600 text-white focus: bordeer-0"
              />
            </div>
          </div>
          <div className="flex justify-between pl-24">
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
        <div
          className="text-white p-4 flex justify-start align-middle relative"
          style={{ border: "1px solid rgb(55, 65, 81)" }}
        >
          <div>
            <img
              src="http://openimage.interpark.com/goods_image_big/6/4/9/1/7473206491_l.jpg"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="px-4">
            <div className="text-white">
              <span>원장</span>
              <span className="text-gray-600 ml-2">@원장</span>
              <span className="text-gray-600 ml-2">2시간</span>
            </div>
            <div className="text-sm">
              팬들하고 소통하려고 만든거지만 제 정신건강을 위해 없앤다면 팬들도
              이해해줄까요?
            </div>
            <div className="text-gray-600 flex justify-around -ml-10">
              <span>☁︎ 210</span>
              <span>↻ 794</span>
              <span>♡ 4,223</span>
              <span>↱</span>
            </div>
          </div>
          <div className="absolute right-4 text-center">
            <div>❌</div>
            <div className="text-gray-600">...</div>
          </div>
        </div>
        <div
          className="text-white p-4 flex justify-start align-middle relative"
          style={{ border: "1px solid rgb(55, 65, 81)" }}
        >
          <div>
            <img
              src="http://openimage.interpark.com/goods_image_big/6/4/9/1/7473206491_l.jpg"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="px-4">
            <div className="text-white">
              <span>원장</span>
              <span className="text-gray-600 ml-2">@원장</span>
              <span className="text-gray-600 ml-2">2시간</span>
            </div>
            <div className="text-sm">
              팬들하고 소통하려고 만든거지만 제 정신건강을 위해 없앤다면 팬들도
              이해해줄까요?
            </div>
            <div className="text-gray-600 flex justify-around -ml-10">
              <span>☁︎ 210</span>
              <span>↻ 794</span>
              <span>♡ 4,223</span>
              <span>↱</span>
            </div>
          </div>
          <div className="absolute right-4 text-center">
            <div>❌</div>
            <div className="text-gray-600">...</div>
          </div>
        </div>
        <div
          className="text-white p-4 flex justify-start align-middle relative"
          style={{ border: "1px solid rgb(55, 65, 81)" }}
        >
          <div>
            <img
              src="http://openimage.interpark.com/goods_image_big/6/4/9/1/7473206491_l.jpg"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="px-4">
            <div className="text-white">
              <span>원장</span>
              <span className="text-gray-600 ml-2">@원장</span>
              <span className="text-gray-600 ml-2">2시간</span>
            </div>
            <div className="text-sm">
              팬들하고 소통하려고 만든거지만 제 정신건강을 위해 없앤다면 팬들도
              이해해줄까요?
            </div>
            <div className="text-gray-600 flex justify-around -ml-10">
              <span>☁︎ 210</span>
              <span>↻ 794</span>
              <span>♡ 4,223</span>
              <span>↱</span>
            </div>
          </div>
          <div className="absolute right-4 text-center">
            <div>❌</div>
            <div className="text-gray-600">...</div>
          </div>
        </div>
        <div
          className="text-white p-4 flex justify-start align-middle relative"
          style={{ border: "1px solid rgb(55, 65, 81)" }}
        >
          <div>
            <img
              src="http://openimage.interpark.com/goods_image_big/6/4/9/1/7473206491_l.jpg"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="px-4">
            <div className="text-white">
              <span>원장</span>
              <span className="text-gray-600 ml-2">@원장</span>
              <span className="text-gray-600 ml-2">2시간</span>
            </div>
            <div className="text-sm">
              팬들하고 소통하려고 만든거지만 제 정신건강을 위해 없앤다면 팬들도
              이해해줄까요?
            </div>
            <div className="text-gray-600 flex justify-around -ml-10">
              <span>☁︎ 210</span>
              <span>↻ 794</span>
              <span>♡ 4,223</span>
              <span>↱</span>
            </div>
          </div>
          <div className="absolute right-4 text-center">
            <div>❌</div>
            <div className="text-gray-600">...</div>
          </div>
        </div>
        <div
          className="text-white p-4 flex justify-start align-middle relative"
          style={{ border: "1px solid rgb(55, 65, 81)" }}
        >
          <div>
            <img
              src="http://openimage.interpark.com/goods_image_big/6/4/9/1/7473206491_l.jpg"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="px-4">
            <div className="text-white">
              <span>원장</span>
              <span className="text-gray-600 ml-2">@원장</span>
              <span className="text-gray-600 ml-2">2시간</span>
            </div>
            <div className="text-sm">
              팬들하고 소통하려고 만든거지만 제 정신건강을 위해 없앤다면 팬들도
              이해해줄까요?
            </div>
            <div className="text-gray-600 flex justify-around -ml-10">
              <span>☁︎ 210</span>
              <span>↻ 794</span>
              <span>♡ 4,223</span>
              <span>↱</span>
            </div>
          </div>
          <div className="absolute right-4 text-center">
            <div>❌</div>
            <div className="text-gray-600">...</div>
          </div>
        </div>
        <div
          className="text-white p-4 flex justify-start align-middle relative"
          style={{ border: "1px solid rgb(55, 65, 81)" }}
        >
          <div>
            <img
              src="http://openimage.interpark.com/goods_image_big/6/4/9/1/7473206491_l.jpg"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="px-4">
            <div className="text-white">
              <span>원장</span>
              <span className="text-gray-600 ml-2">@원장</span>
              <span className="text-gray-600 ml-2">2시간</span>
            </div>
            <div className="text-sm">
              팬들하고 소통하려고 만든거지만 제 정신건강을 위해 없앤다면 팬들도
              이해해줄까요?
            </div>
            <div className="text-gray-600 flex justify-around -ml-10">
              <span>☁︎ 210</span>
              <span>↻ 794</span>
              <span>♡ 4,223</span>
              <span>↱</span>
            </div>
          </div>
          <div className="absolute right-4 text-center">
            <div>❌</div>
            <div className="text-gray-600">...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
