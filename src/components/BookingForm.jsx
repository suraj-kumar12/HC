import React, { useState } from 'react';
import { Sparkles, Calendar, Users, CheckCircle2, AlertCircle, ShieldCheck, ArrowRight, RotateCcw } from 'lucide-react';
import Button from './Button';
import { TRIP_CONFIG } from '../data/tripData';

export default function BookingForm({ defaultBatch = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    batchId: defaultBatch || TRIP_CONFIG.batches[0]?.id || '',
    travelers: 1,
    dietary: 'No preference',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);

  const pricePerPerson = TRIP_CONFIG.basePrice;
  const totalAmount = pricePerPerson * formData.travelers;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone/WhatsApp number.';
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (min 8 digits).';
    }

    if (!formData.batchId) {
      newErrors.batchId = 'Please select your preferred batch date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleTravelerChange = (count) => {
    const val = Math.max(1, Math.min(6, count));
    setFormData((prev) => ({ ...prev, travelers: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const selectedBatchObj = TRIP_CONFIG.batches.find((b) => b.id === formData.batchId);
      const refId = `HC-SHG-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationData({
        refId,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        travelers: formData.travelers,
        batchDates: selectedBatchObj ? selectedBatchObj.dates : 'Flexible 2026',
        totalEstimate: totalAmount,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setConfirmationData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      batchId: TRIP_CONFIG.batches[0]?.id || '',
      travelers: 1,
      dietary: 'No preference',
      message: ''
    });
    setErrors({});
  };

  if (submitted && confirmationData) {
    return (
      <div className="bg-white rounded-3xl border border-[#E7E5DA] p-6 sm:p-10 shadow-lg animate-fade-in text-left">
        <div className="w-16 h-16 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center mb-6 mx-auto sm:mx-0">
          <CheckCircle2 className="w-9 h-9 text-[#42634B]" />
        </div>

        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F3F5EC] text-[#42634B] border border-[#E7E5DA] mb-3">
          Simulated Demonstration Confirmation
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303D32] mb-2">
          Enquiry Request Simulated!
        </h3>
        <p className="text-[#73796F] text-sm sm:text-base leading-relaxed mb-6">
          Thank you, <strong className="text-[#303D32]">{confirmationData.fullName}</strong>. Your interest in joining our Shangarh Girls Circle has been registered in the frontend demo state.
        </p>

        {/* Summary Card */}
        <div className="bg-[#FFFCF6] rounded-2xl border border-[#E7E5DA] p-5 sm:p-6 mb-6 space-y-3.5 text-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7E5DA]">
            <span className="text-[#73796F] font-medium">Demo Reference ID</span>
            <span className="font-mono font-semibold text-[#303D32]">{confirmationData.refId}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#73796F] font-medium">Selected Batch</span>
            <span className="font-semibold text-[#303D32]">{confirmationData.batchDates}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#73796F] font-medium">Number of Travelers</span>
            <span className="font-semibold text-[#303D32]">{confirmationData.travelers} {confirmationData.travelers === 1 ? 'Girl' : 'Girls'}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#73796F] font-medium">Base Price (Placeholder)</span>
            <span className="text-[#303D32]">₹{pricePerPerson.toLocaleString()} per person</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#E7E5DA] text-base">
            <span className="font-serif font-bold text-[#303D32]">Estimated Demo Total</span>
            <span className="font-serif font-bold text-xl text-[#42634B]">
              ₹{confirmationData.totalEstimate.toLocaleString()}*
            </span>
          </div>
        </div>

        {/* Demo Disclaimer Box */}
        <div className="bg-[#F3F5EC] border border-[#E7E5DA] rounded-xl p-4 text-xs text-[#73796F] leading-relaxed mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#C59A56] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#303D32]">Notice:</strong> This is a client-side frontend demo. No real monetary transactions have occurred, and no booking has been finalized on a server.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button
            onClick={handleReset}
            variant="primary"
            size="md"
            icon={RotateCcw}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Submit Another Enquiry
          </Button>

          <Button
            to="/trip-details"
            variant="outline"
            size="md"
            icon={ArrowRight}
            className="w-full sm:w-auto"
          >
            View Full Itinerary
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#E7E5DA] p-6 sm:p-8 md:p-10 shadow-sm text-left">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E7E5DA]">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#8FA58A] font-semibold">
            Reserve Your Place
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303D32] mt-1">
            Trip Enquiry & Fare Calculator
          </h3>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-xs text-[#73796F] block">Placeholder Rate</span>
          <span className="font-serif text-2xl font-bold text-[#42634B]">₹{pricePerPerson.toLocaleString()}*</span>
          <span className="text-[10px] text-[#8FA58A] block">/ traveler</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        
        {/* Batch Selection */}
        <div>
          <label htmlFor="batchId" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C59A56]" />
              Select Batch Dates *
            </span>
            <span className="text-xs normal-case font-normal text-[#73796F]">4 Days / 3 Nights</span>
          </label>
          <select
            id="batchId"
            name="batchId"
            value={formData.batchId}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#303D32] focus:outline-none focus:ring-2 focus:ring-[#42634B] transition-colors ${
              errors.batchId ? 'border-red-400 bg-red-50/20' : 'border-[#E7E5DA] focus:border-[#42634B]'
            }`}
          >
            {TRIP_CONFIG.batches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.dates} — ({b.status} • {b.seatsLeft} spots left)
              </option>
            ))}
          </select>
          {errors.batchId && (
            <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.batchId}
            </p>
          )}
        </div>

        {/* Travelers Count Multiplier */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#C59A56]" />
              Number of Travelers *
            </span>
            <span className="text-xs normal-case font-normal text-[#73796F]">
              Max 6 girls per booking
            </span>
          </label>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-[#E7E5DA] rounded-xl overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => handleTravelerChange(formData.travelers - 1)}
                className="px-4 py-2.5 text-[#42634B] hover:bg-[#F3F5EC] font-bold text-base transition-colors cursor-pointer"
                aria-label="Decrease travelers"
              >
                -
              </button>
              <span className="px-5 py-2.5 font-semibold text-sm text-[#303D32] min-w-12 text-center bg-[#FFFCF6]">
                {formData.travelers}
              </span>
              <button
                type="button"
                onClick={() => handleTravelerChange(formData.travelers + 1)}
                className="px-4 py-2.5 text-[#42634B] hover:bg-[#F3F5EC] font-bold text-base transition-colors cursor-pointer"
                aria-label="Increase travelers"
              >
                +
              </button>
            </div>

            {/* Dynamic Total calculation tag */}
            <div className="flex-1 bg-[#F3F5EC] border border-[#E7E5DA] px-4 py-2.5 rounded-xl flex items-center justify-between">
              <span className="text-xs text-[#73796F]">
                ₹{pricePerPerson.toLocaleString()} × {formData.travelers}
              </span>
              <span className="font-serif text-lg font-bold text-[#42634B]">
                = ₹{totalAmount.toLocaleString()}*
              </span>
            </div>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Priya Sharma"
              className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#303D32] placeholder:text-[#A4ACA3] focus:outline-none focus:ring-2 focus:ring-[#42634B] transition-colors ${
                errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#E7E5DA] focus:border-[#42634B]'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="priya@example.com"
              className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#303D32] placeholder:text-[#A4ACA3] focus:outline-none focus:ring-2 focus:ring-[#42634B] transition-colors ${
                errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E7E5DA] focus:border-[#42634B]'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-1.5">
              WhatsApp / Mobile Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#303D32] placeholder:text-[#A4ACA3] focus:outline-none focus:ring-2 focus:ring-[#42634B] transition-colors ${
                errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E7E5DA] focus:border-[#42634B]'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="dietary" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-1.5">
              Dietary Preference
            </label>
            <select
              id="dietary"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#E7E5DA] bg-white text-sm text-[#303D32] focus:outline-none focus:ring-2 focus:ring-[#42634B]"
            >
              <option value="Vegetarian">Standard Vegetarian</option>
              <option value="Jain">Jain (No onion/garlic)</option>
              <option value="Vegan">Vegan</option>
              <option value="Gluten-Free">Gluten-Free</option>
              <option value="No preference">No specific preference</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-1.5">
            Any questions, travel companion details or special notes
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us if you're traveling solo or with friends, your preferred departure city, or questions about the trip..."
            className="w-full px-4 py-3 rounded-xl border border-[#E7E5DA] bg-white text-sm text-[#303D32] placeholder:text-[#A4ACA3] focus:outline-none focus:ring-2 focus:ring-[#42634B]"
          />
        </div>

        {/* Live Calculation Callout */}
        <div className="bg-[#F3F5EC] rounded-2xl border border-[#E7E5DA] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white text-[#42634B] flex items-center justify-center shrink-0 border border-[#E7E5DA]">
              <ShieldCheck className="w-5 h-5 text-[#42634B]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#303D32]">
                All-Inclusive Wellness Package
              </p>
              <p className="text-[11px] text-[#73796F]">
                3N Stay + Meals + Yoga + Art Kit + Waterfall Trek
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-[#73796F] block">Estimated Total</span>
            <span className="font-serif text-2xl font-bold text-[#42634B]">
              ₹{totalAmount.toLocaleString()}*
            </span>
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full text-center shadow-md hover:shadow-lg"
          icon={Sparkles}
        >
          Submit Booking Enquiry (₹{totalAmount.toLocaleString()}*)
        </Button>

        <p className="text-center text-[11px] text-[#73796F] leading-relaxed">
          * ₹9,499 is a demonstration placeholder price. Submitting this form tests frontend validation and simulates an enquiry confirmation. No payment is charged.
        </p>
      </form>
    </div>
  );
}
