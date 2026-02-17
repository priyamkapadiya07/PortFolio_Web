"use strict";
import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-12 md:py-20 overflow-hidden">
        {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold text-white">
            Priyam Kapadiya
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Priyam Kapadiya.<br /></p>
        </div>

        <div className="flex items-center gap-6">
          <SocialLink href="https://github.com/priyamkapadiya07" icon={<Github className="w-5 h-5" />} label="Github" />
          <SocialLink href="https://www.linkedin.com/in/priyamkapadiya07" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
          <SocialLink href="kapadiyapriyam36@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-white transition-colors hover:scale-110 transform duration-200"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
