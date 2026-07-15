import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Education() {
  
const ref = useRef<HTMLDivElement>(null);
const [timelineHeight, setTimelineHeight] = useState(500);

useEffect(() => {
  if (ref.current) {
    setTimelineHeight(ref.current.clientHeight);
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setTimelineHeight(entry.target.clientHeight);
      }
    });
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }
}, []);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start center", "end center"],
});

const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 20,
});

const y = useTransform(smoothProgress, [0, 1], [0, Math.max(0, timelineHeight - 22)]);

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
    <section className="py-16 bg-gradient-to-b from-white via-emerald-50 to-emerald-100 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-12 relative z-10 animate-glow-pulse">
        Education
      </h1>

      
      <div ref={ref} className="timeline relative z-10">
        <motion.div
  className="moving-dot"
  style={{ y }}
/>

        {data.map((d, index) => (
          <div className="timeline-item" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="dot hover:animate-pulse"></div>

            <div className="edu-card group hover:scale-105 hover:-translate-y-2">
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
