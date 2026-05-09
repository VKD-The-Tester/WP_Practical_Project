"use client";

import { useFormStatus } from "react-dom";

const LoginForm = () => {
  return (
    <form>
      <div>
        <input
          type="email"
          name="email"
          id="loginEmail"
          placeholder="user@example.com"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="loginPassword"
          placeholder="secretPassword"
        />
      </div>
      <div>
        <LoginButton />
      </div>
    </form>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      Login
    </button>
  );
};

export default LoginForm;
