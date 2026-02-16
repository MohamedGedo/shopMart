"use client";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
    >
      Logout
    </DropdownMenuItem>
  );
}
