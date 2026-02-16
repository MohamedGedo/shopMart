import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import Image from "next/image";
import { Params } from "next/dist/server/request/params";
import { Category } from "@/interfaces/CategoryInterface";

export default async function CategoryDetails({ params }: { params: Params }) {
  const { categoryId } = await params;

  const response = await fetch(
    `${process.env.API_URL}/categories/${categoryId}`,
  );

  const { data: category }: { data: Category } = await response.json();
  console.log("🇹🇦 category:", category);

  return (
    <>
      <Card className="grid grid-cols-1 md:grid-cols-3 items-center">
        <div>
          <Image
            src={category.image}
            alt={category.name}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 space-y-5 p-4">
          <CardHeader className="mt-2">
            <CardDescription>{category.createdAt}</CardDescription>
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>
        </div>
      </Card>
    </>
  );
}
