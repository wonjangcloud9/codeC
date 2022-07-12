import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import useMutation from "../lib/client/useMutation";

interface EnterForm {
  name: string;
  email: string;
}

const CreateAccount: NextPage = () => {
  const [enter, { loading, data, error }] = useMutation("/api/users/enter");
  const { register, handleSubmit } = useForm<EnterForm>();
  const onValid = (validForm: EnterForm) => {
    alert("Account created! Please log in!");
    enter(validForm);
    window.location.href = "/log-in";
  };
  console.log(loading, data, error);
  return (
    <div
      style={{ height: "100vh" }}
      className="bg-black flex flex-col justify-center"
    >
      <div className="px-16">
        <form onSubmit={handleSubmit(onValid)}>
          <div className="text-white text-4xl">계정을 생성하세요</div>
          <div className="position-relative">
            <input
              {...register("name")}
              type="text"
              required
              placeholder="이름"
              className="border-2 border-gray-600 px-1 py-4 w-full mt-8 bg-black placeholder-gray-600 text-white focus:placeholder-blue-400 focus:position-absolute focus:z-10"
            />
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              required
              placeholder="이메일"
              className="border-2 border-gray-600 px-1 py-4 w-full mt-8 bg-black placeholder-gray-600 text-white focus:placeholder-blue-400 focus:position-absolute focus:z-10"
            />
          </div>
          <input
            type="submit"
            value="가입"
            className="text-white bg-blue-400 w-full rounded-xl py-2 mt-8"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
