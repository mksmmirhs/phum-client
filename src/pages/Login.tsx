import { useForm } from "react-hook-form";
import { Button } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";

function Login() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: { id: "0001", password: "admin12345" },
  });

  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data) => {
    const res = await login(data).unwrap();
    console.log(res);
    dispatch(setUser({ user: {}, token: res.data.accessToken }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
}

export default Login;
