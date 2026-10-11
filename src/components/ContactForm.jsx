import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info, RotateCcw } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message or question.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Enquiry',
      message: ''
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-[#CFDDD3] p-8 sm:p-10 shadow-lg shadow-[#1E3A2F]/5 animate-fade-in text-left">
        <div className="w-14 h-14 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-[#6B917E]" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#142820] mb-2">
          Message Received!
        </h3>
        <p className="text-[#4A5D53] text-sm sm:text-base leading-relaxed mb-6">
          Thank you for reaching out, <strong className="text-[#142820]">{formData.name}</strong>. Your message has been simulated successfully in local frontend state.
        </p>

        {/* Demo notice */}
        <div className="bg-[#FAF8F5] border border-[#E8E1D7] rounded-2xl p-4 text-xs text-[#5C4D38] leading-relaxed mb-6 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#C99E32] shrink-0 mt-0.5" />
          <div>
            <strong>Frontend Demo Notice:</strong> This contact form is a frontend demonstration. In production, our team responds within 12 hours via email or WhatsApp.
          </div>
        </div>

        <Button
          onClick={handleReset}
          variant="outline"
          size="md"
          icon={RotateCcw}
          iconPosition="left"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#CFDDD3] p-6 sm:p-8 md:p-10 shadow-lg shadow-[#1E3A2F]/5 text-left">
      <div className="mb-6 pb-6 border-b border-[#E8E1D7]">
        <span className="text-xs uppercase tracking-widest text-[#6B917E] font-semibold">
          Get in Touch
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#142820] mt-1">
          Have Questions About the Circle?
        </h3>
        <p className="text-xs sm:text-sm text-[#4A5D53] mt-2">
          Feel free to ask about solo safety, room arrangements, weather conditions, or custom trip details.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#142820] mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Maya Kapoor"
              className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-sm text-[#142820] placeholder:text-[#9AA8A0] focus:outline-none focus:ring-2 focus:ring-[#1E3A2F] transition-colors ${
                errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#CFDDD3] focus:border-[#1E3A2F]'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#142820] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="maya@example.com"
              className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-sm text-[#142820] placeholder:text-[#9AA8A0] focus:outline-none focus:ring-2 focus:ring-[#1E3A2F] transition-colors ${
                errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#CFDDD3] focus:border-[#1E3A2F]'
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
            <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#142820] mb-1.5">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-sm text-[#142820] placeholder:text-[#9AA8A0] focus:outline-none focus:ring-2 focus:ring-[#1E3A2F] transition-colors ${
                errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#CFDDD3] focus:border-[#1E3A2F]'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-[#142820] mb-1.5">
              Topic of Enquiry
            </label>
            <select
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#CFDDD3] bg-[#FAF8F5] text-sm text-[#142820] focus:outline-none focus:ring-2 focus:ring-[#1E3A2F]"
            >
              <option value="General Enquiry">General Trip Enquiry</option>
              <option value="Batch Dates">Batch Dates & Availability</option>
              <option value="Solo Traveler Guidance">Solo Female Travel Guidance</option>
              <option value="Cab & Transfer Coordination">Cab & Transfer Coordination</option>
              <option value="Dietary & Room Sharing">Dietary & Room Sharing Questions</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#142820] mb-1.5">
            Your Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your questions or notes here..."
            className={`w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-sm text-[#142820] placeholder:text-[#9AA8A0] focus:outline-none focus:ring-2 focus:ring-[#1E3A2F] transition-colors ${
              errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#CFDDD3] focus:border-[#1E3A2F]'
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
            </p>
          )}
        </div>

        {/* Demo note */}
        <div className="bg-[#FAF8F5] border border-[#E8E1D7] rounded-xl p-3 text-xs text-[#6B917E] flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#C99E32] shrink-0" />
          <span>This form operates client-side for demonstration and validates input with simulated success.</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full sm:w-auto"
          icon={Send}
        >
          Send Enquiry Message
        </Button>
      </form>
    </div>
  );
}
