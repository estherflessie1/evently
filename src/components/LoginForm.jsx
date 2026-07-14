import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      return setError("Please enter your email and password.");
    }

    const result = login(formData.email, formData.password);

    if (!result.success) {
      return setError(result.message);
    }

    navigate("/");
  };

  return (
    <section className="flex items-center justify-center bg-slate-50 px-6 py-8">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

        {/* Heading */}

        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            Welcome Back
          </h2>

          <p className="mt-2 text-slate-500">
            Sign in to continue discovering amazing events.
          </p>
        </div>

        {error && (
          <div className="mt-6 rounded-xl bg-red-100 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* Email */}

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">

              <Mail size={18} className="text-slate-400" />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="ml-3 w-full bg-transparent outline-none"
              />

            </div>
          </div>

          {/* Password */}

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">

              <Lock size={18} className="text-slate-400" />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="ml-3 w-full bg-transparent outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff
                    size={18}
                    className="text-slate-400 hover:text-blue-600"
                  />
                ) : (
                  <Eye
                    size={18}
                    className="text-slate-400 hover:text-blue-600"
                  />
                )}
              </button>

            </div>

            <div className="mt-3 text-right">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

          </div>

          {/* Sign In Button */}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Sign In
            <ArrowRight size={18} />
          </button>

        </form>

        {/* Divider */}

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-slate-200"></div>

          <span className="mx-4 text-sm text-slate-400">
            or continue with
          </span>

          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        {/* Social Buttons */}

        <div className="grid grid-cols-3 gap-4">

          <SocialButton text="Google" />

          <SocialButton text="Facebook" />

          <SocialButton text="Apple" />

        </div>

        {/* Sign Up */}

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create one
          </Link>
        </p>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-center gap-2 border-t border-slate-100 pt-6 text-sm text-slate-500">
          <ShieldCheck size={18} />
          <span>Your data is safe and secure with us.</span>
        </div>

      </div>
    </section>
  );
}

function SocialButton({ text }) {
  return (
    <button
      type="button"
      className="rounded-xl border border-slate-300 py-3 font-medium transition hover:border-blue-600 hover:bg-blue-50"
    >
      {text}
    </button>
  );
}

export default LoginForm;