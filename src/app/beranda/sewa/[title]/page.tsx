"use client";
import Header from "@/components/header";
import HeaderTitle from "@/components/header-title";
import SidebarList from "@/components/sidebar-list";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CardDataDiri from "@/features/detailProduct/components/cara-data-diri";
import CardDetailProduct from "@/features/detailProduct/components/card-detail-product";
import CardPembayaran from "@/features/detailProduct/components/card-pembayaran";
const DetailProduct = () => {
  return (
    <div className="bg-gray-100 w-full">
      <Header />
      <SidebarProvider>
        <SidebarList />
        <main className="w-full p-4">
          <SidebarTrigger />
          <div className="mt-10 w-full ">
            <HeaderTitle>Sewa Mobil</HeaderTitle>
            <div className="block md:flex gap-4 mt-4 w-full ">
              <CardDetailProduct />
              <div className="flex flex-col gap-4 w-1/3">
                <CardDataDiri />
                <CardPembayaran />
              </div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DetailProduct;
