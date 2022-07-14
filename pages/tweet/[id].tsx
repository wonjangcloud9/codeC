import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import useMutation from "../../lib/client/useMutation";
import { useRouter } from "next/router";
import useSWR from "swr";

const Tweet: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );
  const [like, { loading }] = useMutation(`/api/posts/${router.query.id}/like`);
  const onWonderClick = () => {
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            like: data.isLike
              ? data?.post._count.like - 1
              : data?.post._count.like + 1,
          },
        },
        isLike: !data.isLike,
      },
      false
    );
    if (!loading) {
      like({});
    }
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
      <div
        style={{ height: "200vh" }}
        className="bg-black px-36 text-white py-4"
      >
        <div className="flex justify-start">
          <div>
            <Link href={"/"}>
              <a className="text-xl mt-12">←</a>
            </Link>
          </div>
          <div className="ml-12 text-xl font-bold">트윗</div>
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <div>
              <img
                src="http://openimage.interpark.com/goods_image_big/6/4/9/1/7473206491_l.jpg"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="ml-4">
              <div>{data?.post?.user.name}</div>
              <div>
                <span className="text-gray-600">@{data?.post?.user.email}</span>
              </div>
            </div>
          </div>
          <div className="mt-5">{data?.post?.question}</div>
          <div>
            <span className="text-gray-600">
              {data?.post?.createdAt.split("T")[0]}
            </span>
            <span className="ml-5 text-gray-600">
              좋아요 :{" "}
              {data?.isLike ? (
                <span className="text-blue-600">
                  {data?.post?._count?.like}
                </span>
              ) : (
                "0"
              )}
            </span>
            <button
              className="btn absolute left-96 bg-blue-600 px-2 rounded-2xl cursor-pointer"
              onClick={onWonderClick}
            >
              좋아요
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
