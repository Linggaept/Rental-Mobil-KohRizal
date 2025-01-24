import { Slider } from "@/components/ui/slider";

const fontStyleHeader = "font-semibold text-sm text-black";
const fontStyleTipe = "font-normal text-sm text-black";
const divStyleTipe = "flex gap-2 items-center";

const FilterProduct = () => {
  return (
    <div className=" w-full">
      <div className="flex justify-between gap-10 w-full ">
        <p className="text-black font-semibold text-sm">Filter</p>
        <p className="text-muted text-sm">Reset</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className={fontStyleHeader}>Harga</p>
          <Slider defaultValue={[30]} max={100} step={1} />
        </div>
        <div className="flex flex-col gap-2">
          <p className={fontStyleHeader}>Tipe</p>
          <div className="grid grid-cols-2 gap-2">
            <div className={divStyleTipe}>
              <input type="checkbox" className="w-4 h-4 bg-gray-200 border border-gray-400 checked:bg-red-600 checked:border-red-600" />
              <p className={fontStyleTipe}>Sedan</p>
            </div>
            <div className={divStyleTipe}>
              <input type="checkbox" className="w-4 h-4 bg-red-600" />
              <p className={fontStyleTipe}>Convertible</p>
            </div>
            <div className={divStyleTipe}>
              <input type="checkbox" className="w-4 h-4 bg-red-600" />
              <p className={fontStyleTipe}>MVP</p>
            </div>
            <div className={divStyleTipe}>
              <input type="checkbox" className="w-4 h-4 bg-red-600" />
              <p className={fontStyleTipe}>Coupe</p>
            </div>
            <div className={divStyleTipe}>
              <input type="checkbox" className="w-4 h-4 bg-red-600" />
              <p className={fontStyleTipe}>SUV</p>
            </div>
            <div className={divStyleTipe}>
              <input type="checkbox" className="w-4 h-4 bg-red-600" />
              <p className={fontStyleTipe}>Hatchback</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className={fontStyleHeader}>Harga</p>
          <Slider defaultValue={[30]} max={100} step={1} />
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
