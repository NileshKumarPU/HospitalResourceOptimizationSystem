import React from "react";
import {
  Activity,
  Calendar,
  CreditCard,
  Pill,
  BarChart3,
  ShieldCheck,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <Activity size={28} />,
    title: "Patient Management",
    desc: "Store and manage patient records securely and efficiently.",
  },
  {
    icon: <Calendar size={28} />,
    title: "Appointment Scheduling",
    desc: "Easy scheduling, rescheduling and real-time availability.",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Billing & Invoicing",
    desc: "Automated billing, insurance and payment management.",
  },
  {
    icon: <Pill size={28} />,
    title: "Pharmacy Management",
    desc: "Track medicines, inventory and prescriptions easily.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Reports & Analytics",
    desc: "Smart reports to make better healthcare decisions.",
  },
];

export default function HospitalLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* NAVBAR */}
      <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-xl">
              <Activity size={28} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-blue-700">
                MediCare
              </h1>
              <p className="text-xs text-gray-500">
                Hospital Management System
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#" className="text-blue-600">
              Home
            </a>
            <a href="#">Features</a>
            <a href="#">Modules</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="border border-blue-200 px-5 py-2 rounded-xl text-blue-600 font-medium hover:bg-blue-50 transition">
              Login
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl flex items-center gap-2 font-medium shadow-lg">
              Get Started
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <ShieldCheck size={16} />
            Smart Management. Better Healthcare.
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
            Simplify Hospital
            <br />
            Operations.
            <br />
            Improve Patient Care.
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
            MediCare HMS is an all-in-one hospital management solution
            designed to streamline workflows, reduce administrative
            burden, and enhance patient experience.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-semibold shadow-xl flex items-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </button>

            <button className="border border-blue-200 bg-white hover:bg-blue-50 transition px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 text-blue-700">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-3 mt-10 text-gray-600">
            <ShieldCheck className="text-blue-600" size={22} />
            Trusted by 500+ Hospitals Worldwide
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <div className="relative">
          {/* Dashboard Card */}
          <div className="bg-white rounded-[32px] shadow-2xl p-6 border border-gray-100">
            {/* Top */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Dashboard</h2>

              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 px-4 py-2 rounded-xl outline-none"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                "Patients",
                "Appointments",
                "Admissions",
                "Revenue",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-2xl p-4"
                >
                  <p className="text-sm text-gray-500">{item}</p>
                  <h3 className="text-2xl font-bold mt-2">
                    {index === 3 ? "₹ 28.4L" : `${(index + 1) * 324}`}
                  </h3>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-gray-50 rounded-2xl p-5 h-56">
                <h3 className="font-semibold mb-4">
                  Appointments Overview
                </h3>

                <div className="h-40 flex items-end gap-3">
                  {[40, 70, 55, 90, 65, 110, 80].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="bg-blue-500 w-full rounded-t-xl"
                    />
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-semibold mb-4">
                  Department-wise Patients
                </h3>

                <div className="flex justify-center items-center h-40">
                  <div className="w-36 h-36 rounded-full border-[18px] border-blue-500 border-t-blue-200 border-r-blue-300"></div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="mt-6 bg-gray-50 rounded-2xl p-5">
              <h3 className="font-semibold mb-4">
                Recent Appointments
              </h3>

              <div className="space-y-4">
                {[
                  "Rahul Sharma",
                  "Priya Verma",
                  "Amit Kumar",
                ].map((name, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-white p-4 rounded-xl"
                  >
                    <div>
                      <h4 className="font-semibold">{name}</h4>
                      <p className="text-sm text-gray-500">
                        Cardiology
                      </p>
                    </div>

                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Confirmed
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"
            alt="Doctor"
            className="hidden lg:block absolute -bottom-10 -right-16 w-72 object-cover"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white shadow-xl border border-gray-100 rounded-[32px] p-10 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="font-bold text-lg mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}