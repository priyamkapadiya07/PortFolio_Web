"use client";
import * as React from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <Section id="contact" className="pb-32">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's work <br /><span className="text-primary">together</span></h2>
            <p className="text-muted-foreground text-lg mb-8">
                I'm currently available for freelance projects and full-time opportunities.
                If you have a project that needs some creative touch, I'd love to hear about it.
            </p>

            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-full text-primary">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-white transition-colors">kapadiyapriyam36@gmail.com</a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-full text-primary">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                         <h4 className="font-medium text-white">Phone</h4>
                         <a href="tel:+1234567890" className="text-muted-foreground hover:text-white transition-colors">+91 9687232448</a>
                    </div>
                </div>

                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-full text-primary">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                         <h4 className="font-medium text-white">Location</h4>
                         <p className="text-muted-foreground">Available Remote</p>
                    </div>
                </div>
            </div>
        </div>

        <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                        <Input 
                            id="name" 
                            placeholder="John Doe" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                     <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="john@example.com" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                    <Input 
                        id="subject" 
                        placeholder="Project Inquiry" 
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea 
                        id="message" 
                        rows={4} 
                        className="flex w-full rounded-lg border border-input bg-white/5 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:bg-white/10 resize-none"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {status === 'success' && (
                    <p className="text-green-400 text-sm">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                )}

                <Button className="w-full mt-4" size="lg" type="submit" variant="liquid" isLoading={status === 'loading'}>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                </Button>
            </form>
        </GlassCard>
      </div>
    </Section>
  );
}
