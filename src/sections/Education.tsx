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
    <section className="relative overflow-hidden bg-[#0d0e0c] px-6 py-24 text-[#f4f3ee]">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-[#c8f169] mb-12">
        Education
      </h1>

      
      <div ref={ref} className="timeline mt-16 space-y-8">
        <motion.div
  className="moving-dot"
  style={{ y }}
/>

        {data.map((d, index) => (
          <div className="timeline-item" key={index}>
            <div className="dot"></div>

            <div className="edu-card rounded-2xl border border-[#2b2d28] bg-[#20221e] p-6 shadow-xl">
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
