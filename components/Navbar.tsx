"use client"

import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "./ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export function Navbar() {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex item-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog<span className="text-blue-500">Nest</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="hover:text-blue-500 text-sm font-medium transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-blue-500 text-sm font-medium transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}
