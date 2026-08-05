import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  function signup(userData) {
    const existingUser = users.find((user) => user.email === userData.email);

    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    setUsers([...users, userData]);

    return {
      success: true,
      message: "Account created successfully!",
    };
  }

  function login(loginData) {
    const user = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    if (!user) {
      return {
        success: false,
        message: "Incorrect email or password.",
      };
    }

    setCurrentUser(user);

    return {
      success: true,
      message: `Welcome back, ${user.name}!`,
    };
  }

  function logout() {
    setCurrentUser(null);

    return {
      success: true,
      message: "Logged out successfully.",
    };
  }

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        logout,
        currentUser,
        isAuthenticated: !!currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
