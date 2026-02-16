import LoginForm from "@/Components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-[60vh]">
      <h2>Login</h2>
      <LoginForm />
      <p>
        If you don't have account, please{" "}
        <a className="text-blue-600 underline" href="/register">
          SignUp
        </a>{" "}
        Now
      </p>
    </div>
  );
}
