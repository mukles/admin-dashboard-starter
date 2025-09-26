import { LoginForm } from "../components";

export function LoginPage() {
  return (
    <div className=" min-h-[100vh] flex-1 md:min-h-min flex items-center justify-center">
      <div className="max-w-md mx-auto flex-none bg-muted/50 w-full p-6 rounded-xl">
        <LoginForm />
      </div>
    </div>
  );
}
