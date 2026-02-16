import { CategoryResponse } from "@/interfaces/CategoryInterface";
import { Card, CardHeader, CardTitle } from "@/Components/ui/card";
import Image from "next/image";

import Link from "next/link";
export default async function Categories() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/categories",
  );
  const data: CategoryResponse = await response.json();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.data.map((category) => (
          <div key={category._id} className="h-full">
            <Card className="overflow-hidden h-full flex flex-col">
              <Link
                href={"/categories/" + category._id}
                className="flex flex-col h-full"
              >
                {/* Image */}
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <CardHeader className="grow mt-3">
                  <CardTitle className="line-clamp-1 text-center font-bold text-2xl">
                    {category.name}
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
