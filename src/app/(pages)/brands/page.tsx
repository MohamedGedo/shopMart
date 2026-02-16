import { BrandResponse } from "@/interfaces/BrandInterface";
import { Card, CardHeader, CardTitle } from "@/Components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function Brands() {
  const response = await fetch("https://ecommerce.routemisr.com/api/v1/brands");
  const data: BrandResponse = await response.json();
  console.log("🇨🇫 data:", data);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.data.map((brand) => (
          <div key={brand._id} className="h-full">
            <Card className="overflow-hidden h-full flex flex-col">
              <Link
                href={"/brands/" + brand._id}
                className="flex flex-col h-full"
              >
                {/* Image */}
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <CardHeader className="grow mt-3">
                  <CardTitle className="line-clamp-1 text-center font-bold text-2xl">
                    {brand.name}
                  </CardTitle>
                </CardHeader>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
