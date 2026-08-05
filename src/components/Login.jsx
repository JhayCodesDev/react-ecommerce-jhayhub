import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../context/AuthContext";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const result = login({
      email,
      password,
    });

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);

    navigate("/");
  }

  return (
    <section className="bg-page flex min-h-screen items-center justify-center px-4">
      <div className="bg-surface border-custom w-full max-w-md rounded-xl border p-8 shadow-lg">
        <h1 className="text-primary text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="text-secondary mt-2 text-center">
          Login to continue shopping.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <Input
            label="Email Address"
            icon={<FaEnvelope />}
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            icon={<FaLock />}
            rightIcon={
              showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(false)} />
              ) : (
                <FaEye onClick={() => setShowPassword(true)} />
              )
            }
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            {...(password.length <= 20 &&
              password.length >= 6 && {
                maxLength: 20,
                title: "Password must be between 6 and 20 characters long.",
              })}
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <p className="text-secondary mt-6 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-accent hover:text-accent-hover font-semibold"
          >
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
}
