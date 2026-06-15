"use client";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Championships from "@/components/Championships";
import Quote from "@/components/Quote";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <div className="scan-line" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Quote />
        <Stats />
        <Championships />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
