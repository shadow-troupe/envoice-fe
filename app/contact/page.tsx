"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Mail,
  Phone,
  MessageSquare,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: <Mail className="text-indigo-600" size={32} />,
      title: "Email Us",
      description: "Our team will respond within 24 hours",
      contact: "support@envoice.com",
      link: "mailto:support@envoice.com",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: <Phone className="text-green-600" size={32} />,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm EST",
      contact: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <MessageSquare className="text-blue-600" size={32} />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      link: "#",
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  const supportHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-lg shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-xl shadow-lg">
                <FileText className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Envoice
                </h1>
              </div>
            </Link>

            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 -z-10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            Contact Us
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Have a question or need assistance? We're here to help. Reach out to us through any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Choose Your Preferred Way to Reach Us
              </span>
            </h2>
            <p className="text-gray-600 text-lg">We're available through multiple channels</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group relative bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-indigo-200 hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity -z-10"></div>
                
                <div className={`bg-gradient-to-r ${method.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="bg-white/90 backdrop-blur-sm w-full h-full rounded-2xl flex items-center justify-center">
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                <p className="text-base font-bold text-indigo-600 group-hover:text-purple-600 transition-colors">
                  {method.contact}
                </p>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-indigo-600 font-bold">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 sm:p-12 shadow-2xl border-2 border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                <Clock className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Support Hours</h2>
                <p className="text-gray-600 mt-1">We're here when you need us</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {supportHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-5 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
                >
                  <span className="font-bold text-gray-800 text-lg">{schedule.day}</span>
                  <span className="text-gray-600 font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-100">
              <p className="text-center text-gray-700 font-medium">
                <span className="font-bold text-indigo-600">Note:</span> For urgent matters outside business hours, please email us and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            We're Here to Help
          </h2>
          <p className="text-xl sm:text-2xl text-indigo-100 leading-relaxed mb-8">
            Whether you have a question about features, pricing, need a demo, or anything else, 
            our team is ready to answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@envoice.com"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-gray-50 transform transition-all duration-200 hover:scale-105 shadow-xl font-bold text-lg"
            >
              Send Email Now
            </a>
            <a
              href="tel:+15551234567"
              className="bg-indigo-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-indigo-700/50 transform transition-all duration-200 hover:scale-105 shadow-xl font-bold text-lg border-2 border-white/30"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
         
          <p className="text-gray-400 mb-4">© 2025 Envoice. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}