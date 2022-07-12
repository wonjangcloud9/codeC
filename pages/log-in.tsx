import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import useMutation from "../lib/client/useMutation";

interface LoginForm {
  email: string;
}

const Login: NextPage = () => {
  const [login, { loading, data, error }] = useMutation("/api/users/login");
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (validForm: LoginForm) => {
    login(validForm);
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="bg-black flex flex-col justify-center"
    >
      <div className="px-16">
        {loading ? <div>{data}</div> : ""}
        <form onSubmit={handleSubmit(onValid)}>
          <div className="text-white text-3xl">트위터에 로그인하기</div>
          <div>
            <input
              {...register("email")}
              type="email"
              required
              placeholder="이메일주소"
              className="border-2 border-gray-600 px-1 py-4 w-full mt-8 bg-black placeholder-gray-600 text-white focus:placeholder-blue-400 focus:position-absolute focus:z-10"
            />
          </div>
          <input
            type="submit"
            value="로그인"
            className="text-white bg-blue-400 w-full rounded-xl py-2 mt-8"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
