import React from 'react';
import { ArrowRight, Home } from 'lucide-react';
import Button from '../components/Button';
import Logo from '../components/Logo';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAF8F5] px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex justify-center mb-2">
          <Logo variant="emblem" className="w-20 h-20 shadow-md rounded-full p-2 bg-[#E7EEE9]" />
        </div>

        <span className="text-xs uppercase tracking-widest text-[#6B917E] font-semibold block">
          404 — Path Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#142820]">
          You've Wandered Off the Meadow Trail
        </h1>

        <p className="text-sm text-[#4A5D53] leading-relaxed">
          The page you are looking for has taken a quiet detour into the deodar woods. Let's guide you back to the sanctuary.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
            Back to Home
          </Button>
          <Button to="/trip-details" variant="outline" size="md" icon={ArrowRight}>
            View Retreat Details
          </Button>
        </div>
      </div>
    </div>
  );
}
