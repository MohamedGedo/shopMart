"use client";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Heart, Loader2, ShoppingCart } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { addToCartAction } from "@/actions/addToCart.action";
import { CartRes } from "@/interfaces/CartInterfaces";
import { useRouter } from "next/navigation";

export default function AddToCart({ productId }: { productId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  async function addProductToCart() {
    try {
      setIsLoading(true);
      const res: CartRes = await addToCartAction(productId);
      if (res == null) {
        router.push("/login");
      }
      if (res.status === "success") {
        toast.success(res.message + "");
        dispatchEvent(
          new CustomEvent("cartUpdate", { detail: res.numOfCartItems }),
        );
      }
    } catch (err) {
      toast.error(err + "");
      console.log("🐣 err:", err);
    }
    setIsLoading(false);
  }
  return (
    <>
      <CardFooter className="gap-2">
        <Button
          onClick={addProductToCart}
          disabled={isLoading}
          className="grow"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : <ShoppingCart />}
          Add To Cart
        </Button>
        <Heart />
      </CardFooter>
    </>
  );
}
