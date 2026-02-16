import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/Components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import Logout from "../Logout/Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import CartIcon from "../CartIcon/CartIcon";
import { CartRes } from "@/interfaces/CartInterfaces";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log("nav session:", session);
  let data: CartRes | null = null;
  if (session) {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: {
          token: session?.token as string,
        },
      },
    );
    data = await response.json();
  }
  return (
    <>
      <nav className="bg-gray-50/80 shadow py-4 sticky top-0 inset-x-0 z-50">
        <div className="container mx-auto ps-4 md:ps-0 flex flex-col md:flex-row items-start md:items-center justify-between font-semibold gap-2">
          <h2 className="text-3xl ">
            <Link
              href={"/"}
              className="flex items-center justify-center font-bold"
            >
              <div className="w-12 h-12 bg-black flex items-center justify-center mr-1 rounded-2xl">
                <span className="text-white font-bold text-3xl">S</span>
              </div>
              ShopMart
            </Link>
          </h2>

          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/products">Products</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/brands">Brands</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/categories">Categories</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <UserIcon className="size-6 cursor-pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      {session ? (
                        <>
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <Link href={"/profile"}>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                          </Link>
                          <Link href={"/allorders"}>
                            <DropdownMenuItem>MyOrders</DropdownMenuItem>
                          </Link>
                          <Logout />
                        </>
                      ) : (
                        <>
                          <Link href={"/login"}>
                            <DropdownMenuItem>Login</DropdownMenuItem>
                          </Link>
                          <Link href={"/register"}>
                            <DropdownMenuItem>Register</DropdownMenuItem>
                          </Link>
                        </>
                      )}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                {session && data && (
                  <CartIcon
                    serverCartNum={data?.numOfCartItems}
                    cartId={data?.data.cartOwner}
                  />
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
