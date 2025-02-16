import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between bg-header animate__animated animate__fadeInDown">
      <div className="flex items-center gap-8">
        <Image
          src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
          alt="MakeMyTrip"
          width={113}
          height={36}
          className="w-28"
        />

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#008CFF] transition-colors">
            <div className="bg-[var(--mmt-primary)] p-1 rounded">
              <span className="text-xs text-[var(--mmt-foreground)]">%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--mmt-foreground)] text-sm">Super Offers</span>
              <span className="text-[var(--mmt-hover)] text-xs">Explore great deals &amp; offers</span>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#008CFF] transition-colors">
            <div className="bg-[#E47544] p-1 rounded">
              <span className="text-xs text-white">Biz</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm">Introducing myBiz</span>
              <span className="text-[#4DC3FF] text-xs">Business Travel Solution</span>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#008CFF] transition-colors">
            <div className="bg-[#E47544] p-1 rounded">
              <span className="text-xs text-white">📋</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm">My Trips</span>
              <span className="text-[#4DC3FF] text-xs">Manage your bookings</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="text-white flex items-center gap-2 animate__animated animate__fadeInRight"
        >
          {/* 
            Login Icon provided by Uniconlabs via Flaticon.
            Attribution: <a href="https://www.flaticon.com/free-icons/user" title="user icons" target="_blank" rel="noopener noreferrer">User icons created by Uniconlabs - Flaticon</a>
          */}
          <a
            href="https://www.flaticon.com/free-icons/user"
            title="user icons"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
              alt="User Icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          </a>
          Login or Create Account
          <ChevronDown className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2 text-white cursor-pointer hover:text-[#008CFF]">
          <span>IN</span>
          <span>|</span>
          <span>ENG</span>
          <span>|</span>
          <span>INR</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}

