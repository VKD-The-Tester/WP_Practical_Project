"use client";

import { useFormStatus } from "react-dom";

const RegisterForm = () => {
  return (
    <form>
      <div>
        <input type="text" name="name" id="registerName" placeholder="Name" />
      </div>

      <div>
        <input
          type="email"
          name="email"
          id="registerEmail"
          placeholder="user@example.com"
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          id="registerPassword"
          placeholder="secretPassword"
        />
      </div>

      <div>
        <RegisterButton />
      </div>
    </form>
  );
};

const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      Register
    </button>
  );
};

export default RegisterForm;
