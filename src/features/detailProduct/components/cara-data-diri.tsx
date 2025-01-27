import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const CardDataDiri = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Data Diri</CardTitle>
      </CardHeader>
      {isLogin ? (
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-between border-b border-gray-400">
              <p className="text-sm">NIK </p>
              <p className="text-sm text-muted-foreground">3456789876543 </p>
            </div>
            <div className="flex items-center gap-2 justify-between border-b border-gray-400">
              <p className="text-sm">Nama </p>
              <p className="text-sm text-muted-foreground">
                Vincent 2 Bungkus{" "}
              </p>
            </div>
            <div className="flex items-center gap-2 justify-between border-b border-gray-400">
              <p className="text-sm">No. HP </p>
              <p className="text-sm text-muted-foreground">08212345678 </p>
            </div>
          </div>
        </CardContent>
      ) : (
        <CardContent>
          <div className="flex flex-col gap-2">
            <Button className="w-full rounded-full">Daftar</Button>
            <Button className="w-full rounded-full " variant={"outline"}>
              Masuk
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default CardDataDiri;
