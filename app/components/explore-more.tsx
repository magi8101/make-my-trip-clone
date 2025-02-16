import { MapPin, CreditCard, Plane, Building2, Gift } from "lucide-react";

export default function ExploreMore() {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <MapPin className="w-5 h-5 text-[#008CFF]" />
        <div>
          <div className="text-sm font-medium">Where2Go</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <CreditCard className="w-5 h-5 text-[#008CFF]" />
        <div>
          <div className="text-sm font-medium">TripMoney</div>
          <div className="text-xs text-gray-500">Loan Credit and More</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Plane className="w-5 h-5 text-[#008CFF]" />
        <div>
          <div className="text-sm font-medium">Explore International Flights</div>
          <div className="text-xs text-gray-500">
            Cheapest Flights to Paris, Bali, Tokyo &amp; more
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Building2 className="w-5 h-5 text-[#008CFF]" />
        <div>
          <div className="text-sm font-medium">MICE</div>
          <div className="text-xs text-gray-500">Plan Your Offsite with Us</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Gift className="w-5 h-5 text-[#008CFF]" />
        <div>
          <div className="text-sm font-medium">Gift Cards</div>
        </div>
      </div>
    </div>
  );
}

