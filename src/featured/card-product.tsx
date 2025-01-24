"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const CardProduct = () => {
  return (
    <Link href={"/detail"}>
      <Card className="mt-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="object-cover p-2"
        />
        <CardHeader>
          <CardTitle>Mercedes Benz S-Class</CardTitle>
          <CardDescription>Sedan</CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-4">
          <p className="text-muted-foreground text-sm">5 org</p>
          <p className="text-muted-foreground text-sm">Manual</p>
          <p className="bg-red-600 text-white text-sm font-semibold py-1 px-4 rounded-full">
            Rp480rb
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardProduct;
