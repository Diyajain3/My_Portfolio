import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Education() {
  
const ref = useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start center", "end center"],
});

const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 20,
});

const y = useTransform(smoothProgress, [0, 1], [0, 500]);

  const data = [
    {
      course: "10th",
      address: "Model Senior Secondary School",
      board: "CBSE",
      percent: "80.2%",
    },
    {
      course: "12th",
      address: "Model Senior Secondary School",
      board: "CBSE",
      percent: "88.2%",
    },
    {
      course: "B.Tech (CSIT)",
      address: "KCC Institute of Technology and Management",
      board: "AKTU",
      percent: "8.7 CGPA",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-emerald-50 to-emerald-100 overflow-hidden">
      <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-12">
        Education
      </h1>

      
      <div ref={ref} className="timeline">
        <motion.div
  className="moving-dot"
  style={{ y }}
/>

        {data.map((d, index) => (
          <div className="timeline-item" key={index}>
            <div className="dot"></div>

            <div className="edu-card">
              <h2>{d.course}</h2>
              <h3>{d.address}</h3>

              <div className="flex justify-between mt-4">
                <p>{d.board}</p>
                <p>{d.percent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
