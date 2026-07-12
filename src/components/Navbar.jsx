import { CalendarDays, LogOut, PlusCircle, Bookmark } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinkStyle = ({ isActive }) =>
    `transition duration-200 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2 text-white shadow-md">
            <CalendarDays size={22} />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-blue-600">
            Evently
          </h1>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">

          <li>
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/explore" className={navLinkStyle}>
              Explore
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
          </li>

         
        </ul>

        {/* Right Side */}
        {isAuthenticated ? (
          <div className="flex items-center gap-4">

            <div className="hidden text-right md:block">
              <p className="text-xs text-gray-500">Welcome back</p>
              <p className="font-semibold text-gray-800">
                {user?.name}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 font-medium text-white transition hover:bg-red-600"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>
        ) : (
          <div className="flex items-center gap-4">

            <p className="hidden text-sm text-gray-500 lg:block">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Sign In
            </Link>

          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;