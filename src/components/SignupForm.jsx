import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  MapPin,
  User,
} from "lucide-react";
import useAuth from "../hooks/useAuth";

function SignupForm() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      return setError("Please fill in all required fields.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }

    if (!formData.agree) {
      return setError("Please accept the Terms and Privacy Policy.");
    }

    const result = signup({
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      city: formData.city,
    });

    if (!result.success) {
      return setError(result.message);
    }

    navigate("/login");
  };

  return (
    <section className="flex items-center justify-center bg-slate-50 px-6 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

        <h2 className="text-4xl font-bold text-slate-900">
          Create Account
        </h2>

        <p className="mt-2 text-slate-500">
          Join Evently and start discovering amazing events.
        </p>

        {error && (
          <div className="mt-6 rounded-xl bg-red-100 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <Input
            icon={<User size={18} />}
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            icon={<Mail size={18} />}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <PasswordInput
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            show={showPassword}
            toggle={() => setShowPassword(!showPassword)}
          />

          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            show={showConfirm}
            toggle={() => setShowConfirm(!showConfirm)}
          />

          <Input
            icon={<MapPin size={18} />}
            type="text"
            name="city"
            placeholder="City (Optional)"
            value={formData.city}
            onChange={handleChange}
          />

          <label className="flex gap-3 text-sm text-slate-600">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1 accent-blue-600"
            />

            <span>
              I agree to the{" "}
              <span className="font-semibold text-blue-600">
                Terms
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600">
                Privacy Policy
              </span>
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-slate-200"></div>

          <span className="mx-4 text-sm text-slate-400">
            or continue with
          </span>

          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <SocialButton text="Google" />
          <SocialButton text="Facebook" />
          <SocialButton text="Apple" />
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>
    </section>
  );
}

function Input({
  icon,
  type,
  name,
  value,
  placeholder,
  onChange,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 py-3 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
      <div className="text-slate-400">{icon}</div>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
}

function PasswordInput({
  name,
  value,
  placeholder,
  onChange,
  show,
  toggle,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 py-3 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">

      <Lock size={18} className="text-slate-400" />

      <input
        type={show ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none"
      />

      <button type="button" onClick={toggle}>
        {show ? (
          <EyeOff size={18} className="text-slate-400" />
        ) : (
          <Eye size={18} className="text-slate-400" />
        )}
      </button>

    </div>
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

export default SignupForm;