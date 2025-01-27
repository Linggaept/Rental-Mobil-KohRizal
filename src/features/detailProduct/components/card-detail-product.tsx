import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";


const CardDetailProduct = () => {
  return (
    <Card className="w-2/3">
      <CardHeader>
        <Image
          src="/img/sample.jpg"
          alt="logo"
          width={1000}
          height={1000}
          className="object-cover aspect-video w-full rounded-lg mb-2"
        />
        <CardTitle className="font-bold text-4xl">Mercedes Benz S-Class</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-y-2 gap-x-4">
        <div className="flex border-b items-center justify-between">
            <p className="text-primary text-sm ">Tipe</p>
            <p className="text-muted-foreground text-sm ">Sedan</p>
        </div>
        <div className="flex border-b items-center justify-between">
            <p className="text-primary text-sm ">Merk</p>
            <p className="text-muted-foreground text-sm ">Sedan</p>
        </div>
        <div className="flex border-b items-center justify-between">
            <p className="text-primary text-sm ">Warna</p>
            <p className="text-muted-foreground text-sm ">Sedan</p>
        </div>
        <div className="flex border-b items-center justify-between">
            <p className="text-primary text-sm ">Transmisi</p>
            <p className="text-muted-foreground text-sm ">Sedan</p>
        </div>
        <div className="flex border-b items-center justify-between">
            <p className="text-primary text-sm ">Kapasitas</p>
            <p className="text-muted-foreground text-sm ">Sedan</p>
        </div>
        <div className="flex border-b items-center justify-between">
            <p className="text-primary text-sm ">Tahun</p>
            <p className="text-muted-foreground text-sm ">Sedan</p>
        </div>
        <div className="flex border-b items-center justify-between">
            <p className="text-primary text-sm ">No. Plat</p>
            <p className="text-muted-foreground text-sm ">Sedan</p>
        </div>
        <div className="flex border-b items-center justify-between">
            <p className="text-primary text-sm ">Asuransi</p>
            <p className="text-muted-foreground text-sm ">Sedan</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDetailProduct;
