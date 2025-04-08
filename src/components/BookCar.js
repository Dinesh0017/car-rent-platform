'use client';

import {
  Car, Users, DoorOpen, Gauge, CheckCircle, Shield,
  Wrench, CalendarClock, MapPin, User, Filter,
  Currency
} from 'lucide-react';

const CarCard = () => {
  const carData = [
    {
      title: 'Bugatti Chiron',
      image: 'assets/bens.jpg',
      passengers: 2,
      doors: 4,
      transmission: 'Auto',
      price: 20000,
    },
    {
      title: 'Bugatti Chiron',
      image: 'assets/subaru.jpg',
      passengers: 2,
      doors: 4,
      transmission: 'Manual',
      price: 10000,
    },
    {
      title: 'Bugatti Chiron',
      image: 'assets/bens.jpg',
      passengers: 2,
      doors: 4,
      transmission: 'Auto',
      price: 20000,
    },
    {
        title: 'Bugatti Chiron',
        image: 'assets/subaru.jpg',
        passengers: 2,
        doors: 4,
        transmission: 'Manual',
        price: 10000,
      },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-8 text-primary">
      {/* Left Filter Sidebar */}
      <aside className="w-full lg:w-1/4 border rounded-xl p-4 space-y-6 shadow-sm text-sm">
        <h2 className="font-bold text-lg flex items-center gap-2"><Filter size={16} /> Filter Cars By:</h2>

        <div>
          <label className="block font-medium mb-1"><Currency size={16} />Currency</label>
          <select className="w-full border px-2 py-1 rounded">
            <option>USD Dollars – USD</option>
            <option>Euro – EUR</option>
            <option>INR – INR</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">By Pricing</label>
          <input type="range" min="1000" max="50000" className="w-full " />
        </div>

        <div>
          <label className="block font-medium mb-1">Car Group</label>
          <div className="space-y-1">
            <div><input type="radio" name="group" /> All</div>
            <div><input type="radio" name="group" /> SUV</div>
            <div><input type="radio" name="group" /> Electric</div>
            <div><input type="radio" name="group" /> Luxury</div>
            <div><input type="radio" name="group" /> Sports</div>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Passengers</label>
          <div className="space-y-1">
            <div><input type="radio" name="passengers" /> 0-2</div>
            <div><input type="radio" name="passengers" /> 4-5</div>
            <div><input type="radio" name="passengers" /> 6+</div>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Doors</label>
          <div className="space-y-1">
            <div><input type="radio" name="doors" /> 2</div>
            <div><input type="radio" name="doors" /> 4</div>
            <div><input type="radio" name="doors" /> 5</div>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Transmission</label>
          <div className="space-y-1">
            <div><input type="radio" name="transmission" /> Auto</div>
            <div><input type="radio" name="transmission" /> Manual</div>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Air Condition</label>
          <div className="space-y-1">
            <div><input type="radio" name="ac" /> A/C</div>
            <div><input type="radio" name="ac" /> Non A/C</div>
          </div>
        </div>
      </aside>

      {/* Right Main Content */}
      <section className="w-full lg:w-3/4">
        {/* Top Filters */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 text-primary font-bold ">
          <div className="flex items-center gap-2  ">
            <MapPin size={20} />
            <input type="text" placeholder="Pickup Location" className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg" />
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <input type="text" placeholder="Dropoff Location" className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg" />
          </div>
          <div className="flex items-center gap-2 ">
            <CalendarClock size={18} />
            <input type="datetime-local" className="w-full px-2 py-2 border rounded-lg bg-gray-200 shadow-lg" />
          </div>
          <div className="flex items-center gap-2">
            <CalendarClock size={18} />
            <input type="datetime-local" className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg" />
          </div>
          <div className="flex items-center gap-2">
            <User size={22} />
            <input type="number" placeholder="Driver Age" className="w-full px-3 py-2 border rounded-lg bg-gray-200 shadow-lg" />
          </div>
        </div>

        {/* Car Cards - vertical scroll container */}
        <div className="h-[calc(100vh-100px)] overflow-y-auto pr-2 space-y-6">
          {carData.map((car, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row border-2 border-gray-200 rounded-2xl shadow-md p-4"
            >
              <div className="md:w-1/2">
                <img src={car.image} alt={car.title} className="rounded-xl w-full h-60 object-cover" />
              </div>

              <div className="md:w-1/2 flex flex-col justify-between p-4">
                <div className="flex flex-wrap items-center gap-4 text-gray-700 mb-3">
                  <span className="flex items-center gap-1"><Car size={16} /> Luxury</span>
                  <span className="flex items-center gap-1"><Users size={16} /> {car.passengers} Passengers</span>
                  <span className="flex items-center gap-1"><DoorOpen size={16} /> {car.doors} Doors</span>
                  <span className="flex items-center gap-1"><Gauge size={16} /> {car.transmission}</span>
                </div>

                <ul className="text-sm text-gray-600 space-y-1 mb-4 list-disc list-inside">
                  <li><CheckCircle size={14} className="inline text-green-600" /> Unlimited mileage</li>
                  <li><Shield size={14} className="inline text-green-600" /> Collision Damage Waiver</li>
                  <li><Wrench size={14} className="inline text-green-600" /> Roadside Assistance</li>
                  <li><Shield size={14} className="inline text-green-600" /> Third Party Liability</li>
                  <li><Wrench size={14} className="inline text-green-600" /> Modifications</li>
                </ul>

                <div className="flex justify-between items-center">
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">Total Price</p>
                    <p className="text-2xl font-bold text-yellow-600">${car.price}</p>
                    <p className="text-xs text-green-500">✔ Free cancellation</p>
                    <p className="text-xs text-blue-500">✔ Online check-in available</p>
                  </div>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-xl shadow">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CarCard;
