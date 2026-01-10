"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  BarChart3,
  Clock,
  DollarSign,
} from "lucide-react";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <FileText className="text-blue-900" size={28} />,
      title: "Smart Invoicing",
      description:
        "Create professional invoices in seconds with automated calculations.",
    },
    {
      icon: <Users className="text-blue-900" size={28} />,
      title: "Client Management",
      description:
        "Manage all your clients and billing history in one place.",
    },
    {
      icon: <TrendingUp className="text-blue-900" size={28} />,
      title: "Analytics Dashboard",
      description:
        "Track revenue, payments, and business performance.",
    },
    {
      icon: <Zap className="text-blue-900" size={28} />,
      title: "Fast & Reliable",
      description:
        "Optimized for speed so you can invoice and get paid faster.",
    },
    {
      icon: <Shield className="text-blue-900" size={28} />,
      title: "Secure by Default",
      description:
        "Enterprise-grade security with encrypted data storage.",
    },
    {
      icon: <Globe className="text-blue-900" size={28} />,
      title: "Work Anywhere",
      description:
        "Cloud-based access across all your devices.",
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50K+", label: "Invoices Created" },
    { value: "99.9%", label: "Uptime" },
    { value: "$5M+", label: "Processed" },
  ];

  const benefits = [
    "Unlimited invoices and clients",
    "Automated reminders",
    "Detailed financial reports",
    "PDF  export",
    "Custom branding",
    "Priority support",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* NAVIGATION */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          isScrolled
            ? "bg-white border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-900 p-2 rounded-lg">
              <FileText className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-blue-900">
              Envoice
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-blue-900">
              Features
            </a>
            <a href="#benefits" className="hover:text-blue-900">
              Benefits
            </a>
            <Link href="/login" className="hover:text-blue-900">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-semibold"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-3">
              <a href="#features" className="block">
                Features
              </a>
              <a href="#benefits" className="block">
                Benefits
              </a>
              <Link href="/login" className="block">
                Login
              </Link>
              <Link
                href="/signup"
                className="block bg-blue-900 text-white text-center py-3 rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles size={16} />
              Trusted Invoicing Platform
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
              Invoice Smarter.<br />Get Paid Faster.
            </h1>

            <p className="text-lg text-gray-600">
              A professional invoicing platform built for freelancers,
              startups, and growing businesses.
            </p>

            <div className="flex gap-4">
              <Link
                href="/signup"
                className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-800 font-bold flex items-center gap-2"
              >
                Start Free <ArrowRight size={18} />
              </Link>
              <Link
                href="/login"
                className="border border-gray-300 px-8 py-4 rounded-xl font-bold hover:bg-white"
              >
                Sign In
              </Link>
            </div>

            <div className="flex gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={18} />
                No credit card
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={18} />
                Free trial
              </span>
            </div>
          </div>

          {/* INVOICE MOCKUP */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl">
            <div className="bg-blue-900 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold">INVOICE</h3>
                  <p className="text-blue-200 text-sm">#INV-001</p>
                </div>
                <span className="bg-white/20 px-3 py-1 rounded text-sm">
                  PAID
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Service Item {i}
                  </span>
                  <span className="font-semibold">$250.00</span>
                </div>
              ))}

              <div className="border-t pt-4 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="text-xl font-bold text-blue-900">
                  $750.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      {/* <section className="bg-blue-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold">{s.value}</p>
              <p className="text-blue-200">{s.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Features Built for Business
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Why Choose Envoice
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex gap-2">
                  <CheckCircle className="text-green-600" size={18} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-900 text-white p-10 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Start Free Today
            </h3>
            <p className="text-blue-200 mb-6">
              Full access. No credit card required.
            </p>
            <Link
              href="/signup"
              className="block text-center bg-white text-blue-900 py-4 rounded-xl font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Top */}
    <div className="grid md:grid-cols-4 gap-10 mb-12">
      {/* Brand */}
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-900 p-2 rounded-lg">
            <FileText className="text-white" size={22} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Envoice</h3>
            <p className="text-sm text-gray-400">
              Invoicing made simple
            </p>
          </div>
        </div>

        <p className="text-gray-400 max-w-md">
          Envoice helps freelancers and businesses create, send, and
          track professional invoices with ease. Built for speed,
          accuracy, and trust.
        </p>
      </div>

      {/* Product */}
      <div>
        <h4 className="text-white font-semibold mb-4">Product</h4>
        <ul className="space-y-3">
          <li>
            <a
              href="#features"
              className="hover:text-white transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#benefits"
              className="hover:text-white transition-colors"
            >
              Benefits
            </a>
          </li>
          <li>
            <Link
              href="/pricing"
              className="hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/security"
              className="hover:text-white transition-colors"
            >
              Security
            </Link>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-white font-semibold mb-4">Company</h4>
        <ul className="space-y-3">
          <li>
            <Link
              href="/about"
              className="hover:text-white transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} Envoice. All rights reserved.
      </p>

      <div className="flex items-center gap-6">
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
