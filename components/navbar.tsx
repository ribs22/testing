import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  const signOutHandler = () => {
    if (confirm("are you sure to log out ?")) {
      signOut();
    }
  };
  return (
    <nav>
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <div className="bg-zinc-900 text-white inline-block px-5 py-1 rounded-lg">
            <h1 className="text-2xl font-bold">Post-it</h1>
          </div>
        </Link>
        {session && (
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => signOutHandler()}
              className="bg-red-600 text-white py-1 px-4 rounded text-sm font-bold"
            >
              Sign Out
            </button>
            <img
              src={session?.user?.image as string}
              alt="user avatar"
              className="w-10 h-10 rounded-full bg-zinc-400"
            />
          </div>
        )}
      </div>
    </nav>
  );
}
