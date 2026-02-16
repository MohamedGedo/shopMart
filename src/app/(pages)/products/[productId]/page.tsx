import AddToCart from "@/Components/AddToCart/AddToCart";
import Slider from "@/Components/Slider/Slider";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { formatCurrency } from "@/Helpers/formatCurrency";
import { Product } from "@/interfaces/productinterface";
import { Star, StarHalf } from "lucide-react";
import { Params } from "next/dist/server/request/params";

export default async function ProductDetails({ params }: { params: Params }) {
  const { productId } = await params;

  const response = await fetch(`${process.env.API_URL}/products/` + productId);

  const { data: product }: { data: Product } = await response.json();

  return (
    <>
      <Card className="grid grid-cols-1 md:grid-cols-3 items-center">
        <div>
          <Slider images={product.images} title={product.title} />
        </div>
        <div className="col-span-2 space-y-5 p-4">
          <CardHeader className="mt-2">
            <CardDescription>{product.brand.name}</CardDescription>
            <CardTitle>{product.title}</CardTitle>
            <CardAction>{product.category.name}</CardAction>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <div className="flex">
                <Star className="text-amber-400 fill-amber-400" fill="true" />
                <Star className="text-amber-400 fill-amber-400" fill="true" />
                <Star className="text-amber-400 fill-amber-400" fill="true" />
                <Star className="text-amber-400 fill-amber-400" fill="true" />
                <StarHalf
                  className="text-amber-400 fill-amber-400"
                  fill="true"
                />
              </div>
              <p>{product.ratingsAverage}</p>
            </div>
            <p>{formatCurrency(product.price)} </p>
          </CardContent>

          <AddToCart productId={product.id} />
        </div>
      </Card>
    </>
  );
}
