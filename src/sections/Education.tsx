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
    <section className="py-20 bg-green-50">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-16">
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