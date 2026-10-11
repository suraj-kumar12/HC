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

  const whatsappUrl = `https://wa.me/918586020962?text=${encodeURIComponent(
    `Hi Healing Circle, my name is ${formData.name || 'a traveler'}. I have an enquiry regarding: ${formData.subject}`
  )}`;

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-[#E7E5DA] p-8 sm:p-10 shadow-lg animate-fade-in text-left">
        <div className="w-14 h-14 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-[#42634B]" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303D32] mb-2">
          Message Received!
        </h3>
        <p className="text-[#73796F] text-sm sm:text-base leading-relaxed mb-6">
          Thank you for reaching out, <strong className="text-[#303D32]">{formData.name}</strong>. Your message has been simulated successfully in local frontend state.
        </p>

        {/* Demo notice */}
        <div className="bg-[#F3F5EC] border border-[#E7E5DA] rounded-2xl p-4 text-xs text-[#73796F] leading-relaxed mb-6 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#C59A56] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#303D32]">Frontend Demo Notice:</strong> This contact form is a frontend demonstration. In production, our team responds within 12 hours via email or WhatsApp.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button
            onClick={handleReset}
            variant="outline"
            size="md"
            icon={RotateCcw}
            iconPosition="left"
          >
            Send Another Message
          </Button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20BA5C] font-medium text-sm transition-all shadow-xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.83.498 3.543 1.365 5.02L2 22l5.143-1.35c1.43.784 3.064 1.237 4.897 1.237 5.524 0 10.012-4.488 10.012-10.012S17.564 2 12.04 2zm0 18.286c-1.614 0-3.107-.442-4.397-1.208l-.315-.187-3.262.856.871-3.18-.205-.327c-.846-1.348-1.32-2.92-1.32-4.608 0-4.622 3.766-8.388 8.388-8.388 4.622 0 8.388 3.766 8.388 8.388 0 4.622-3.766 8.388-8.388 8.388z" />
            </svg>
            <span>Continue on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#E7E5DA] p-6 sm:p-8 md:p-10 shadow-sm text-left">
      <div className="mb-6 pb-6 border-b border-[#E7E5DA] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#8FA58A] font-semibold">
            Get in Touch
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303D32] mt-1">
            Have Questions About the Circle?
          </h3>
          <p className="text-xs sm:text-sm text-[#73796F] mt-1">
            Feel free to ask about solo safety, room arrangements, weather conditions, or custom trip details.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/20 text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-all duration-200 self-start sm:self-auto shrink-0"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.83.498 3.543 1.365 5.02L2 22l5.143-1.35c1.43.784 3.064 1.237 4.897 1.237 5.524 0 10.012-4.488 10.012-10.012S17.564 2 12.04 2zm0 18.286c-1.614 0-3.107-.442-4.397-1.208l-.315-.187-3.262.856.871-3.18-.205-.327c-.846-1.348-1.32-2.92-1.32-4.608 0-4.622 3.766-8.388 8.388-8.388 4.622 0 8.388 3.766 8.388 8.388 0 4.622-3.766 8.388-8.388 8.388z" />
          </svg>
          <span>Chat Directly</span>
        </a>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Maya Kapoor"
              className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#303D32] placeholder:text-[#A4ACA3] focus:outline-none focus:ring-2 focus:ring-[#42634B] transition-colors ${
                errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E7E5DA] focus:border-[#42634B]'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="maya@example.com"
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
            <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-1.5">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              id="contact-phone"
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
            <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-1.5">
              Topic of Enquiry
            </label>
            <select
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#E7E5DA] bg-white text-sm text-[#303D32] focus:outline-none focus:ring-2 focus:ring-[#42634B]"
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
          <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-1.5">
            Your Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your questions or notes here..."
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#303D32] placeholder:text-[#A4ACA3] focus:outline-none focus:ring-2 focus:ring-[#42634B] transition-colors ${
              errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#E7E5DA] focus:border-[#42634B]'
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
            </p>
          )}
        </div>

        {/* Demo note */}
        <div className="bg-[#F3F5EC] border border-[#E7E5DA] rounded-xl p-3 text-xs text-[#73796F] flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#C59A56] shrink-0" />
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
