import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start rounded-lg shadow-md">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-2xl mb-6 font-semibold leading-10 tracking-tight text-blue-900 dark:text-zinc-50">
            Event Manager App
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Welcome to the event manager app! To get started, please head on
            over to the{" "}
            <Link
              href="/auth/register"
              className="cursor-pointer font-medium text-blue-600 transition hover:text-blue-700"
            >
              Register
            </Link>{" "}
            page if you do not have an existing account or the{" "}
            <a
              href="/auth/login"
              className="font-medium text-blue-600 transition hover:text-blue-700"
            >
              Login
            </a>{" "}
            page if you already do have an account.
          </p>
        </div>
      </main>
    </div>
  );
}
