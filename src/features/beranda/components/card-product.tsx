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
    <Link href={`/beranda/sewa/${'Mercedes'}`}>
      <Card className="">
        <CardHeader>
          <Image
            src="/img/sample.jpg"
            alt="logo"
            width={1000}
            height={1000}
            className="object-cover aspect-square w-full rounded-xl"
          />
          <CardTitle>Mercedes Benz S-Class</CardTitle>
          <CardDescription>Sedan</CardDescription>
        </CardHeader>
        <CardFooter className="block md:flex gap-4 justify-between">
          <div className="flex gap-2 text-center justify-center">
            <p className="text-muted-foreground text-xs">5 org</p>
            <p className="text-muted-foreground text-xs">Manual</p>
          </div>
          <p className="bg-red-600 text-white text-sm font-semibold py-1 px-4 text-center rounded-full">
            Rp480rb
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardProduct;
