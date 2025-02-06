import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail, User, Stethoscope } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import docAnimation from "@/assets/doctor.mp4";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState<"user" | "doctor">("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const success = await login(email, password, role);
      if (success) {
        navigate(role === "user" ? "/dashboard" : "/doctor-dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] w-full flex items-center justify-between mt-8 ">
        <div className="w-[60%] hidden md:block">
          <video
            src={docAnimation}
            autoPlay
            loop
            muted
            className="w-full rounded-lg"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full md:w-[40%] max-w-md space-y-8 bg-[#fbfafc] p-8 rounded-xl shadow-xl ml-6"
        >
          <div>
            <div className="flex justify-center">
              <Stethoscope className="w-12 h-12 text-[#5863f8]" />
            </div>
            <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to your {role === "user" ? "patient" : "doctor"} account
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              type="button"
              variant={role === "user" ? "default" : "ghost"}
              onClick={() => setRole("user")}
              className="flex items-center space-x-2 "
            >
              <User className="w-4 h-4" />
              <span>Patient</span>
            </Button>
            <Button
              type="button"
              variant={role === "doctor" ? "default" : "ghost"}
              onClick={() => setRole("doctor")}
              className="flex items-center space-x-2"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Doctor</span>
            </Button>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm text-center"
              >
                {error}
              </motion.p>
            )}

            <div>
              <Button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#5863F8] hover:bg-[#4f59df] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>

          <div className="space-y-4">
            <div className="text-sm text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign up
                </Link>
              </p>
            </div>

            {/* <div className="text-sm text-center">
              <p className="text-gray-600">
                Demo Credentials:
                {role === "user" ? (
                  <span className="block mt-1">
                    Email: user@example.com
                    <br />
                    Password: password123
                  </span>
                ) : (
                  <span className="block mt-1">
                    Email: doctor@example.com
                    <br />
                    Password: password123
                  </span>
                )}
              </p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
