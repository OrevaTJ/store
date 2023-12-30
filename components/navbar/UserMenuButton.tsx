// For NextAuth

"use client";

import { Session } from "next-auth";
import Image from "next/image";
import profilePicPlaceholder from "@/assets/profile-pic-placeholder.png"
import { signIn, signOut } from "next-auth/react";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;
  
  return (
    <div className="dropdown-bottom dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        {
            user ? (
                <Image
                    src={user?.image || profilePicPlaceholder}
                    alt="Profile Picture"
                    width={40}
                    height={40}
                    className="w-10 rounded-full"
                />
            ) : (
                <Image
                    src={profilePicPlaceholder}
                    alt="Profile Picture"
                    width={40}
                    height={40}
                    className="w-10 rounded-full"
                />
            )
        }
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box z-[1] mt-3 w-32 bg-base-100 p-2 shadow"
      >
        <li>
          {
            user ? (
                <button onClick={() => signOut({callbackUrl: "/"})}>Sign Out</button>
            ) : (
                <button onClick={() => signIn("google")}>Sign In</button>
            )
            }
        </li>
      </ul>
    </div>
  );
}
