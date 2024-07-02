import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "user" && password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>Login Page</h1>
        {isSubmitted ? (
          <div>
            <p>Welcome,{userName}!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label>Username:</label>
            <input
              placeholder="Username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <label>Password:</label>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
