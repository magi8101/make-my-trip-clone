"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlightInfo {
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
}

export default function FlightSearch() {
  const { control, handleSubmit } = useForm();
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [travelers, setTravelers] = useState(1);
  const [travelClass, setTravelClass] = useState("economy");
  const [results, setResults] = useState<FlightInfo[] | null>(null);

  const onSubmit = (data: any) => {
    // Log search data for debugging
    console.log({ ...data, travelClass, travelers });

    // Set fake flight results
    setResults([
      {
        flightNumber: "MMT101",
        departureTime: "2025-03-01 10:30",
        arrivalTime: "2025-03-02 07:45",
        price: "$750",
      },
      {
        flightNumber: "MMT202",
        departureTime: "2025-03-01 14:00",
        arrivalTime: "2025-03-02 11:15",
        price: "$820",
      },
      {
        flightNumber: "MMT303",
        departureTime: "2025-03-01 18:45",
        arrivalTime: "2025-03-02 16:00",
        price: "$900",
      },
    ]);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 mt-16">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        {/* Trip type selection */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="tripType"
                value="oneway"
                defaultChecked
                className="text-[#008CFF]"
              />
              <span>ONEWAY</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="tripType"
                value="roundtrip"
                className="text-[#008CFF]"
              />
              <span>ROUND TRIP</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="tripType"
                value="multicity"
                className="text-[#008CFF]"
              />
              <span>MULTI CITY</span>
            </label>
          </div>
          <div className="text-sm text-gray-600">
            Book International and Domestic Flights
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* From */}
            <div className="col-span-1 border rounded-md p-3">
              <div className="text-xs text-gray-500">FROM</div>
              <div className="text-xl font-semibold">CDG</div>
              <div className="text-sm text-gray-600">
                Charles de Gaulle Airport, France
              </div>
            </div>

            {/* To */}
            <div className="relative col-span-1 border rounded-md p-3">
              <Button
                variant="ghost"
                // Assuming the Button component supports a "size" prop.
                size="icon"
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </Button>
              <div className="text-xs text-gray-500">TO</div>
              <div className="text-xl font-semibold">SYD</div>
              <div className="text-sm text-gray-600">
                Sydney Kingsford Smith Airport, Australia
              </div>
            </div>

            {/* Departure Date */}
            <div className="col-span-1 border rounded-md p-3">
              <div className="text-xs text-gray-500">DEPARTURE</div>
              <Controller
                control={control}
                name="departureDate"
                render={({ field }) => (
                  <DatePicker
                    selected={departureDate}
                    onChange={(date) => {
                      setDepartureDate(date);
                      field.onChange(date);
                    }}
                    className="w-full p-2 border rounded-md"
                    placeholderText="Select departure date"
                  />
                )}
              />
            </div>

            {/* Return Date */}
            <div className="col-span-1 border rounded-md p-3">
              <div className="text-xs text-gray-500">RETURN</div>
              <Controller
                control={control}
                name="returnDate"
                render={({ field }) => (
                  <DatePicker
                    selected={returnDate}
                    onChange={(date) => {
                      setReturnDate(date);
                      field.onChange(date);
                    }}
                    className="w-full p-2 border rounded-md"
                    placeholderText="Select return date"
                  />
                )}
              />
            </div>

            {/* Travellers & Class */}
            <div className="col-span-1 border rounded-md p-3">
              <div className="text-xs text-gray-500">
                TRAVELLERS &amp; CLASS
              </div>
              <div className="flex flex-col space-y-4 mt-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setTravelers((prev) => Math.max(1, prev - 1))}
                      className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
                    >
                      –
                    </button>
                    <div className="w-12 text-center font-medium">
                      {travelers}
                    </div>
                    <button
                      type="button"
                      onClick={() => setTravelers((prev) => prev + 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
                    >
                      +
                    </button>
                  </div>
                  <select
                    className="border rounded p-1 text-sm"
                    value={travelClass}
                    onChange={(e) => setTravelClass(e.target.value)}
                  >
                    <option value="economy">Economy</option>
                    <option value="premiumEconomy">Premium Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First Class</option>
                  </select>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Travellers:</span> {travelers}
                </div>
              </div>
            </div>
          </div>

          {/* Fare type selection */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4 justify-center">
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fareType"
                  value="regular"
                  defaultChecked
                  className="text-[#008CFF]"
                />
                <span className="text-sm">Regular Fares</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fareType"
                  value="armed"
                  className="text-[#008CFF]"
                />
                <span className="text-sm">Armed Forces Fares</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fareType"
                  value="student"
                  className="text-[#008CFF]"
                />
                <span className="text-sm">Student Fares</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fareType"
                  value="senior"
                  className="text-[#008CFF]"
                />
                <span className="text-sm">Senior Citizen Fares</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <Button
              type="submit"
              className="bg-[#008CFF] text-white px-20 py-6 text-xl rounded-full hover:bg-[#0070CC]"
            >
              SEARCH
            </Button>
          </div>
        </form>

        {/* Display fake flight results if available */}
        {results && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Flight Search Results</h3>
            <ul className="space-y-4">
              {results.map((flight, index) => (
                <li
                  key={index}
                  className="border p-4 rounded-lg shadow-sm flex justify-between items-center"
                >
                  <div>
                    <div className="font-semibold">
                      Flight {flight.flightNumber}
                    </div>
                    <div className="text-sm text-gray-600">
                      Depart: {flight.departureTime}
                    </div>
                    <div className="text-sm text-gray-600">
                      Arrive: {flight.arrivalTime}
                    </div>
                  </div>
                  <div className="font-bold text-lg text-[#008CFF]">
                    {flight.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

