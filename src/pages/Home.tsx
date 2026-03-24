import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  { icon: "🛡️", title: "Land Claims", desc: "Protect your base with easy land claiming — no griefing, ever. Your cozy home stays safe! 🏡", color: "#db2777", bg: "linear-gradient(135deg,#fce7f3,#ffe4f0)", border: "#f9a8d4" },
  { icon: "🌸", title: "Custom Textures", desc: "Hello Kitty blocks, flowers, mushrooms, and adorable armor sets make the world irresistibly cute. 💕", color: "#a855f7", bg: "linear-gradient(135deg,#f3e8ff,#ede9fe)", border: "#c084fc" },
  { icon: "💰", title: "Sweet Economy", desc: "Earn coins by selling items at player shops. Build your empire one cookie at a time! 🍪", color: "#d97706", bg: "linear-gradient(135deg,#fef9c3,#fef3c7)", border: "#fcd34d" },
  { icon: "🐱", title: "Cute Companions", desc: "Sanrio mobs roam the world — Cinnamoroll, My Melody, Kuromi, Pochacco, and more! ✨", color: "#0891b2", bg: "linear-gradient(135deg,#cffafe,#e0f2fe)", border: "#67e8f9" },
  { icon: "🏰", title: "Cozy Community", desc: "Join a grief-free, toxic-free server where everyone is friendly and creativity thrives. 💖", color: "#be185d", bg: "linear-gradient(135deg,#fce7f3,#fbcfe8)", border: "#f472b6" },
  { icon: "⚔️", title: "Hello Kitty Armor", desc: "Craft the exclusive Hello Kitty armor set with hearts, bows, and full diamond protection. 🎀", color: "#7c3aed", bg: "linear-gradient(135deg,#ede9fe,#ddd6fe)", border: "#a78bfa" },
  { icon: "🍓", title: "Seasonal Events", desc: "Limited-time events, seasonal builds and special drops keep things fresh and exciting. 🎉", color: "#dc2626", bg: "linear-gradient(135deg,#fee2e2,#fecaca)", border: "#fca5a5" },
  { icon: "🎨", title: "Custom GUI", desc: "Pink inventory, heart health bar, bow food bar — every pixel is themed for maximum cuteness. 🌈", color: "#059669", bg: "linear-gradient(135deg,#d1fae5,#a7f3d0)", border: "#6ee7b7" },
];

