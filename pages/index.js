import { useState } from "react";
import { PhoneCall } from "lucide-react";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching flights from ${from} to ${to} on ${date}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">SkyLine Flight Reservations</h1>
      <form onSubmit={handleSearch} className="bg-gray-100 p-6 rounded-2xl shadow-md w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="e.g., New York"
            required
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="e.g., Toronto"
            required
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
        >
          Search Flights
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-2">Need help with your booking?</p>
        <a
          href="tel:+15107093362"
          className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600"
        >
          <PhoneCall className="mr-2" /> Call Now: +1 510 709 3362
        </a>
      </div>
    </div>
  );
}
