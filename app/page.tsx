"use strict";
import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <div className="flex flex-col gap-0 md:gap-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