function downloadInstructions() {
  const link = document.createElement("a");
  link.href = "/KittyCraft-installer.bat";
  link.download = "KittyCraft-installer.bat";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(18px)",
        borderBottom: scrolled ? "1.5px solid hsl(340 50% 88%)" : "1.5px solid transparent",
        boxShadow: scrolled ? "0 2px 22px rgba(219,39,119,0.12)" : "none",
      }}
    >
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shadow-md animate-bob overflow-hidden"
          style={{ background: "linear-gradient(135deg,#fce7f3,#ede9fe)", border: "2px solid hsl(340 50% 88%)" }}
        >
          <img src="/hellokitty-logo.png" alt="Hello Kitty" className="w-9 h-9 object-contain" />
        </div>
        <div>
          <span className="font-black text-lg" style={{ fontFamily: "Nunito, sans-serif", color: "#db2777" }}>
            KittyCraft 🌸
          </span>
          <span className="block text-xs font-bold" style={{ color: "#9878a8", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            The Cutest SMP ✨
          </span>
        </div>
      </a>

      <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
        {["Features", "Gallery", "Join Us"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="no-underline px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-150"
              style={{ color: "#5b3f6b", fontFamily: "Nunito, sans-serif" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "hsl(340 80% 92%)";
                (e.target as HTMLElement).style.color = "#db2777";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "#5b3f6b";
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
          style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", color: "#15803d", fontFamily: "Nunito, sans-serif" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow inline-block" />
          🟢 Online
        </div>
      </div>
    </nav>
  );
}

function FloatingWidget() {
  const [visible, setVisible] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDownload = () => {
    downloadInstructions();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 80, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="fixed right-5 bottom-8 z-50 flex flex-col gap-3 items-end"
        >
          {/* Main CTA card */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: "white",
              border: "2px solid hsl(340 50% 88%)",
              boxShadow: "0 8px 40px rgba(219,39,119,0.28)",
              maxWidth: 220,
            }}
          >
            {/* Top gradient bar */}
            <div style={{ background: "linear-gradient(135deg,#db2777,#a855f7)", padding: "10px 16px" }}>
              <p className="text-white font-black text-sm m-0" style={{ fontFamily: "Nunito, sans-serif" }}>
                🐱 Join KittyCraft!
              </p>
            </div>
            <div className="p-3 flex flex-col gap-2">
              <p className="text-xs m-0 font-bold" style={{ color: "#5b3f6b", fontFamily: "Nunito, sans-serif" }}>
                🌸 kittycraft.online
              </p>
              <p className="text-xs m-0" style={{ color: "#9878a8" }}>Java ✨ Bedrock · Grief-free 💕</p>
              <button
                onClick={handleDownload}
                className="kitty-btn-main rgb-hover-btn text-xs py-2 px-3 w-full justify-center"
                style={{ fontFamily: "Nunito, sans-serif", borderRadius: 10 }}
              >
                <span className="btn-label">{downloaded ? "✓ Downloaded! 💖" : "📥 Get Installer"}</span>
              </button>
            </div>
          </div>

          {/* Scroll-to-top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black shadow-lg transition-transform hover:scale-110"
            style={{ background: "linear-gradient(135deg,#db2777,#a855f7)", border: "2px solid rgba(255,255,255,0.4)" }}
            title="Back to top"
          >
            🔝
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    downloadInstructions();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: "linear-gradient(135deg, #fff0f8 0%, #fce7f3 40%, #ede9fe 100%)",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.18,
        }}
      />

      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, #fce7f3, transparent)" }} />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-25 pointer-events-none" style={{ background: "radial-gradient(circle, #ede9fe, transparent)" }} />

      <span className="paw-deco" style={{ top: "15%", left: "5%", transform: "rotate(-20deg)" }}>🐾</span>
      <span className="paw-deco" style={{ top: "70%", right: "8%", transform: "rotate(15deg)", fontSize: "60px" }}>🐾</span>
      <span className="paw-deco" style={{ top: "40%", left: "2%", fontSize: "50px", opacity: 0.04 }}>🌸</span>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 px-6 md:px-16 max-w-7xl mx-auto w-full py-16">
        <motion.div
          className="flex-1 min-w-0 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-black"
            style={{
              background: "linear-gradient(135deg, #fce7f3, #ede9fe)",
              border: "1.5px solid hsl(340 50% 88%)",
              color: "#db2777",
              fontFamily: "Nunito, sans-serif",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <span>🌸</span> Season 3 — Now Live! ✨
          </div>

          <h1
            className="mb-4 leading-tight"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              letterSpacing: "-0.03em",
              color: "#2d1b35",
            }}
          >
            The World's{" "}
            <span className="gradient-text">Cutest</span>
            <br />
            Minecraft SMP 🐱
          </h1>

          <p className="text-base mb-8 max-w-md" style={{ color: "#5b3f6b", lineHeight: 1.75 }}>
            Step into a 100% cozy, grief-free Minecraft survival world dressed up in Hello Kitty and Sanrio style 🌸
            Custom textures, protected claims, sweet economy, and the friendliest community online. 💕
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <button onClick={handleDownload} className="kitty-btn-main rgb-hover-btn text-base" style={{ fontFamily: "Nunito, sans-serif" }}>
              <span className="btn-label">📥 {downloaded ? "Downloaded! 💖" : "Get Installer"}</span>
            </button>
            <a
              href="https://discord.gg/kittycraft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-base px-5 py-3.5 rounded-2xl no-underline transition-all duration-150"
              style={{
                background: "white",
                border: "2px solid hsl(340 50% 88%)",
                color: "#2d1b35",
                fontFamily: "Nunito, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#f472b6";
                (e.currentTarget as HTMLElement).style.background = "#fff0f8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(340 50% 88%)";
                (e.currentTarget as HTMLElement).style.background = "white";
              }}
            >
              💬 Join Discord
            </a>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#9878a8" }}>Server IP</span>
            <div className="ip-chip text-sm" style={{ fontFamily: "Courier New, monospace", color: "#2d1b35" }}>
              <span>🐱</span>
              <span>kittycraft.online</span>
            </div>
          </div>

          <div className="flex gap-8 flex-wrap">
            {[
              { n: "500+", l: "Active Players 💖" },
              { n: "Grief-Free", l: "Always Safe 🛡️" },
              { n: "Java + Bedrock", l: "Crossplay 🎮" },
            ].map((stat) => (
              <div key={stat.l}>
                <span className="block text-2xl font-black leading-none" style={{ color: "#db2777", fontFamily: "Nunito, sans-serif" }}>
                  {stat.n}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#9878a8" }}>
                  {stat.l}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 min-w-0 max-w-lg w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="hero-image-frame">
              <img src="/hellokitty-banner.jpg" alt="Hello Kitty Minecraft" className="w-full block" />
              <div
                className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 py-3"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(12px)",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#db2777,#a855f7)", color: "white" }}
                >
                  ▶
                </div>
                <div>
                  <p className="text-xs font-black m-0" style={{ color: "#2d1b35" }}>🌸 Your Sanrio Adventure Awaits</p>
                  <p className="text-xs m-0" style={{ color: "#9878a8" }}>All Sanrio characters available as skins ✨</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-4 -right-4 rounded-2xl px-4 py-2 shadow-lg hidden lg:flex items-center gap-2"
              style={{ background: "white", border: "2px solid hsl(340 50% 88%)", fontFamily: "Nunito, sans-serif" }}
            >
              <span>🌸</span>
              <span className="text-xs font-bold" style={{ color: "#db2777" }}>Grief-free 💕</span>
            </div>
            <div
              className="absolute -bottom-6 -left-4 rounded-2xl px-4 py-2 shadow-lg hidden lg:flex items-center gap-2"
              style={{ background: "white", border: "2px solid hsl(340 50% 88%)", fontFamily: "Nunito, sans-serif" }}
            >
              <span>💖</span>
              <span className="text-xs font-bold" style={{ color: "#a855f7" }}>500+ players 🎮</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Colorful background */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #fff0f8 0%, #fce7f3 20%, #f0e6ff 40%, #fef3c7 55%, #e0f7ff 70%, #f0fdf4 85%, #fff0f8 100%)" }} />
      {/* Soft blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle, #f9a8d4, transparent)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-35 pointer-events-none" style={{ background: "radial-gradient(circle, #c084fc, transparent)", filter: "blur(60px)" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-25 pointer-events-none" style={{ background: "radial-gradient(circle, #fcd34d, transparent)", filter: "blur(50px)", transform: "translate(-50%,-50%)" }} />
      <div className="absolute top-1/3 left-0 w-56 h-56 rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, #67e8f9, transparent)", filter: "blur(50px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-black mb-4 uppercase tracking-widest"
            style={{ background: "rgba(255,255,255,0.85)", color: "#db2777", fontFamily: "Nunito, sans-serif", backdropFilter: "blur(8px)" }}
          >
            ✨ Server Features
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif", color: "#2d1b35", letterSpacing: "-0.025em" }}>
            Everything You <span className="gradient-text">Love 💕</span>
          </h2>
          <p className="text-base max-w-lg" style={{ color: "#5b3f6b" }}>
            KittyCraft packs in all the features that make survival cozy, fun, and totally adorable 🌸
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ translateY: -6 }}
              className="p-6 relative overflow-hidden"
              style={{
                background: feat.bg,
                border: `2px solid ${feat.border}`,
                borderRadius: 20,
                boxShadow: `0 4px 20px ${feat.border}55`,
                transition: "box-shadow 0.22s",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${feat.color}, ${feat.border})` }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                style={{ background: "rgba(255,255,255,0.7)", boxShadow: `0 2px 10px ${feat.border}88` }}
              >
                {feat.icon}
              </div>
              <h3 className="text-base font-black mb-2" style={{ fontFamily: "Nunito, sans-serif", color: feat.color }}>{feat.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5b3f6b" }}>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Vibrant layered background */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, #ff6eb4 0%, #fce7f3 20%, #e879f9 40%, #f0abfc 55%, #c084fc 70%, #ddd6fe 85%, #fbcfe8 100%)" }} />

      {/* Floating decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle, #f472b6, transparent)", filter: "blur(60px)", transform: "translate(-30%, -30%)" }} />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-35 pointer-events-none" style={{ background: "radial-gradient(circle, #a855f7, transparent)", filter: "blur(60px)", transform: "translate(30%, -20%)" }} />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle, #ec4899, transparent)", filter: "blur(50px)" }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-35 pointer-events-none" style={{ background: "radial-gradient(circle, #8b5cf6, transparent)", filter: "blur(50px)" }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #fbbf24, transparent)", filter: "blur(70px)", transform: "translate(-50%, -50%)" }} />

      {/* Floating emojis background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[
          { e: "🌸", top: "5%", left: "3%", size: "3rem", opacity: 0.3, animation: "float 6s ease-in-out infinite" },
          { e: "💖", top: "8%", left: "88%", size: "2.5rem", opacity: 0.35, animation: "float 5s ease-in-out infinite 1s" },
          { e: "✨", top: "15%", left: "50%", size: "2rem", opacity: 0.3, animation: "float 7s ease-in-out infinite 0.5s" },
          { e: "🎀", top: "75%", left: "5%", size: "2.5rem", opacity: 0.3, animation: "float 6.5s ease-in-out infinite 1.5s" },
          { e: "🌺", top: "80%", left: "92%", size: "2.5rem", opacity: 0.3, animation: "float 5.5s ease-in-out infinite 2s" },
          { e: "⭐", top: "50%", left: "96%", size: "2rem", opacity: 0.25, animation: "float 8s ease-in-out infinite" },
          { e: "🐱", top: "60%", left: "1%", size: "2.5rem", opacity: 0.25, animation: "float 7s ease-in-out infinite 0.8s" },
          { e: "🍓", top: "30%", left: "95%", size: "2rem", opacity: 0.28, animation: "float 6s ease-in-out infinite 1.2s" },
        ].map((d, i) => (
          <span key={i} style={{ position: "absolute", top: d.top, left: d.left, fontSize: d.size, opacity: d.opacity, animation: d.animation }}>
            {d.e}
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-black mb-4 uppercase tracking-widest"
            style={{ background: "rgba(255,255,255,0.85)", color: "#db2777", fontFamily: "Nunito, sans-serif", backdropFilter: "blur(8px)" }}
          >
            📸 Gallery ✨
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ fontFamily: "Nunito, sans-serif", color: "white", letterSpacing: "-0.025em", textShadow: "0 2px 20px rgba(219,39,119,0.4)" }}>
            See the <span style={{ color: "#fce7f3", textShadow: "0 0 30px rgba(255,255,255,0.6)" }}>Cuteness 💕</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.9)" }}>
            From custom blocks to Sanrio companions — KittyCraft is the most adorable place in Minecraft 🌸✨
          </p>
        </motion.div>

        {/* Featured large image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div
            className="gallery-img overflow-hidden"
            style={{ maxHeight: 420, boxShadow: "0 20px 60px rgba(219,39,119,0.5), 0 0 0 3px rgba(255,255,255,0.4)", border: "2px solid rgba(255,255,255,0.5)" }}
          >
            <img src="/hellokitty-mod.png" alt="KittyCraft world" className="w-full object-cover" style={{ maxHeight: 420 }} />
          </div>
        </motion.div>

        {/* Grid of smaller images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: "/hellokitty-banner.jpg", alt: "Sanrio skins", caption: "🌸 All Sanrio characters" },
            { src: "/screenshot3.png", alt: "Hello Kitty in game", caption: "🐱 Hello Kitty skin ingame" },
            { src: "/gui-inventory.png", alt: "Pink inventory", caption: "💕 Custom Hello Kitty GUI" },
            { src: "/armor-set.png", alt: "Armor set", caption: "⚔️ Exclusive armor sets" },
            { src: "/blocks-plants.png", alt: "Custom blocks", caption: "🌺 Custom blocks & plants" },
            { src: "/hero-bg.png", alt: "KittyCraft world", caption: "🏰 The cozy world" },
          ].map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden"
              style={{
                borderRadius: 16,
                border: "2px solid rgba(255,255,255,0.5)",
                transition: "transform 0.25s, box-shadow 0.25s",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.04, rotate: 1 }}
            >
              <img src={img.src} alt={img.alt} className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div
                className="absolute bottom-0 left-0 right-0 py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}
              >
                <p className="text-xs font-bold m-0" style={{ color: "#db2777", fontFamily: "Nunito, sans-serif" }}>{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinSection() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    downloadInstructions();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="join-us" className="py-24 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, #fff0f8, #ede9fe)" }} />
      <span className="paw-deco" style={{ top: "10%", left: "3%" }}>🐾</span>
      <span className="paw-deco" style={{ bottom: "15%", right: "5%", fontSize: "60px" }}>🐾</span>
      <span className="paw-deco" style={{ top: "50%", right: "2%", fontSize: "45px", opacity: 0.04 }}>🌸</span>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block rounded-full px-4 py-1 text-xs font-black mb-4 uppercase tracking-widest"
              style={{ background: "hsl(340 80% 92%)", color: "#db2777", fontFamily: "Nunito, sans-serif" }}
            >
              🎮 How to Join
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Nunito, sans-serif", color: "#2d1b35", letterSpacing: "-0.025em" }}>
              Ready to Play? <span className="gradient-text">Join Now! 🐱</span>
            </h2>
            <p className="text-base mb-8" style={{ color: "#5b3f6b", maxWidth: 440 }}>
              Jump in on Java or Bedrock 🎮 No mods required — just connect and start your cozy Sanrio adventure! 💕
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { step: "1", title: "🎮 Open Minecraft", desc: "Launch Minecraft Java or Bedrock Edition" },
                { step: "2", title: "🔍 Add Server", desc: "Go to Multiplayer → Add Server" },
                { step: "3", title: "🌸 Enter IP", desc: "Type kittycraft.online and click Join Server" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #db2777, #a855f7)", color: "white", fontFamily: "Nunito, sans-serif" }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <p className="font-black text-sm mb-0.5" style={{ fontFamily: "Nunito, sans-serif", color: "#2d1b35" }}>{s.title}</p>
                    <p className="text-sm" style={{ color: "#5b3f6b" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={handleDownload} className="kitty-btn-main rgb-hover-btn text-base" style={{ fontFamily: "Nunito, sans-serif" }}>
                <span className="btn-label">📥 {downloaded ? "✓ Downloaded! 💖" : "Get Installer"}</span>
              </button>
              <a
                href="https://discord.gg/kittycraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-base px-5 py-3.5 rounded-2xl no-underline transition-all duration-150"
                style={{
                  background: "white",
                  border: "2px solid hsl(340 50% 88%)",
                  color: "#2d1b35",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                💬 Discord
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <div className="hero-image-frame">
              <img src="/gui-inventory.png" alt="Custom inventory" className="w-full block" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="gallery-img overflow-hidden rounded-xl">
                <img src="/armor-set.png" alt="Armor set" className="w-full h-40 object-cover" />
              </div>
              <div className="gallery-img overflow-hidden rounded-xl">
                <img src="/blocks-plants.png" alt="Custom blocks" className="w-full h-40 object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-10 px-6 md:px-16 text-center"
      style={{ background: "linear-gradient(135deg, #db2777, #a855f7)" }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="text-3xl animate-bob inline-block">🐱</div>
        <p className="font-black text-lg" style={{ color: "rgba(255,255,255,0.95)", fontFamily: "Nunito, sans-serif", margin: 0 }}>
          KittyCraft SMP 🌸
        </p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)", margin: 0 }}>
          kittycraft.online · The cutest Minecraft server 💕✨
        </p>
        <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.55)", margin: 0 }}>
          © 2026 KittyCraft. Not affiliated with Sanrio Co., Ltd. or Mojang Studios.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <FloatingWidget />
      <Hero />
      <Features />
      <Gallery />
      <JoinSection />
      <Footer />
    </div>
  );
}
