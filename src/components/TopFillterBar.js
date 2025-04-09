import React from "react";
import { CalendarClock, MapPin, User } from "lucide-react";

const TopFillterBar = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 text-primary font-bold ">
        <div className="flex items-center gap-2  ">
          <MapPin size={20} />
          <input
            type="text"
            placeholder="Pickup Location"
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg"
          />
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <input
            type="text"
            placeholder="Dropoff Location"
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <CalendarClock size={18} />
          <input
            type="datetime-local"
            className="w-full px-2 py-2 border rounded-lg bg-gray-200 shadow-lg"
          />
        </div>
        <div className="flex items-center gap-2">
          <CalendarClock size={18} />
          <input
            type="datetime-local"
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg"
          />
        </div>
        <div className="flex items-center gap-2">
          <User size={22} />
          <input
            type="number"
            placeholder="Driver Age"
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TopFillterBar;
