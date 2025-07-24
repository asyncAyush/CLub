import { Music } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../routes/AuthContext'

const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch('password', ''); // Watch the password field for confirmation validation
  const navigate = useNavigate()
  const { login } = useAuth()
  const onSubmit = (data) => {
  // Mock user data - in real app, fetch this from an API
  const userData = {
    email: data.email,
    name: 'Demo User',
    token: 'fake-jwt-token', // if applicable
  };

  login(userData); // This saves user in context and localStorage
  navigate('/'); // Redirect after login
};
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col lg:flex-row">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Nightclub atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center p-12 w-full">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 mb-8">
            <Music className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-10">
            Welcome to
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              NightLife
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-md">
            Discover the hottest clubs, book VIP experiences, and create unforgettable nights in the city's best venues.
          </p>
          <div className="grid gap-4 text-gray-300">
            {[
              ['Exclusive club access', 'bg-purple-400'],
              ['VIP table reservations', 'bg-pink-400'],
              ['Premium nightlife experiences', 'bg-purple-400'],
            ].map(([text, color], i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className={`w-2 h-2 ${color} rounded-full`} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-start justify-center p-20">
        <div className="w-full max-w-md text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Welcome Back</h2>
          <p className="text-gray-400 mb-12">Sign in to your account to continue the night</p>
          {/* Signup form goes here */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Email"
                className="w-full px-10 py-5 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Minimum 6 characters required' },
                })}
                placeholder="Password"
                className="w-full px-10 py-5 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold hover:opacity-90"
            >
              Sign-in
            </button>
            <p className="mt-3 text-white">
                Don't have an account? {" "}
                <Link className="text-blue-400" to="/signup">
                    Signup
                </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;