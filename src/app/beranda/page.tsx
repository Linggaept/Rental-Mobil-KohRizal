import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarList } from "@/components/sidebar-list";
import Header from "@/components/header";
import CardProduct from "@/featured/card-product";
import FilterProduct from "@/featured/filter-product";

const Beranda = () => {
  return (
    <div className="">
      <Header />
      <SidebarProvider>
        <SidebarList />
        <main>
          <SidebarTrigger />
          <div className="mt-10 ml-4">
            <h1 className="font-bold text-2xl">Sewa Mobil</h1>
            <div className="flex gap-10">
              <div className="w-full grid grid-cols-3 gap-4">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
              </div>
              <div className="w-1/8 mt-10 bg-white border border-gray-200 shadow-sm shadow-gray-300 p-4 rounded-lg">
                <FilterProduct />
              </div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Beranda;
