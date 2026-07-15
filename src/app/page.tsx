"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SplashScreen from "@/components/layout/SplashScreen";
import AnimatedBackground3D from "@/components/AnimatedBackground3D";
import Education from "@/sections/Education";
import Hero from "@/sections/Hero"
import Project from "@/sections/Project"
import Service from "@/sections/Service"
import Profile from "@/sections/Profile"
import { useState } from "react";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";



export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
    <AnimatedBackground3D />
    {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
    <main>
     <Navbar/>
      <section id="hero" > <Hero/> </section>
      <section id="education" ><Education/></section>
      <section id="skills"><Skills/></section>
      <section id="services"><Service/></section>
      <section id="projects" ><Project/> </section>
      <section id="profile" ><Profile/></section>
      <section id="experience" ><Experience/></section>
      <section id="contact" ><Contact/></section>
      <Footer/>
    </main>
    </>
  );
}
