export default function SubzEmpireVibes() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950 to-black opacity-95"></div>

      {/* Neon Glow */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-5 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 bg-black/30">
          <h1 className="text-2xl md:text-3xl font-black tracking-widest text-pink-400">
            SUBZ EMPIRE VIBES
          </h1>

          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="#home" className="hover:text-pink-400 transition">Home</a>
            <a href="#about" className="hover:text-pink-400 transition">About</a>
            <a href="#music" className="hover:text-pink-400 transition">Music</a>
            <a href="#gallery" className="hover:text-pink-400 transition">Gallery</a>
            <a href="#blog" className="hover:text-pink-400 transition">Blog</a>
            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
          </div>
        </nav>

        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center text-center px-6"
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-pink-500/40 mb-8 animate-pulse">
            <span className="text-6xl font-black">S</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black uppercase leading-tight">
            <span className="text-pink-400">Subz</span>{" "}
            <span className="text-cyan-400">Empire</span>{" "}
            <span className="text-white">Vibes</span>
          </h2>

          <p className="mt-6 text-xl md:text-3xl text-gray-300 font-semibold tracking-widest">
            #YES_EMPIRE
          </p>

          <p className="max-w-2xl mt-6 text-gray-400 text-lg">
            Feel the bass. Enter the neon dimension. DJ remixes, EDM vibes,
            cinematic beats and creator energy — all in one empire.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <a
              href="https://www.youtube.com/@SubzEmpireVibes"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-pink-500 hover:scale-105 transition font-bold shadow-lg shadow-pink-500/30"
            >
              YouTube Channel
            </a>

            <a
              href="#music"
              className="px-8 py-4 rounded-2xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition font-bold"
            >
              Explore Music
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-black mb-6 text-pink-400">
                About Subz Empire
              </h3>

              <p className="text-gray-300 leading-8 text-lg">
                Subz Empire Vibes is a futuristic music and content creator
                platform built for remix lovers, EDM fans, bass addicts and
                night vibe dreamers. Here you’ll experience cinematic beats,
                emotional remixes, powerful drops and a unique digital vibe.
              </p>

              <p className="text-gray-400 leading-8 text-lg mt-6">
                This empire is not just music — it’s energy, emotion and pure
                sound experience.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg shadow-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <h4 className="text-5xl font-black text-cyan-400">24/7</h4>
                  <p className="text-gray-400 mt-2">Music Energy</p>
                </div>

                <div>
                  <h4 className="text-5xl font-black text-pink-400">∞</h4>
                  <p className="text-gray-400 mt-2">Creative Vibes</p>
                </div>

                <div>
                  <h4 className="text-5xl font-black text-yellow-400">EDM</h4>
                  <p className="text-gray-400 mt-2">Festival Feel</p>
                </div>

                <div>
                  <h4 className="text-5xl font-black text-green-400">8D</h4>
                  <p className="text-gray-400 mt-2">Audio Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Music */}
        <section id="music" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-5xl font-black text-center text-cyan-400 mb-16">
              Music Universe
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Bollywood EDM Remixes",
                "Emotional DJ Mixes",
                "8D Bass Boosted",
                "Night Drive Music",
                "Future Bass Vibes",
                "Cinematic Audio Experience",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black/50 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-xl"
                >
                  <div className="text-5xl mb-4">🎧</div>
                  <h4 className="text-2xl font-bold mb-4">{item}</h4>
                  <p className="text-gray-400">
                    Experience powerful sound design, emotional melodies and
                    cinematic drops.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
          <h3 className="text-5xl font-black text-center text-pink-400 mb-16">
            Visual Vibes
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-72 rounded-3xl bg-gradient-to-br from-pink-500/30 to-cyan-500/30 border border-white/10 backdrop-blur-md flex items-center justify-center text-6xl hover:scale-105 transition"
              >
                ⚡
              </div>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="py-24 px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-5xl font-black text-center text-yellow-400 mb-16">
              Latest Updates
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-black/60 rounded-3xl overflow-hidden border border-white/10"
                >
                  <div className="h-48 bg-gradient-to-r from-pink-500/40 to-cyan-500/40"></div>

                  <div className="p-6">
                    <h4 className="text-2xl font-bold mb-3">
                      New Remix Drop #{item}
                    </h4>

                    <p className="text-gray-400 mb-4">
                      Explore new futuristic sounds and emotional music vibes.
                    </p>

                    <button className="text-pink-400 font-bold hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social */}
        <section className="py-24 px-6 text-center">
          <h3 className="text-5xl font-black mb-12 text-cyan-400">
            Connect With Empire
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.youtube.com/@SubzEmpireVibes"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-red-600 hover:scale-105 transition font-bold"
            >
              YouTube
            </a>

            <a
              href="https://instagram.com/subzempirevibes"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-pink-600 hover:scale-105 transition font-bold"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com/subzempirevibes"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-blue-600 hover:scale-105 transition font-bold"
            >
              Facebook
            </a>

            <a
              href="https://t.me/subzempirevibes"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-cyan-600 hover:scale-105 transition font-bold"
            >
              Telegram
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-3xl border border-white/10 p-10 backdrop-blur-lg shadow-2xl">
            <h3 className="text-5xl font-black text-center text-pink-400 mb-10">
              Contact Empire
            </h3>

            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-pink-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-pink-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-pink-500"
              ></textarea>

              <button className="bg-gradient-to-r from-pink-500 to-cyan-500 py-4 rounded-2xl font-black text-lg hover:scale-[1.02] transition">
                Send Message
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center border-t border-white/10 text-gray-400">
          <p>
            © 2026 Subz Empire Vibes • Built With Neon Energy ⚡
          </p>
        </footer>
      </div>
    </div>
  );
}
