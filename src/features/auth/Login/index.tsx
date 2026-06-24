import LoginForm from './components/login-form'

export default function LoginComponent() {
  console.log('2')
  return (
    <div className="min-h-screen bg-[#f6f7f9] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="text-center mb-8">
          <div className="h-14 w-14 rounded-full bg-cyan-600 mx-auto flex items-center justify-center text-white text-2xl mb-4">
            🎓
          </div>

          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="text-slate-500 mt-2">Login to continue to Skoolix</p>
        </div>

        <LoginForm />
      </div>
    </div>
  )
}
