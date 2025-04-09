"use client";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the default marker icon path
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const LocationMarker = ({ onSelect }) => {
  useMapEvents({
    click(e) {
      onSelect(e.latlng);
    },
  });
  return null;
};

const MapSelector = () => {
  const [position, setPosition] = useState({ lat: 34.0522, lng: -118.2437 }); // default: Los Angeles
  const [locationDetails, setLocationDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = async (latlng) => {
    setPosition(latlng);

    // Fetch country/city from coordinates using OpenStreetMap API
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`
    );
    const data = await res.json();
    setLocationDetails({
      country: data.address.country,
      city: data.address.city || data.address.town || data.address.village,
      state: data.address.state,
    });
  };

  const handleSearch = async () => {
    if (searchQuery) {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json`
      );
      const data = await res.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setPosition({ lat: parseFloat(lat), lng: parseFloat(lon) });

        // Fetch location details for the search result
        const locationRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
        );
        const locationData = await locationRes.json();
        setLocationDetails({
          country: locationData.address.country,
          city:
            locationData.address.city ||
            locationData.address.town ||
            locationData.address.village,
          state: locationData.address.state,
        });
      }
    }
  };

  return (
    <section className="px-6 md:px-20 py-20">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Select Your Location
        <p className="text-lg font-normal text-gray-600 mt-2">
          Click on the map to select a location or search for a specific place.
        </p>
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Map */}
        <div className="md:col-span-2 relative rounded-md shadow-lg overflow-hidden hover:scale-105 transition-all ease-in-out duration-300">
          <MapContainer
            center={[position.lat, position.lng]}
            zoom={5}
            className="h-[500px] w-full rounded-xl"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[position.lat, position.lng]} />
            <LocationMarker onSelect={handleSelect} />
          </MapContainer>
        </div>

        {/* Location Details */}
        <div className="space-y-4 text-primary font-medium bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="mt-8 max-w-lg mx-auto flex flex-col gap-4 pb-12">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a location"
            className="w-full p-4 pl-12 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-blue-500 transition-all ease-in-out duration-300"
          />
          <div className="absolute top-4.5 left-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.25 4a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zM10.25 2C5.853 2 2 5.853 2 10.25S5.853 18.5 10.25 18.5a8.25 8.25 0 0 0 8.247-8.247c0-4.548-3.697-8.247-8.247-8.247zM21 21l-5.25-5.25"
                stroke="#4A90E2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex justify-center items-center"
              />
            </svg>
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="w-full py-3 bg-primary text-white rounded-md hover:primary transition-colors duration-300 ease-in-out cursor-pointer hover:bg-secondary cursor-pointer"
        >
          Search
        </button>
      </div>
          <h3 className="font-bold text-xl text-primary hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out">
            Selected Location
          </h3>
          <p>
            <strong>Latitude:</strong> {position.lat.toFixed(5)}
          </p>
          <p>
            <strong>Longitude:</strong> {position.lng.toFixed(5)}
          </p>
          {locationDetails && (
            <>
              <p>
                <strong>City/Town:</strong> {locationDetails.city}
              </p>
              <p>
                <strong>State:</strong> {locationDetails.state}
              </p>
              <p>
                <strong>Country:</strong> {locationDetails.country}
              </p>
            </>
          )}
          
        </div>
      </div>

      {/* Search Bar */}
    </section>
  );
};

export default MapSelector;
