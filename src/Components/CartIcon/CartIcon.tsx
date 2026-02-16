"use client";

import { NavigationMenuItem } from "../ui/navigation-menu";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

export default function CartIcon({
  serverCartNum,
  cartId,
}: {
  serverCartNum: number;
  cartId: string;
}) {
  const [cartNum, setCartNum] = useState(serverCartNum);
  useEffect(() => {
    if (cartId) {
      localStorage.setItem("cartId", cartId);
    }
  }, [cartId]);
  useEffect(() => {
    function handler(e: CustomEvent) {
      setCartNum(e.detail);
    }

    addEventListener("cartUpdate", handler as EventListener);
  }, []);
  return (
    <>
      <NavigationMenuItem>
        <Link href="/cart" className="relative cursor-pointer">
          <ShoppingCart className="size-6  text-inherit" />
          <span className="absolute -top-2 start-5/6 text-xs size-4 bg-accent-foreground text-accent flex justify-center items-center rounded-full">
            {cartNum}
          </span>
        </Link>
      </NavigationMenuItem>
    </>
  );
}
