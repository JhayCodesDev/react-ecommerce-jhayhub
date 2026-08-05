import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../context/AuthContext";

export function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const result = signup({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);
    navigate("/login");
  }

  return (
    <section className="bg-page flex min-h-screen items-center justify-center px-4">
      <div className="bg-surface border-custom w-full max-w-md rounded-xl border p-8 shadow-lg">
        <h1 className="text-primary text-center text-3xl font-bold">
          Create Account
        </h1>

        <p className="text-secondary mt-2 text-center">
          Join us and start shopping today.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <Input
            label="Full Name"
            icon={<FaUser />}
            type="text"
            name="name"
            placeholder="Adams Smith"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            label="Email Address"
            icon={<FaEnvelope />}
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            {...(formData.password.length <= 20 &&
              formData.password.length >= 6 && {
                maxLength: 20,
                title: "Password must be between 6 and 20 characters long.",
              })}
          />

          <Input
            label="Confirm Password"
            icon={<FaLock />}
            rightIcon={
              showConfirmPassword ? (
                <FaEyeSlash onClick={() => setShowConfirmPassword(false)} />
              ) : (
                <FaEye onClick={() => setShowConfirmPassword(true)} />
              )
            }
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            {...(formData.confirmPassword.length <= 20 &&
              formData.confirmPassword.length >= 6 && {
                maxLength: 20,
                title: "Password must be between 6 and 20 characters long.",
              })}
          />

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>

        <p className="text-secondary mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-accent hover:text-accent-hover font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
