import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard onLogout= {() => {
          setIsLoggedIn(false);
          setShowLogin(true);
        }} />
      ) : showLogin ? (
        <Login
          onRegisterClick={() => setShowLogin(false)}
          onLogin={() => setIsLoggedIn(true)}
        />
      ) : (
        <Register
          onLoginClick={() => setShowLogin(true)}
        />
      )}
    </div>
  );
}

export default App;