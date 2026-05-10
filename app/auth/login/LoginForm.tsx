"use client";

import { useFormStatus } from "react-dom";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2x1">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
          <p className="text-gray-600">
            Login to access your currently active events.
          </p>
        </div>
        <div>
          <form className="space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="loginEmail"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="loginEmail"
                placeholder="user@example.com"
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="loginPassword"
                className="mb-2 text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="loginPassword"
                placeholder="**************"
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="pt-2">
              <LoginButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="cursor-pointer w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
    >
      Login
    </button>
  );
};

export default LoginForm;
