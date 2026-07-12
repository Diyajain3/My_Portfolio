import {
  Globe,
  Smartphone,
  BriefcaseBusiness,
  ShoppingCart,
  MoveRight,
  X,
} from "lucide-react";
import { useState } from "react";

const servicedata = [
  {
    serviceIcon: Globe,
    serviceName: "Web Development",
    myApproach:
      "I design and build modern, high-performance websites from the ground up — focused on clean UI, scalable architecture, and a smooth user experience.",
    skillUsed:
      "React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Node.js, Express.js, MongoDB, Git",
    whatYouGet:
      "A responsive website with clean code, fast performance, SEO optimization, and scalable architecture.",
  },
  {
    serviceIcon: Smartphone,
    serviceName: "Mobile-Friendly Web Apps",
    myApproach:
      "I create responsive web applications that work perfectly on phones, tablets, laptops, and desktops.",
    skillUsed:
      "React.js, Tailwind CSS, Responsive Design, CSS Grid, Flexbox",
    whatYouGet:
      "A seamless experience across every device with optimized layouts and smooth performance.",
  },
  {
    serviceIcon: BriefcaseBusiness,
    serviceName: "Portfolio & Business Websites",
    myApproach:
      "Professional websites that showcase your brand, services, and achievements with a clean modern design.",
    skillUsed:
      "React.js, Tailwind CSS, JavaScript, Framer Motion",
    whatYouGet:
      "Beautiful portfolio or business website with contact form, responsive UI, and SEO-friendly pages.",
  },
  {
    serviceIcon: ShoppingCart,
    serviceName: "E-Commerce Websites",
    myApproach:
      "Secure and scalable online stores with product management and modern shopping experiences.",
    skillUsed:
      "React.js, Node.js, Express.js, MongoDB, JWT Authentication",
    whatYouGet:
      "Complete shopping website including authentication, products, orders, payments, and responsive UI.",
  },
];

export default function Service() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-emerald-50 via-white to-emerald-50 px-6 py-20 md:px-12 lg:px-20 overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent">
            My Services
          </h1>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            I create modern, responsive and high-performance web solutions that help businesses grow online. From personal portfolios to complete e-commerce platforms, every project is designed with performance, scalability and user experience in mind.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">

          {servicedata.map((service, index) => {
            const Icon = service.serviceIcon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-emerald-200 bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Close Button */}
                {isOpen && (
                  <button
                    onClick={() => setOpenIndex(null)}
                    className="absolute right-5 top-5 rounded-full bg-emerald-100 p-2 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:scale-110 z-20"
                  >
                    <X size={18} />
                  </button>
                )}

                {/* Icon */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-emerald-400/50">
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h2 className="relative z-10 mt-6 text-2xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">
                  {service.serviceName}
                </h2>

                {/* Description */}
                <p className="relative z-10 mt-4 leading-relaxed text-gray-700">
                  {service.myApproach}
                </p>

                {isOpen ? (
                  <div className="relative z-10 mt-8 space-y-6 animate-slideInUp">

                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900">
                        Skills Used
                      </h3>

                      <p className="mt-3 leading-relaxed text-gray-700">
                        {service.skillUsed}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900">
                        What You Get
                      </h3>

                      <p className="mt-3 leading-relaxed text-gray-700">
                        {service.whatYouGet}
                      </p>
                    </div>

                  </div>
                ) : (
                  <button
                    onClick={() => setOpenIndex(index)}
                    className="relative z-10 mt-8 flex items-center gap-2 font-semibold text-emerald-600 transition-all duration-300 hover:text-emerald-700 group/btn"
                  >
                    Show More
                    <MoveRight
                      size={18}
                      className="transition-transform duration-300 group-hover/btn:translate-x-2"
                    />
                  </button>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
