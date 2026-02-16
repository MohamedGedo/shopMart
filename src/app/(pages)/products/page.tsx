import { ProductsResponse } from "@/interfaces/productinterface";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

import Link from "next/link";
import AddToCart from "@/Components/AddToCart/AddToCart";
import { formatCurrency } from "@/Helpers/formatCurrency";

export default async function Products() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/products",
  );
  const data: ProductsResponse = await response.json();
  console.log("🧘 data:", data);
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
        {data.data.map((product) => (
          <div key={product._id} className="p-2">
            <Card className="overflow-hidden pt-0">
              <Link href={"/products/" + product.id}>
                <div className="-m-1 -mt-6">
                  <Image
                    src={product.imageCover}
                    alt={product.title}
                    width={200}
                    height={150}
                    className="z-20 w-full object-cover"
                  />
                </div>
                <CardHeader className="mt-2">
                  <CardDescription>{product.brand.name}</CardDescription>
                  <CardTitle className="line-clamp-1">
                    {product.title}
                  </CardTitle>
                  <CardDescription>{product.category.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <div className="flex">
                      <Star
                        className="text-amber-400 fill-amber-400"
                        fill="true"
                      />
                      <Star
                        className="text-amber-400 fill-amber-400"
                        fill="true"
                      />
                      <Star
                        className="text-amber-400 fill-amber-400"
                        fill="true"
                      />
                      <Star
                        className="text-amber-400 fill-amber-400"
                        fill="true"
                      />
                      <StarHalf
                        className="text-amber-400 fill-amber-400"
                        fill="true"
                      />
                    </div>
                    <p>{product.ratingsAverage}</p>
                  </div>
                  <p>{formatCurrency(product.price)}</p>
                </CardContent>
              </Link>
              <AddToCart productId={product.id} />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
