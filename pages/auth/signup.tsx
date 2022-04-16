import axios from "axios";
import { getSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function redirectOnLogin() {
      const session = await getSession();
      if (session) window.location.replace("/");
    }
    redirectOnLogin();
  }, []);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    return axios
      .post("/api/auth/signup", {
        name,
        email,
        password,
      })
      .then(() => {
        alert("success");
        window.location.replace("/");
      })
      .catch((e) => {
        setIsSubmitting(false);
        const errorMessage = e.response?.data?.message;
        alert(errorMessage || e.message);
      });
  }

  return (
    <>
      <div className="flex flex-row h-screen m-auto max-w-7xl">
        <div className="w-1/2 m-auto">
          <h1 className="mb-6 text-3xl font-bold text-primary">Cal.com</h1>
          <h1 className="mb-6 text-6xl font-bold text-primary">
            You are one step away from simple scheduling
          </h1>
          <p className="text-gray-500">
            &quot;I love being able to use a tool that just works, and that is open source. As a developer, I
            love being empowered to contribute to a tool that I use regularly.&quot;
          </p>
          <div className="flex flex-row mt-6">
            <div className="w-1/6">
              <Image src="/images/user.png" width={50} height={50} alt="user-image" />
            </div>
            <div className="w-5/6">
              <b>
                Cassidy Williams{" "}
                <a href="#" className="text-blue-500">
                  @cassidoo
                </a>
              </b>
              <p className="text-gray-500">Director of Developer Experience at Netlify</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-w-lg px-16 py-10 m-auto bg-white border border-primaryBorder shadow-default">
          <h1 className="mt-1 text-2xl font-bold text-primary">Start 14 days free trial</h1>
          <p className="mb-3 text-sm text-gray-400">
            <b>No credit card required.</b> Try all pro features for 14 days.
            <br />
            Update at any time for $12/month.
          </p>
          <hr className="mb-7" />
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="name"
              required
              value={name}
              onInput={(e) => setName(e.currentTarget.value)}
              className="block border border-neutral-300 focus:ring-neutral-900"
            />
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
              SIGN UP
            </button>
          </form>
          <p className="mt-5 text-sm text-center ">
            Already have an account?
            <Link href="/auth/login">
              <a className="underline hover:text-black">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
