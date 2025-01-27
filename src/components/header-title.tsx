import { Search } from "lucide-react";

const HeaderTitle = ({
  children,
  isSearch,
}: {
  children: React.ReactNode;
  isSearch?: boolean;
}) => {
  return (
    <div className="block md:flex justify-between items-center">
      <h1 className="font-bold text-2xl">{children}</h1>
      {isSearch && (
        <div className="relative w-full mt-2 md:w-auto">
          <Search
            size={20}
            color="red"
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
          />
          <input
            type="search"
            placeholder="Cari sesuatu disini ..."
            className="w-full md:w-80 rounded-full px-10 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      )}
    </div>
  );
};

export default HeaderTitle;
