type Props = {
  street: string;
  number: string;
  block: string;
  floor: string;
  scale: string;
  apartament: string;
  onSetStreet: (value: string) => void;
  onSetNumber: (value: string) => void;
  onSetBlock: (value: string) => void;
  onSetFloor: (value: string) => void;
  onSetScale: (value: string) => void;
  onSetApartament: (value: string) => void;
};

export default function InputStreet({
  street,
  number,
  block,
  floor,
  scale,
  apartament,
  onSetStreet,
  onSetNumber,
  onSetBlock,
  onSetFloor,
  onSetScale,
  onSetApartament,
}: Props) {
  return (
    <div className="flex flex-col gap-x-1 gap-y-4">
      <div className="flex">
        <div>
          <label htmlFor="" className="font-medium  text-white">
            Street:
          </label>
        </div>
        <div>
          <input
            type="text"
            className="border-2 border-black"
            name="address"
            value={street}
            onChange={(e) => onSetStreet(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-x-6">
        <div>
          <label htmlFor="" className="font-medium  text-white">
            Nr:
          </label>
        </div>
        <div>
          <input
            type="text"
            className="border-2 border-black w-2/4"
            name="number"
            value={number}
            onChange={(e) => onSetNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-x-7">
        <div>
          <label htmlFor="" className="font-medium  text-white">
            Bl:
          </label>
        </div>
        <div>
          <input
            type="text"
            className="border-2 border-black w-2/4"
            name="block"
            value={block}
            onChange={(e) => onSetBlock(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-x-1">
        <div>
          <label htmlFor="" className="font-medium  text-white">
            Floor:
          </label>
        </div>
        <div>
          <input
            type="text"
            className="border-2 border-black w-2/4"
            name="floor"
            value={floor}
            onChange={(e) => onSetFloor(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-x-6">
        <div>
          <label htmlFor="" className="font-medium  text-white">
            Sc:
          </label>
        </div>
        <div>
          <input
            type="text"
            className="border-2 border-black w-2/4"
            name="scale"
            value={scale}
            onChange={(e) => onSetScale(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-x-5">
        <div>
          <label htmlFor="" className="font-medium  text-white">
            Ap:
          </label>
        </div>
        <div>
          <input
             type="text"
            className="border-2 border-black w-2/4"
            name="apartament"
            value={apartament}
            onChange={(e) => onSetApartament(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
