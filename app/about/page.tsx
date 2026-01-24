"use client";

import Link from "next/link";
import {
  FileText,
  Target,
  Heart,
  Zap,
  Shield,
  Globe,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do. Your success is our success.",
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Innovation",
      description: "We constantly innovate to bring you the best invoicing experience possible.",
    },
    {
      icon: <Shield className="text-blue-500" size={32} />,
      title: "Security",
      description: "Your data security is our top priority. Bank-level encryption on all transactions.",
    },
    {
      icon: <Target className="text-green-500" size={32} />,
      title: "Simplicity",
      description: "We believe great software should be simple to use yet powerful in functionality.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Sparkles size={16} />
            Our Story
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Envoice
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            We're on a mission to simplify invoicing for businesses worldwide. 
            Envoice was created to help businesses of all sizes get paid faster 
            and manage their finances with confidence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Envoice is a modern invoicing platform designed to make financial management 
                effortless for businesses of every size. We understand that managing invoices 
                shouldn't be complicated or time-consuming. That's why we've built a solution 
                that combines powerful features with an intuitive interface.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our platform helps businesses create professional invoices in minutes, track 
                payments automatically, and gain valuable insights into their financial health. 
                Whether you're a freelancer, small business owner, or managing a growing enterprise, 
                Envoice adapts to your needs.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">What We Do</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We provide a comprehensive invoicing solution that streamlines your entire 
                billing process. From creating and sending invoices to tracking payments and 
                generating reports, Envoice handles it all. Our platform automates repetitive 
                tasks, reduces errors, and gives you more time to focus on growing your business.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With features like customizable templates, automated reminders, multi-currency 
                support, and real-time analytics, we give you the tools you need to maintain 
                healthy cash flow and professional client relationships. Our commitment to 
                security means your data is always protected with bank-level encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                What Drives Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white" size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-indigo-100 text-lg leading-relaxed">
                To empower businesses of all sizes with powerful, intuitive invoicing tools 
                that save time, reduce errors, and help them get paid faster. We believe 
                every business deserves access to professional financial management tools 
                that are both affordable and easy to use.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Globe className="text-white" size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To become the world's most trusted invoicing platform, helping businesses 
                streamline their financial operations globally. We envision a future where 
                invoicing is effortless, secure, and accessible to everyone, enabling 
                businesses to focus on what they do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:border-indigo-200 transform transition-all duration-300 hover:-translate-y-3"
              >
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Envoice?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-12">
            We're more than just an invoicing tool. We're your partner in business success, 
            committed to providing exceptional service, continuous innovation, and unwavering 
            support. Our platform grows with you, adapting to your changing needs while 
            maintaining the simplicity and reliability you depend on.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">Fast & Efficient</h4>
              <p className="text-gray-600 text-sm">Create invoices in seconds, not hours</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">Secure & Reliable</h4>
              <p className="text-gray-600 text-sm">Bank-level security for your peace of mind</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all">
              <div className="text-3xl mb-2">💡</div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">Smart & Intuitive</h4>
              <p className="text-gray-600 text-sm">Designed for everyone, no learning curve</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join businesses worldwide who trust Envoice for their invoicing needs - completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-xl hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-xl font-bold text-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-50 transform transition-all duration-200 hover:scale-105 shadow-xl font-bold text-lg border-2 border-gray-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-xl">
              <FileText className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold">Envoice</h3>
          </div>
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