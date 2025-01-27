const HeaderTitle = ({
  children,
  isSearch,
}: {
  children: React.ReactNode;
  isSearch?: boolean;
}) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-2xl">{children}</h1>
      {isSearch && (
        <input
          type="search"
          placeholder="Cari sesuatu disini ..."
          className="w-1/3  rounded-full px-4 py-2"
        />
      )}
    </div>
  );
};

export default HeaderTitle;
