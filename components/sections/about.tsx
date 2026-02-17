"use client";
import * as React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
             {/* Abstract shape or placeholder for image */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-[2rem] blur-2xl -z-10 transform rotate-6" />
                <GlassCard className="w-full h-full flex items-center justify-center p-2 bg-white/5 border-white/10 overflow-hidden">
                     {/* In a real project, use next/image here */}
                     <Image src="/me.jpg" alt="About Me" width={400} height={400} className="rounded-2xl object-cover w-full h-full" />
                </GlassCard>
            </div>
        </div>

        <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                    I am a Computer Engineering Student with a passion for software development. 
                    I enjoy building web applications that solve real-world problems.
                </p>
                <p>
                    My journey involves deep diving into Data Structures and Algorithms, 
                    Experimenting with full-stack technologies, and creating tools that enhance productivity.
                </p>
                <p>
                    From Python scripting to exploring modern web frameworks like Next.js 
                    through AI-assisted development, I leverage the latest tools to build efficient solutions.
                </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-1">15+</h3>
                    <p className="text-sm text-muted-foreground">Repositories</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-white mb-1">DSA</h3>
                    <p className="text-sm text-muted-foreground">Daily Practice</p>
                </div>
                 <div>
                    <h3 className="text-3xl font-bold text-white mb-1">Web</h3>
                    <p className="text-sm text-muted-foreground">Development</p>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
}
