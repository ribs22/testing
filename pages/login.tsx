import Head from "next/head";
import { getSession, signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Post-it</title>
      </Head>
      <main className="py-28">
        <div className="text-center">
          <h1 className="font-bold text-3xl">
            Oooppss! You have to login first!
          </h1>
          <button
            onClick={() => signIn()}
            className="mt-4 bg-zinc-800 text-white py-2 px-6 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
