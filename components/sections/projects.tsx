"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "GraphWiz",
    description: "A premium, interactive Web Application for visualizing Graph Traversal algorithms (BFS/DFS). Built with Python (Flask) and Cytoscape.js.",
    tags: ["Python", "Flask", "JavaScript", "Cytoscape.js"],
    image: "/project1.jpg", 
    demo: "https://graphwiz-two.vercel.app/",
    github: "https://github.com/priyamkapadiya07/GraphWiz",
  },
  {
    title: "Flow-Control",
    description: "Simulation of Data Link Layer flow control protocols. Visualizes how data packets are transmitted and acknowledged.",
    tags: ["JavaScript", "HTML/CSS", "C", "Algorithms"],
    image: "/project2.jpg", 
    demo: "https://flow-control-one.vercel.app",
    github: "https://github.com/priyamkapadiya07/Flow-Control",
  },
  {
    title: "Daily-DSA",
    description: "A repository of daily Data Structures and Algorithms problems solved in Python with clean, readable code organization.",
    tags: ["Python", "DSA", "Problem Solving"],
    image: "/project3.jpg", 
    demo: "#", // No live demo for repo
    github: "https://github.com/priyamkapadiya07/Daily-DSA",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
        <p className="text-muted-foreground text-center max-w-2xl">
          A selection of projects that showcase my passion for building clean,
          efficient, and user-centric applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <GlassCard key={index} className="flex flex-col h-full hover:border-primary/50 transition-colors p-0 overflow-hidden group">
            <div className="relative h-48 w-full bg-gradient-to-tr from-gray-800 to-gray-700 overflow-hidden">
                 {/* Image Placeholder with gradient overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl font-bold group-hover:scale-110 transition-transform duration-500">
                    {project.title}
                </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className="flex items-center gap-3 mt-auto">
                    <Button size="sm" variant="outline" className="flex-1" href={project.github} external>
                        <Github className="w-4 h-4 mr-2" /> Code
                    </Button>
                    {project.demo !== "#" && (
                        <Button size="sm" variant="liquid" className="flex-1" href={project.demo} external>
                             Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                    )}
                </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button size="lg" variant="liquid" className="group" href="https://github.com/priyamkapadiya07?tab=repositories" external>
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Section>
  );
}
