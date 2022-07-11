import React from "react";

export default () => (
  <div>
    <div className="flex justify-center items-center" style={{ height: "10" }}>
      <img
        className="w-6 mt-2 text-center"
        src="https://upload.wikimedia.org/wikipedia/ko/thumb/9/9e/%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg/1200px-%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg.png"
      ></img>
    </div>
    <div
      className="text-4xl px-14 font-bold flex justify-center items-center"
      style={{ height: "90vh" }}
    >
      <div>
        <span>지금 세계에서 무슨 일이 일어나고 있는지 알아보세요.</span>
        <div className="text-center">
          <button className="bg-blue-400 text-white px-28 py-3 text-xs rounded-3xl mt-12">
            계정 생성하기
          </button>
        </div>
      </div>
    </div>
  </div>
);
