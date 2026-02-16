import { authOptions } from "@/auth";
import Cart from "@/Components/Cart/Cart";
import { CartRes } from "@/interfaces/CartInterfaces";
import { getServerSession } from "next-auth/next";

export default async function CartPage() {
  const session = await getServerSession(authOptions);
  const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
    headers: {
      token: session?.token as string,
    },
  });
  // const data: CartRes = await response.json();
  const data: CartRes | null = await response.json();
  return (
    <>
      {/* <Cart cartData={data.numOfCartItems == 0 ? null : data} /> */}
      <Cart cartData={data} />
      {/* <Cart cartData={data.data ? data : null} /> */}
    </>
  );
}
