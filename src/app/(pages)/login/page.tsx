import LoginForm from "@/Components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-[60vh]">
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}
