"use server";

import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { ShippingAddress } from "./../interfaces/CartInterfaces";

export async function addToCartAction(productId: string) {
  const session = await getServerSession(authOptions);
  if (session) {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        method: "POST",
        body: JSON.stringify({ productId }),
        headers: {
          token: session?.token as string,
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();

    return data;
  } else {
    return null;
  }
}
export async function checkOutAction(
  cartId: string,
  shippingAddress: ShippingAddress,
) {
  const session = await getServerSession(authOptions);
  if (session) {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
      {
        method: "POST",
        body: JSON.stringify({ shippingAddress }),
        headers: {
          token: session?.token as string,
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();

    return data;
  } else {
    return null;
  }
}
