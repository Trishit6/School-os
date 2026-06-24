import RegisterForm from "./components/register-form";

export default function RegisterComponent() {
  return (
    <div className="min-h-screen bg-[#f6f7f9] flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-[650px] bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="text-center mb-8">
          <div className="h-14 w-14 rounded-full bg-[#0b8ca1] mx-auto flex items-center justify-center text-white text-2xl mb-4">
            🎓
          </div>
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-slate-500 text-sm mt-2">Register to access Skoolix</p>
        </div>

        <RegisterForm />

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#0b8ca1] font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
