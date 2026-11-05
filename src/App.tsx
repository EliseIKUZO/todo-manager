import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <Login onRegisterClick={() => setShowLogin(false)} />
      ) : (
        <Register onLoginClick={() => setShowLogin(true)} />
      )}
    </>
  );
}

export default App;