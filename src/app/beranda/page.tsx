"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarList } from "@/components/sidebar-list";
import { CalendarRange } from "lucide-react";
import { Filter } from "lucide-react";
import Header from "@/components/header";
import CardProduct from "@/features/beranda/components/card-product";
import FilterProduct from "@/features/beranda/components/filter-product";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import HeaderTitle from "@/components/header-title";

const Beranda = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-100 w-full">
      <Header />
      <SidebarProvider>
        <SidebarList />
        <main className=" w-full p-4">
          <SidebarTrigger />
          <div className="mt-10">
            <HeaderTitle isSearch>Sewa Mobil</HeaderTitle>
            <div className="flex gap-4 items-center justify-between mt-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
                <p className="flex gap-2 items-center text-sm font-normal text-muted-foreground bg-white p-2 rounded-full text-nowrap overflow-hidden">
                  <CalendarRange color="red" size={20} />
                  18-07-2004
                </p>
                <p className="flex gap-2 items-center text-sm font-normal text-muted-foreground bg-white p-2 rounded-full text-nowrap overflow-hidden">
                  <CalendarRange color="red" size={20} />
                  18-07-2004
                </p>
                <p className="flex gap-2 items-center text-sm font-normal text-muted-foreground bg-white p-2 rounded-full text-nowrap overflow-hidden">
                  <CalendarRange color="red" size={20} />
                  18-07-2004
                </p>
                <p className="flex gap-2 items-center text-sm font-normal text-muted-foreground bg-white p-2 rounded-full text-nowrap overflow-hidden">
                  <CalendarRange color="red" size={20} />
                  18-07-2004
                </p>
                <p className="flex gap-2 items-center text-sm font-normal text-muted-foreground bg-white p-2 rounded-full text-nowrap overflow-hidden">
                  <CalendarRange color="red" size={20} />
                  18-07-2004
                </p>
              </div>
              <Button
                onClick={() => handleOpenModal()}
                className="flex gap-2 items-center text-sm font-normal text-muted-foreground bg-white p-2 rounded-full hover:bg-red-600 text-black hover:text-white justify-start"
              >
                <Filter color="red" size={20} />
                Filter
              </Button>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>

            <FilterProduct
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Beranda;
