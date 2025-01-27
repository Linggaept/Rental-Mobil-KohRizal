import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";

const fontStyleHeader = "font-semibold text-sm text-black";
const fontStyleTipe = "font-normal text-sm text-black";
const divStyleTipe = "flex gap-2 items-center";

interface FilterProductProps {
  isOpen: boolean;
  onClose: () => void;
}
const FilterProduct = ({ isOpen, onClose }: FilterProductProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-white/30 z-50">
      <button onClick={onClose} className="absolute top-0 right-3 ">
        <X size={32} color="red" />
      </button>
      <div className="relative w-96 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <p className="text-black font-semibold text-sm">Filter</p>
          <button className="text-muted text-sm hover:underline">Reset</button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className={fontStyleHeader}>Harga</p>
            <Slider defaultValue={[30]} max={100} step={1} />
          </div>
          <div className="flex flex-col gap-2">
            <p className={fontStyleHeader}>Tipe</p>
            <div className="grid grid-cols-2 gap-2">
              {["Sedan", "Convertible", "MVP", "Coupe", "SUV", "Hatchback"].map(
                (type) => (
                  <div className={divStyleTipe} key={type}>
                    <Checkbox className="w-4 h-4" />
                    <p className={fontStyleTipe}>{type}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className={fontStyleHeader}>Transmisi</p>
            <RadioGroup defaultValue="semua">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="semua" id="semua" />
                <Label htmlFor="semua">Semua</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="manual" id="manual" />
                <Label htmlFor="manual">Manual</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="auto" id="auto" />
                <Label htmlFor="auto">Auto</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-2">
            <p className={fontStyleHeader}>Tipe</p>
            <div className="grid grid-cols-2 gap-2">
              {["2 orang", "4 orang", "5 orang", "6 orang", "8 orang", "> 8 orang"].map(
                (type) => (
                  <div className={divStyleTipe} key={type}>
                    <Checkbox className="w-4 h-4" />
                    <p className={fontStyleTipe}>{type}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
