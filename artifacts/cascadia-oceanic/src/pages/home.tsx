import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@assets/hero.png";
import gallery1 from "@assets/gallery-1.png";
import gallery2 from "@assets/gallery-2.png";
import gallery3 from "@assets/gallery-3.png";
import gallery4 from "@assets/gallery-4.png";
import gallery5 from "@assets/gallery-5.png";
import gallery6 from "@assets/gallery-6.png";

const fadeIn = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

const NAV_LINKS = [
  { label: "Landscapes", href: "#collections" },
  { label: "Seascapes", href: "#collections" },
  { label: "Photo Pairs", href: "https://voting.chrismcnulty.net", external: true },
  { label: "Store", href: "https://www.chrismcnulty.net/store", external: true },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Subscribe", href: "https://www.chrismcnulty.net/subscribe", external: true },
];

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 220]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="min-h-[100dvh] w-full bg-[#161616] text-[#F2F2F2] selection:bg-[#09757A] selection:text-white">

      {/* ── Global Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-6 pb-4 px-6">
        <p className="font-sans text-center text-[11px] tracking-[0.35em] font-light uppercase text-white/90 mb-3">
          Cascadia Oceanic
        </p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="font-sans text-[10px] tracking-[0.22em] uppercase font-light text-white/55 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={heroImg}
            alt="Pacific Northwest coastal cliffs"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4 }}
            className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Story-first landscape and seascape photography
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-sans font-light text-white/70 text-base md:text-lg tracking-wide mb-10"
          >
            Images of the Pacific and Atlantic coasts — and the land in between
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#collections"
              className="font-sans text-xs uppercase tracking-[0.22em] font-light border border-white/40 text-white px-8 py-4 hover:bg-white hover:text-[#161616] transition-all duration-300"
            >
              Explore Landscapes
            </a>
            <a
              href="#collections"
              className="font-sans text-xs uppercase tracking-[0.22em] font-light border border-white/20 text-white/70 px-8 py-4 hover:border-white/60 hover:text-white transition-all duration-300"
            >
              Explore Seascapes
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="py-32 px-6 flex justify-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl text-center"
        >
          <div className="w-px h-12 bg-[#09757A]/40 mx-auto mb-12" />
          <h2 className="font-serif italic text-2xl md:text-3xl text-white mb-8 leading-snug">
            The story matters as much as the view
          </h2>
          <p className="font-sans font-light text-white/65 text-base md:text-lg leading-relaxed">
            Cascadia Oceanic is photography built around place, light, and experience.
            Each image begins with a moment — a long hike, changing weather, or the edge of land
            and water — and ends as a finished piece designed for the wall.
          </p>
          <p className="font-sans font-light text-white/65 text-base md:text-lg leading-relaxed mt-4">
            The work focuses on curated landscape and seascape collections, emphasizing mood,
            restraint, and a sense of presence rather than isolated images.
          </p>
          <div className="w-px h-12 bg-[#09757A]/40 mx-auto mt-12" />
        </motion.div>
      </section>

      {/* ── Featured Collections ── */}
      <section id="collections" className="py-16 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/40 text-center mb-16"
        >
          Featured Collections
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10">
          {[
            { src: gallery1, alt: "Fog-draped sea stacks, Oregon coast", span: "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2" },
            { src: gallery2, alt: "Glacier-carved fjords, British Columbia", span: "md:col-span-1 lg:col-span-2" },
            { src: gallery3, alt: "Rocky coast tide pools", span: "md:col-span-1 lg:col-span-1" },
            { src: gallery5, alt: "Coastal forest meeting the ocean", span: "md:col-span-2 lg:col-span-2" },
            { src: gallery4, alt: "Crashing waves on sea cliffs", span: "md:col-span-1 lg:col-span-1" },
            { src: gallery6, alt: "Solitary sea stack at dusk", span: "md:col-span-1 lg:col-span-1 md:col-start-2 lg:col-start-3" },
          ].map((img, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[380px] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Photo Pairs Section ── */}
      <section className="py-32 px-6 bg-[#0f0f0f]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#09757A]/70 mb-8">
            Community Curation
          </p>
          <h2 className="font-serif italic text-2xl md:text-4xl text-white mb-6 leading-snug">
            Help curate the next exhibition
          </h2>
          <p className="font-sans font-light text-white/60 text-base md:text-lg leading-relaxed mb-10">
            Photo Pairs invites you to help shape future Cascadia Oceanic collections.
            Vote between two images at a time — as often as you like — and help identify
            the work that resonates most.
          </p>
          <a
            href="https://voting.chrismcnulty.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-xs uppercase tracking-[0.22em] font-light border border-[#09757A]/60 text-[#09757A] px-10 py-4 hover:bg-[#09757A] hover:text-white transition-all duration-300"
          >
            Vote in Photo Pairs
          </a>
        </motion.div>
      </section>

      {/* ── Store Section ── */}
      <section className="py-32 px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30 mb-8">
            Prints
          </p>
          <h2 className="font-serif italic text-2xl md:text-4xl text-white mb-6 leading-snug">
            Gallery-quality metal prints
          </h2>
          <p className="font-sans font-light text-white/60 text-base md:text-lg leading-relaxed mb-10">
            Select Cascadia Oceanic images are available as vibrant metal prints chosen for
            depth, contrast, and durability — especially suited to outdoor and coastal photography.
          </p>
          <a
            href="https://www.chrismcnulty.net/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-xs uppercase tracking-[0.22em] font-light border border-white/30 text-white px-10 py-4 hover:bg-white hover:text-[#161616] transition-all duration-300"
          >
            Visit the Print Store
          </a>
        </motion.div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="py-32 px-6 bg-[#0f0f0f]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-px h-12 bg-[#09757A]/40 mx-auto mb-12" />
          <h2 className="font-serif italic text-2xl md:text-3xl text-white mb-8">
            About Cascadia Oceanic
          </h2>
          <p className="font-sans font-light text-white/65 text-base md:text-lg leading-relaxed mb-5">
            Cascadia Oceanic is the photography studio of{" "}
            <span className="text-white/85 font-normal">Chris McNulty</span>, focused on
            story-first landscapes and exhibition-quality presentation.
          </p>
          <p className="font-sans font-light text-white/65 text-base md:text-lg leading-relaxed mb-10">
            Alongside photography, Chris works across writing, music, and technology, applying a
            disciplined, intentional approach to how creative work is curated, released, and sustained.
          </p>
          <a
            href="https://www.chrismcnulty.net"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs uppercase tracking-[0.22em] font-light text-[#09757A] hover:text-white transition-colors duration-300 border-b border-[#09757A]/30 pb-px"
          >
            Learn more about Chris →
          </a>
          <div className="w-px h-12 bg-[#09757A]/40 mx-auto mt-12" />
        </motion.div>
      </section>

      {/* ── Partners Section ── */}
      <section id="partners" className="py-32 px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30 mb-8">
            Partners
          </p>
          <h2 className="font-serif italic text-2xl md:text-3xl text-white mb-10">
            Partners
          </h2>
          <div className="space-y-6 text-left border border-white/8 p-8 md:p-10">
            <p className="font-sans font-light text-white/65 text-base leading-relaxed">
              Cascadia Oceanic partners with{" "}
              <a
                href="https://www.synozur.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-[#09757A] transition-colors duration-300 border-b border-white/20"
              >
                Synozur
              </a>
              , a strategic advisory and software firm focused on go-to-market clarity and execution.
            </p>
            <p className="font-sans font-light text-white/65 text-base leading-relaxed">
              Cascadia Oceanic uses{" "}
              <a
                href="https://orbit.synozur.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-[#09757A] transition-colors duration-300 border-b border-white/20"
              >
                Orbit
              </a>
              , a platform developed by Synozur, to support outbound storytelling across social
              and email — helping releases and collections remain intentional, consistent, and
              cohesive over time.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Subscribe Section ── */}
      <section className="py-32 px-6 bg-[#0f0f0f]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="w-px h-12 bg-[#09757A]/40 mx-auto mb-12" />
          <h2 className="font-serif italic text-2xl md:text-3xl text-white mb-6">
            Stay connected
          </h2>
          <p className="font-sans font-light text-white/60 text-base leading-relaxed mb-10">
            Occasional updates with new photography, print releases, and exhibition news.
            <br />
            No noise. No algorithms. Just photography.
          </p>
          <a
            href="https://www.chrismcnulty.net/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-xs uppercase tracking-[0.22em] font-light border border-[#09757A]/60 text-[#09757A] px-10 py-4 hover:bg-[#09757A] hover:text-white transition-all duration-300"
          >
            Subscribe for updates
          </a>
          <div className="w-px h-12 bg-[#09757A]/40 mx-auto mt-12" />
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-14 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
          <p className="font-sans font-light text-[10px] tracking-[0.3em] uppercase text-white/40">
            © Cascadia Oceanic
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: "Photography by Chris McNulty", href: "https://www.chrismcnulty.net" },
              { label: "Print Store", href: "https://www.chrismcnulty.net/store" },
              { label: "Photo Pairs Voting", href: "https://voting.chrismcnulty.net" },
              { label: "Partner: Synozur", href: "https://www.synozur.com" },
              { label: "Powered in part by Orbit", href: "https://orbit.synozur.com" },
              { label: "Subscribe", href: "https://www.chrismcnulty.net/subscribe" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] tracking-[0.15em] uppercase font-light text-white/30 hover:text-white/70 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
