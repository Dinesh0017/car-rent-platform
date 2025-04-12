import { Filter } from "lucide-react";
import { FaDollarSign } from "react-icons/fa";
import { useState } from "react";
import CustomeRadioButton from "./CustomeRadioButton"; // Update path if needed

const LeftNavBar = () => {
  const [carGroup, setCarGroup] = useState("All");
  const [passengers, setPassengers] = useState("2");
  const [doors, setDoors] = useState("2");
  const [transmission, setTransmission] = useState("Auto");
  const [ac, setAc] = useState("A/C");
  const [value, setValue] = useState(1000);
  const [position, setPosition] = useState(0);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    const newPosition = ((newValue - 1000) / (100000 - 1000)) * 100;
    setPosition(newPosition);
  };

  return (
    <div className="space-y-4 text-primary">
      <h2 className="font-bold text-lg flex items-center gap-2">
        <Filter size={16} /> Filter Cars By:
      </h2>
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Currency Selector */}
      <div>
        <label className="flex gap-2 font-medium mb-1 items-center">
          <FaDollarSign size={16} />
          Currency
        </label>
        <select className="w-full border border-primary px-3 py-2 shadow-sm rounded-md">
          <option>USD Dollars – USD</option>
          <option>Euro – EUR</option>
          <option>INR – INR</option>
        </select>
      </div>
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Pricing Range */}
      <div>
        <label className="block font-medium mb-1">By Pricing</label>
        <div className="relative w-full">
          <div className="flex justify-between text-sm mb-1">
            <span>$1,000</span>
            <span>$100,000</span>
          </div>
          <input
            type="range"
            min="1000"
            max="100000"
            value={value}
            onChange={handleChange}
            step="100"
            aria-label="Price Range"
            className="w-full h-2 bg-blue-100 rounded-full appearance-none cursor-pointer"
          />
          <div
            style={{
              left: `calc(${position}% - 25px)`,
            }}
            className="absolute mt-6 top-5 w-20 text-center text-sm text-secondary font-semibold "
          >
            ${value}
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Car Group */}
      <div>
        <label className="block font-medium mb-1">Car Group</label>
        <CustomeRadioButton
          name="group"
          options={["All", "SUV", "Electric", "Luxury", "Sports"]}
          selected={carGroup}
          onChange={setCarGroup}
        />
      </div>
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Passengers */}
      <div>
        <label className="block font-medium mb-1">Passengers</label>
        <CustomeRadioButton
          name="passengers"
          options={["2", "4-5", "6+"]}
          selected={passengers}
          onChange={setPassengers}
        />
      </div>
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Doors */}
      <div>
        <label className="block font-medium mb-1">Doors</label>
        <CustomeRadioButton
          name="doors"
          options={["2", "4", "5"]}
          selected={doors}
          onChange={setDoors}
        />
      </div>
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Transmission */}
      <div>
        <label className="block font-medium mb-1">Transmission</label>
        <CustomeRadioButton
          name="transmission"
          options={["Auto", "Manual"]}
          selected={transmission}
          onChange={setTransmission}
        />
      </div>
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Air Condition */}
      <div>
        <label className="block font-medium mb-1">Air Condition</label>
        <CustomeRadioButton
          name="ac"
          options={["A/C", "Non A/C"]}
          selected={ac}
          onChange={setAc}
        />
      </div>
    </div>
  );
};

export default LeftNavBar;
