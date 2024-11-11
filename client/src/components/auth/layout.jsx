import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-green-700 via-teal-600 to-green-500">
      {/* Left Side: Logo and Welcome Message */}
      <div className="hidden lg:flex items-center justify-center w-1/2 relative px-12 overflow-hidden">
        {/* Background Decorative Shapes */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-300 opacity-20 rounded-full"></div>
        <div className="absolute top-32 right-0 w-72 h-72 bg-green-400 opacity-30 rounded-full"></div>

        <div className="max-w-md space-y-6 text-center z-50">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/logo.png"
              alt="Jokaela Jewels Logo"
              className="w-44 h-29 mx-auto"
            />
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight font-dancing-script text-white">
            Jokaela Jewels
          </h1>
          <p className="text-lg font-medium text-teal-100 drop-shadow text-white">
            Discover timeless elegance and precious designs crafted just for you.
          </p>
        </div>
      </div>

      {/* Right Side: Authentication Form */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        {/* Form Content */}
        <div className="w-full max-w-md space-y-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
