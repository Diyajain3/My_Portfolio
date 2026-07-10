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
    <section className="bg-white px-6 py-16 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-black md:text-5xl">
          My Services
        </h1>

        <p className="mt-5 text-gray-600 leading-8">
          I create modern, responsive and high-performance web solutions that
          help businesses grow online. From personal portfolios to complete
          e-commerce platforms, every project is designed with performance,
          scalability and user experience in mind.
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
              className="group relative overflow-hidden rounded-3xl border border-green-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl"
            >

              {/* Close Button */}
              {isOpen && (
                <button
                  onClick={() => setOpenIndex(null)}
                  className="absolute right-5 top-5 rounded-full bg-green-100 p-2 transition hover:bg-green-500 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                <Icon size={30} />
              </div>

              {/* Title */}
              <h2 className="mt-6 text-2xl font-semibold text-black">
                {service.serviceName}
              </h2>

              {/* Description */}
              <p className="mt-4 leading-8 text-gray-600">
                {service.myApproach}
              </p>

              {isOpen ? (
                <div className="mt-8 space-y-6">

                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      Skills Used
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {service.skillUsed}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      What You Get
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {service.whatYouGet}
                    </p>
                  </div>

                </div>
              ) : (
                <button
                  onClick={() => setOpenIndex(index)}
                  className="mt-8 flex items-center gap-2 font-medium text-green-500 transition hover:text-green-600"
                >
                  Show More
                  <MoveRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              )}

            </div>
          );
        })}
      </div>
    </section>
  );
}