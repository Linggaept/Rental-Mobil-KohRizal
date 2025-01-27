import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";

const CardPembayaran = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Pembayaran</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Input type="date" className="w-full bg-red-200 rounded-full" />
          <div className="flex items-center w-full">
            <div className="border-t-2 border-dashed border-gray-400 w-full" />
            <p className="text-center text-muted-foreground text-sm mx-2">
              Sampai
            </p>
            <div className="border-t-2 border-dashed border-gray-400 w-full" />
          </div>
          <Input type="date" className="w-full bg-red-200 rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-md font-bold">Tipe Pembayaran</h2>
          <RadioGroup defaultValue="setengah" className="flex">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="setengah" id="setengah" />
              <Label
                htmlFor="setengah"
                className="text-muted-foreground font-medium text-sm"
              >
                Setengah
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="lunas" id="lunas" />
              <Label
                htmlFor="lunas"
                className="text-muted-foreground font-medium text-sm"
              >
                Lunas
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-md font-bold">Metode Pembayaran</h2>
          <RadioGroup defaultValue="tunai" className="flex">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="tunai" id="tunai" />
              <Label
                htmlFor="tunai"
                className="text-muted-foreground font-medium text-sm"
              >
                Tunai
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="non-tunai" id="non-tunai" />
              <Label
                htmlFor="non-tunai"
                className="text-muted-foreground font-medium text-sm"
              >
                Non-Tunai
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between w-full border-b border-gray-400">
            <p className="text-muted-foreground text-sm font-normal ">
              Total Waktu
            </p>
            <p className="text-muted-foreground text-sm font-normal">2 Hari</p>
          </div>
          <div className="flex items-center justify-between w-full border-b border-gray-400">
            <p className="text-muted-foreground text-sm font-normal ">Harga</p>
            <p className="text-muted-foreground text-sm font-normal">
              Rp. 480.000
            </p>
          </div>
          <div className="flex items-center justify-between w-full border-b border-gray-400">
            <p className="text-muted-foreground text-sm font-normal ">
              Asuransi
            </p>
            <p className="text-muted-foreground text-sm font-normal">
              Rp. 20.000
            </p>
          </div>
          <div className="flex items-center justify-between w-full border-b border-gray-400">
            <p className="text-muted-foreground text-sm font-normal ">
              Pajak (15%)
            </p>
            <p className="text-muted-foreground text-sm font-normal">
              Rp. 75.000
            </p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-primary font-bold text-sm ">Total Bayar</p>
            <p className="text-primary font-bold text-sm">Rp. 287.500</p>
          </div>
          <Button className="w-full rounded-full">Bayar</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardPembayaran;
