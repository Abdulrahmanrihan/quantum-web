'use client'

import { useState } from 'react'

// A simple spinner icon component you can place in the same file or import
const Spinner = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear the error for a field as the user starts typing in it again
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    // --- SIMULATED API CALL ---
    // In a real app, you would replace this with a fetch() call to your API endpoint.
    // For example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate a random success or failure
    if (Math.random() > 0.1) { // 90% chance of success
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setSubmissionStatus('error');
    }
    // --- END SIMULATION ---

    setIsSubmitting(false);
  };


  return (
    <main className="container mx-auto px-4 py-12">
      <section className="relative mx-auto bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl">
        <div className="relative grid grid-cols-1 md:grid-cols-2 z-10">
          <div className="p-8 sm:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#060120]">Contact Us</h1>
            <p className="mb-8 text-gray-700">
              Interested in joining or partnering with Quantum Club? Reach out to us!
            </p>

            {/* Submission Status Messages */}
            {submissionStatus && (
              <div
                role="alert"
                aria-live="assertive"
                className={`p-4 mb-6 rounded-lg text-white ${submissionStatus === 'success' ? 'bg-green-600' : 'bg-red-600'
                  }`}
              >
                {submissionStatus === 'success'
                  ? "Thank you! Your message has been sent successfully."
                  : "Something went wrong. Please try again later."}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-semibold text-[#060120] mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full h-14 shadow-sm text-gray-800 placeholder:text-gray-500 text-lg bg-gray-100 rounded-lg border focus:outline-none focus:ring-2 py-2 px-4 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-indigo-500'}`}
                  placeholder="e.g., Jane Doe"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
                {errors.name && <p id="name-error" className="text-red-600 text-sm mt-2">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-semibold text-[#060120] mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-14 shadow-sm text-gray-800 placeholder:text-gray-500 text-lg bg-gray-100 rounded-lg border focus:outline-none focus:ring-2 py-2 px-4 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-indigo-500'}`}
                  placeholder="you@example.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && <p id="email-error" className="text-red-600 text-sm mt-2">{errors.email}</p>}
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-lg font-semibold text-[#060120] mb-2">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full shadow-sm resize-none text-gray-800 placeholder:text-gray-500 bg-gray-100 rounded-lg text-lg border focus:outline-none focus:ring-2 px-4 py-3 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-indigo-500'}`}
                  placeholder="Your message here..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                  required
                ></textarea>
                {errors.message && <p id="message-error" className="text-red-600 text-sm mt-2">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-700 text-white py-3 rounded-lg font-semibold text-lg flex items-center justify-center hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Spinner /> : 'Send Message'}
              </button>
            </form>
            <div className="mt-8 text-center text-gray-600 text-sm">
              Or email us directly: <a href="mailto:contact@quantum.eg" className="text-indigo-700 underline hover:text-indigo-900">contact@quantum.eg</a>
            </div>
          </div>

          <div className="relative hidden md:block">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2A3DFB] via-[#BD4AD1] to-[#FC432F] opacity-95" />
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: "url('/assets/pattern-white.jpg')" }} />
          </div>
        </div>
      </section>
    </main>
  )
}