import Link from "next/link";
import { cookies } from "next/headers";
import { decrypt } from "@/app/utils/session";
import { logout } from "@/app/auth/login/actions";

const NavBar = async () => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;
  const session = await decrypt(sessionCookie);

  return (
    <nav className="bg-white shadow-md font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center ">
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Event Manager
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {session ? (
              <>
                <Link
                  href="/events"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Search Events
                </Link>
                <Link
                  href="/events/create"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Create Event{" "}
                </Link>
                <form action={logout}>
                  <button
                    type="submit"
                    className="cursor-pointer text-red-600 hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </form>
              </>
            ) : (
              <>
                {" "}
                <Link
                  href="/auth/login"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
