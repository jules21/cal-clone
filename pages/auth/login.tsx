import { GetServerSidePropsContext } from "next";
import { getCsrfToken, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { getSession } from "@helpers/auth";

interface ServerSideProps {
  csrfToken: string;
}

export default function Login({ csrfToken }: ServerSideProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const callbackUrl = typeof router.query?.callbackUrl === "string" ? router.query.callbackUrl : "/private";

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const response = await signIn<"credentials">("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl,
    });
    if (!response) {
      throw new Error("Received empty response from next auth");
    }

    if (!response.error) {
      // we're logged in! let's do a hard refresh to the desired url
      window.location.replace(callbackUrl);
      return;
    }
  }

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="w-full max-w-md m-auto">
          <h1 className="mb-6 text-3xl font-bold text-center text-primary">Cal.com</h1>
          <h1 className="mb-6 text-3xl font-bold text-center text-primary">Signin to your account</h1>
          <div className="w-full max-w-md px-16 py-10 m-auto bg-white border border-primaryBorder shadow-default">
            <form onSubmit={handleSubmit}>
              <input name="csrfToken" type="hidden" defaultValue={csrfToken || undefined} hidden />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                required
                value={email}
                onInput={(e) => setEmail(e.currentTarget.value)}
                className="block border border-neutral-300 focus:ring-neutral-900"
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                autoComplete="current-password"
                required
                value={password}
                onInput={(e) => setPassword(e.currentTarget.value)}
                className="block border border-neutral-300 focus:ring-neutral-900"
              />

              <button type="submit" disabled={isSubmitting} className="p-1 text-white bg-blue-800">
                SIGN IN
              </button>
            </form>
          </div>

          <p className="mt-6 text-sm text-center ">
            Doesnt have an account?
            <Link href="/auth/signup">
              <a className="font-bold underline hover:text-black">create an account</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
