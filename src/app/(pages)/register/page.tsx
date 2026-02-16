import RegisterForm from "@/Components/RegisterForm/RegisterForm";

export default function register() {
  return (
    <div className="flex flex-col gap-10 mt-3 justify-center items-center h-full">
      <h2 className="text-2xl font-bold">Register now and Join US</h2>
      <RegisterForm />
    </div>
  );
}
