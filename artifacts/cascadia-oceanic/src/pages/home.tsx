import { motion, useScroll, useTransform } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import heroImg from "@assets/hero.png";
import gallery1 from "@assets/gallery-1.png";
import gallery2 from "@assets/gallery-2.png";
import gallery3 from "@assets/gallery-3.png";
import gallery4 from "@assets/gallery-4.png";
import gallery5 from "@assets/gallery-5.png";
import gallery6 from "@assets/gallery-6.png";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollY } = useScroll();
  
  // Subtle parallax effect for hero
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#161616] text-[#F2F2F2] selection:bg-[#09757A] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 mix-blend-difference pointer-events-none">
        <h1 className="font-sans text-center text-sm md:text-base tracking-[0.3em] font-light uppercase text-white/90">
          Cascadia Oceanic
        </h1>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={heroImg} 
            alt="Coastal cliff seascape" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif italic text-4xl md:text-6xl lg:text-8xl text-white font-medium"
          >
            Landscapes and Seascapes
          </motion.h2>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {[
            { src: gallery1, alt: "Fog-draped sea stacks", span: "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2" },
            { src: gallery2, alt: "Glacier-carved fjords", span: "md:col-span-1 lg:col-span-2" },
            { src: gallery3, alt: "Rocky coast tide pools", span: "md:col-span-1 lg:col-span-1" },
            { src: gallery5, alt: "Coastal forest mist", span: "md:col-span-2 lg:col-span-2" },
            { src: gallery4, alt: "Crashing waves on cliffs", span: "md:col-span-1 lg:col-span-1" },
            { src: gallery6, alt: "Solitary sea stack", span: "md:col-span-1 lg:col-span-1 md:col-start-2 lg:col-start-3" },
          ].map((img, i) => (
            <motion.div 
              key={i}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 md:px-8 flex justify-center items-center">
        <motion.div 
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl text-center space-y-8"
        >
          <div className="w-px h-16 bg-[#09757A] mx-auto opacity-50"></div>
          <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white/90">
            "Cascadia Oceanic captures the raw, untamed beauty of Pacific Northwest coastlines and seascapes. From the fog-draped sea stacks of Oregon to the glacier-carved fjords of British Columbia, these images explore the meeting point of land and sea."
          </p>
          <div className="w-px h-16 bg-[#09757A] mx-auto opacity-50"></div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 md:px-8 bg-[#101010]">
        <motion.div 
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-16">
            <h3 className="font-serif italic text-3xl md:text-4xl text-white mb-4">Inquire</h3>
            <p className="font-sans text-white/60 font-light text-sm md:text-base">For prints, licensing, and assignments.</p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 border border-white/10 p-8"
            >
              <p className="font-serif italic text-2xl text-white mb-2">Message received</p>
              <p className="text-white/60 font-light">We will return to you shortly.</p>
            </motion.div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans font-light uppercase tracking-widest text-xs text-white/70">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="" 
                          {...field} 
                          className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#09757A] text-lg font-serif italic text-white placeholder:text-white/20 transition-colors h-12"
                        />
                      </FormControl>
                      <FormMessage className="font-sans font-light text-xs text-[#09757A]" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans font-light uppercase tracking-widest text-xs text-white/70">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="" 
                          {...field} 
                          className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#09757A] text-lg font-serif italic text-white placeholder:text-white/20 transition-colors h-12"
                        />
                      </FormControl>
                      <FormMessage className="font-sans font-light text-xs text-[#09757A]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans font-light uppercase tracking-widest text-xs text-white/70">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="" 
                          {...field} 
                          className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#09757A] text-lg font-serif italic text-white placeholder:text-white/20 transition-colors min-h-[120px] resize-none"
                        />
                      </FormControl>
                      <FormMessage className="font-sans font-light text-xs text-[#09757A]" />
                    </FormItem>
                  )}
                />

                <div className="pt-4 text-center">
                  <Button 
                    type="submit" 
                    className="bg-transparent hover:bg-[#09757A] text-white border border-white/30 hover:border-[#09757A] rounded-none px-12 py-6 font-sans uppercase tracking-[0.2em] font-light text-xs transition-all duration-300"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="font-sans font-light text-xs tracking-widest uppercase text-white/40">
          © 2024 Cascadia Oceanic
        </p>
      </footer>
    </div>
  );
}
