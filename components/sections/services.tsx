"use client";
import * as React from "react";
import { Layers, Palette, Globe, Code } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

const services = [
  {
    title: "Web Development",
    icon: <Globe className="w-10 h-10 text-primary" />,
    description: "Building fast and responsive websites by leveraging AI tools for accelerated development and optimization.",
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-10 h-10 text-pink-500" />,
    description: "Creating intuitive and visually stunning user interfaces that provide a seamless user experience.",
  },
  {
    title: "Python & Django",
    icon: <Code className="w-10 h-10 text-blue-500" />,
    description: "Developing robust backends and automation scripts using Python and Django.",
  },

  {
    title: "Full Stack Solutions",
    icon: <Layers className="w-10 h-10 text-purple-500" />,
    description: "End-to-end development services, from database design to frontend implementation.",
  },
];

export function Services() {
  return (
      <Section id="services" className="relative">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary">Services</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions for your digital needs.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <GlassCard key={index} className="hover:border-primary/30 group transition-all duration-300">
                    <div className="mb-4 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                </GlassCard>
            ))}
        </div>
      </Section>
  )
}
