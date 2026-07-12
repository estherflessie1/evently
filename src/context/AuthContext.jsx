import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load current user when the app starts
  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("eventlyCurrentUser")
    );

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  // Sign Up
  const signup = (newUser) => {
    const users =
      JSON.parse(localStorage.getItem("eventlyUsers")) || [];

    const userExists = users.some(
      (user) => user.email === newUser.email
    );

    if (userExists) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    users.push(newUser);

    localStorage.setItem(
      "eventlyUsers",
      JSON.stringify(users)
    );

    // Automatically log the user in
    localStorage.setItem(
      "eventlyCurrentUser",
      JSON.stringify(newUser)
    );

    setUser(newUser);

    return {
      success: true,
      message: "Account created successfully.",
    };
  };

  // Login
  const login = (email, password) => {
    const users =
      JSON.parse(localStorage.getItem("eventlyUsers")) || [];

    const foundUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    localStorage.setItem(
      "eventlyCurrentUser",
      JSON.stringify(foundUser)
    );

    setUser(foundUser);

    return {
      success: true,
      message: "Login successful.",
    };
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("eventlyCurrentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;