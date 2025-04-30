import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to the App</h1>
      <div className="flex flex-col gap-4">
        <Link
          to="/signup"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-600"
        >
          Signup
        </Link>
        <Link
          to="/signin"
          className="bg-green-500 text-white px-6 py-2 rounded-lg text-center hover:bg-green-600"
        >
          Login
        </Link>
        <Link
          to="/dashboard"
          className="bg-purple-500 text-white px-6 py-2 rounded-lg text-center hover:bg-purple-600"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}