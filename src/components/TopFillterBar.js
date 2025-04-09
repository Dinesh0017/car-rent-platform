import { useState } from "react";
import { MapPin, CalendarClock, User } from "lucide-react";

const LocationForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDateTime, setPickupDateTime] = useState("");
  const [dropoffDateTime, setDropoffDateTime] = useState("");
  const [driverAge, setDriverAge] = useState("");


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 text-primary font-bold">
        {/* Pickup Location */}
        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <input
            type="text"
            placeholder="Pickup Location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg"
          />
        </div>

        {/* Dropoff Location */}
        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <input
            type="text"
            placeholder="Dropoff Location"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg"
          />
        </div>

        {/* Pickup Date and Time */}
        <div className="flex items-center gap-2">
          <CalendarClock size={18} />
          <input
            type="datetime-local"
            value={pickupDateTime}
            onChange={(e) => setPickupDateTime(e.target.value)}
            className="w-full px-2 py-2 border rounded-lg bg-gray-200 shadow-lg"
          />
        </div>

        {/* Dropoff Date and Time */}
        <div className="flex items-center gap-2">
          <CalendarClock size={18} />
          <input
            type="datetime-local"
            value={dropoffDateTime}
            onChange={(e) => setDropoffDateTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg"
          />
        </div>

        {/* Driver Age */}
        <div className="flex items-center gap-2">
          <User size={22} />
          <input
            type="number"
            placeholder="Driver Age"
            value={driverAge}
            onChange={(e) => setDriverAge(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
