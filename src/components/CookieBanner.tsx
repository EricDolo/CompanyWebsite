"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = ({ setOpenPrivacy, setOpenTerms }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 shadow-md p-4 flex flex-col md:flex-row items-center justify-between text-sm">
      <p className="text-gray-700 text-center md:text-left mb-2 md:mb-0">
        We use cookies to enhance your browsing experience, serve personalized content, and analyze site traffic. By continuing to use our site, you consent to our use of cookies. Read our{" "}
        
        <button
          onClick={() => setOpenTerms(true)}
          className="text-dolo-blue underline"
        >
          Terms of Service
        </button>
        {" "}and{" "}
        <button
          onClick={() => setOpenPrivacy(true)}
          className="text-dolo-blue underline"
        >
          Privacy Policy
        </button>
        .
      </p>
      <div className="flex gap-4 mt-2 md:mt-0">
        <Button onClick={handleAccept} className="bg-dolo-blue text-white">
          Accept        
        </Button>
        <Button onClick={handleDecline} variant="destructive" className="bg-red-500 text-white">
          Decline
        </Button>
      </div>
      
    </div>
  );
};

export default CookieBanner;
