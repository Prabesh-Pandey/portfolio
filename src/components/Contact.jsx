import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ email: '', message: '' });
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState('');
  const [status, setStatus] = useState('');

  // Generate a random 6-digit OTP
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  // Send OTP to user's email using EmailJS
  const sendOtp = async (e) => {
    e.preventDefault();
    setStatus('');
    const newOtp = generateOtp();
    setSentOtp(newOtp);
    try {
      await emailjs.send(
        'service_u6s1hin',
        'template_7jys2dz',
        {
          email: form.email,
          passcode: newOtp,
          time: new Date().toLocaleString()
        },
        'rkEt79t69ZD-1KDqk'
      );
      setStep(2);
      setStatus('OTP sent to your email.');
    } catch (err) {
      setStatus('Failed to send OTP. Please try again.');
    }
  };

  // Handle OTP verification and message sending
  const handleVerify = async (e) => {
    e.preventDefault();
    setStatus('');
    if (otp !== sentOtp) {
      setStatus('Invalid OTP. Please check your email and try again.');
      return;
    }
    // Here you can send the message using EmailJS or Formspree
      try {
        const response = await fetch('https://formspree.io/f/xdkljpvb', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: form.email,
            message: form.message,
          }),
        });
        if (response.ok) {
          setStatus('Message sent!');
          setStep(3);
        } else {
          setStatus('Failed to send message.');
        }
      } catch (error) {
        setStatus('Failed to send message.');
      }
  };

  return (
    <section id="contact" className="relative w-full flex flex-col items-center justify-center py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center drop-shadow-lg tracking-tight">Contact</h2>
      {step === 1 && (
        <form className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 flex flex-col gap-6" onSubmit={sendOtp}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-target"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className="px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-target"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white text-lg font-semibold rounded-full shadow-lg border-2 border-indigo-400 hover:border-blue-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 cursor-target"
          >
            Send OTP
          </button>
          {status && <div className="text-center text-sm mt-2 text-indigo-400">{status}</div>}
        </form>
      )}
      {step === 2 && (
        <form className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 flex flex-col gap-6" onSubmit={handleVerify}>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP sent to your email"
            required
            value={otp}
            onChange={e => setOtp(e.target.value)}
            className="px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-target"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white text-lg font-semibold rounded-full shadow-lg border-2 border-indigo-400 hover:border-blue-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 cursor-target"
          >
            Verify & Send Message
          </button>
          {status && <div className="text-center text-sm mt-2 text-indigo-400">{status}</div>}
        </form>
      )}
      {step === 3 && (
        <p className="text-center text-lg text-indigo-400 mt-8">Message sent! Thank you for contacting.</p>
      )}
      <div className="mt-8 flex gap-6 text-gray-400">
        <a href="mailto:prabesh.code@gmail.com" className="hover:text-indigo-400 transition-colors cursor-target">Email</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors cursor-target">LinkedIn</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors cursor-target">GitHub</a>
      </div>
    </section>
  );
}
