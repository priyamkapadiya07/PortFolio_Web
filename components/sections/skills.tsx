"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Database, Server, Smartphone, Globe, Cloud, Terminal } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

const skills = [
  { name: "AI-Assisted Web Dev", icon: <Layout className="w-8 h-8 text-blue-400" />, description: "Rapidly building modern UIs with Next.js and Tailwind using AI-driven workflows." },
  { name: "Backend Development", icon: <Server className="w-8 h-8 text-green-400" />, description: "Creating robust APIs and server-side logic with Node.js, Express, and Python." },
  { name: "Database Design", icon: <Database className="w-8 h-8 text-yellow-400" />, description: "Architecting efficient database schemas with PostgreSQL and MongoDB." },
  { name: "Python & Django", icon: <Code className="w-8 h-8 text-purple-400" />, description: "Developing scalable web applications and scripts using Python and Django framework." },
  { name: "Cloud Services", icon: <Cloud className="w-8 h-8 text-sky-400" />, description: "Deploying and managing applications on Vercel for optimal performance." },
  { name: "DevOps", icon: <Terminal className="w-8 h-8 text-red-400" />, description: "Automating workflows with CI/CD pipelines and improving developer experience." },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-gradient-to-b from-transparent to-black/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary">Skills</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I leverage a modern tech stack to build scalable and efficient solutions.
          Here are some of the technologies and areas I specialize in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <GlassCard
            key={skill.name}
            className="group hover:border-primary/50 transition-colors"
            gradient
          >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                <div className="mb-4 p-3 bg-white/5 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                    {skill.description}
                </p>
            </motion.div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
