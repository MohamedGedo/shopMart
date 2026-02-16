import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import Image from "next/image";
import { Params } from "next/dist/server/request/params";
import { Brand } from "@/interfaces/BrandInterface";

export default async function BrandDetails({ params }: { params: Params }) {
  const { brandId } = await params;

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands/${brandId}`,
  );

  const { data: brand }: { data: Brand } = await response.json();
  console.log("🇹🇦 brand:", brand);

  return (
    <>
      <Card className="grid grid-cols-1 md:grid-cols-3 items-center">
        <div>
          <Image
            src={brand.image}
            alt={brand.name}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 space-y-5 p-4">
          <CardHeader className="mt-2">
            <CardDescription>{brand.createdAt}</CardDescription>
            <CardTitle>{brand.name}</CardTitle>
          </CardHeader>
        </div>
      </Card>
    </>
  );
}
