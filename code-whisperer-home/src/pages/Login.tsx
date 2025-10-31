import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";



// 👇 Type for form fields
interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // Normal Login submit
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Login Data:", data);
    // 👉 API call yahan karega (backend login endpoint)
  };

  // Google Auth Handler
  const handleGoogleLogin = () => {
    console.log("Google Auth clicked!");
    // 👉 Yahan tu OAuth2.0 / Firebase / NextAuth etc. ka logic add karega
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b] text-white px-4">
      <Card className="w-full max-w-md bg-[#0f172a]/70 backdrop-blur-xl border border-slate-700/60 shadow-[0_0_30px_rgba(0,255,255,0.15)] rounded-2xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Welcome Back
          </CardTitle>
          <p className="text-gray-400 text-sm">Sign in to continue</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="text-sm font-medium text-gray-300">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="mt-2 bg-slate-900/70 border-slate-700 text-white"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="text-sm font-medium text-gray-300">
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                className="mt-2 bg-slate-900/70 border-slate-700 text-white"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition-all text-white font-semibold py-2 rounded-lg"
            >
              Sign In
            </Button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-[1px] bg-slate-700" />
              <span className="px-3 text-gray-400 text-sm">or</span>
              <div className="flex-1 h-[1px] bg-slate-700" />
            </div>

            {/* Google Sign-In */}
            <Button
              type="button"
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white font-medium flex items-center justify-center gap-2"
            >
              <i className="ri-google-fill"></i>  Sign in with Google
            </Button>

            {/* Register Redirect */}
            <p className="text-center text-gray-400 text-sm mt-4">
              Don’t have an account?{" "}
              <Link
                to="/auth/register"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
