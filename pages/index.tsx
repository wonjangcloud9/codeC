import type { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import useUser from "../lib/client/useUser";
import usePost from "../lib/client/usePost";
import useMutation from "../lib/client/useMutation";
import Link from "next/link";
interface PostForm {
  question: string;
}

const Home: NextPage = () => {
  let user = useUser();
  let posts = usePost();

  const [post, { loading, data, error }] = useMutation("/api/posts");

  const { register, handleSubmit } = useForm<PostForm>();
  const onValid = (validForm: PostForm) => {
    post(validForm);
  };
  return (
    <div>
      <div className="text-white fixed left-20">
        <div className=" mb-4 mt-4">
          <span className="text-3xl cursor-pointer">🕊</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl cursor-pointer">🛖</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl cursor-pointer">🔍</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl cursor-pointer">🛎</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl cursor-pointer">💌</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl cursor-pointer">🏷</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl cursor-pointer">📋</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl cursor-pointer">👩‍🔧</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl cursor-pointer">．．</span>
        </div>
        <div className=" mb-4">
          <span className="text-3xl cursor-pointer">✚</span>
        </div>
      </div>
      <div style={{ height: "200vh" }} className="bg-black px-36">
        <form onSubmit={handleSubmit(onValid)}>
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
                  {...register("question")}
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
              <input
                type="submit"
                className="w-20 bg-blue-400 rounded-full text-center py-1 cursor-pointer"
                value="트윗하기"
              />
            </div>
          </div>
        </form>
        {posts?.posts.map((post) => (
          <Link key={post.id} href={`/tweet/${post.id}`}>
            <a className="">
              <div
                className="text-white p-4 flex justify-start align-middle relative"
                style={{ border: "1px solid rgb(55, 65, 81)" }}
                key={post.id}
              >
                <div>
                  <img
                    src="http://openimage.interpark.com/goods_image_big/6/4/9/1/7473206491_l.jpg"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <div className="px-4">
                  <div className="text-white">
                    <span>{post.user.name}</span>
                    <span className="text-gray-600 ml-2">
                      @{post.user.email}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {post.createdAt.split("T")[0]}
                    </span>
                  </div>
                  <div className="text-sm">{post.question}</div>
                  <div className="text-gray-600 flex justify-around -ml-6">
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
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
