import React from "react";
import { Button } from "@/components/ui/button";
import { User, ArrowRight } from "lucide-react";

interface HeroSectionButton {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  primaryButton?: HeroSectionButton;
  secondaryButton?: HeroSectionButton;
  // Permite pasar una imagen o ilustración personalizada
  image?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  image,
}) => {
  return (
    <section
      className="w-full min-h-screen flex items-center bg-gradient-to-b from-silver5-cyan-500/15 via-transparent to-transparent md:py-0"
      aria-label="Hero principal"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-8">
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-silver5-gray-700 mb-10 max-w-xl">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {primaryButton && (
              <a href={primaryButton.href} className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-black text-white hover:bg-silver5-navy hover:text-white text-base font-semibold shadow transition-all duration-200 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-silver5-cyan-400 hover:scale-105 hover:shadow-2xl hover:shadow-silver5-navy/30"
                >
                  {primaryButton.text}
                  {primaryButton.icon}
                </Button>
              </a>
            )}
            {secondaryButton && (
              <a href={secondaryButton.href} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-7 py-3 rounded-full border-2 border-silver5-cyan-500 text-silver5-cyan-500 bg-transparent hover:bg-silver5-cyan-50 hover:text-silver5-navy text-base font-semibold flex items-center gap-2 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-silver5-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-silver5-cyan-400/30"
                >
                  {secondaryButton.text}
                  {secondaryButton.icon}
                </Button>
              </a>
            )}
          </div>
        </div>
        {/* Ilustración o imagen */}
        <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          {image ? (
            image
          ) : (
            // Placeholder de ilustración SVG
            <svg
              width="320"
              height="220"
              viewBox="0 0 320 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="max-w-xs md:max-w-md w-full h-auto"
            >
              <rect x="20" y="40" width="280" height="140" rx="24" fill="#67e8f9" fillOpacity="0.15" />
              <rect x="60" y="80" width="200" height="40" rx="12" fill="#06b6d4" fillOpacity="0.2" />
              <rect x="100" y="130" width="120" height="20" rx="8" fill="#06b6d4" fillOpacity="0.3" />
              <circle cx="160" cy="110" r="60" fill="#06b6d4" fillOpacity="0.08" />
            </svg>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 