import "./auth.css";
import { useState } from "react";

export default function Register() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="auth-page">
      <h2>Register</h2>

      {!success ? (
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
        </form>
      ) : (
        <p className="success">✅ Registration Completed Successfully</p>
      )}
    </div>
  );
}
