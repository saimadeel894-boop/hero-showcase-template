import glovesImg from "@/assets/boxing-gloves.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: About heading + Boxing card */}
          <div>
            <h2 className="font-accent text-5xl md:text-7xl lg:text-8xl text-foreground uppercase mb-8">
              About Us
            </h2>
            <div className="relative bg-primary rounded-2xl p-8 md:p-12 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <h3 className="absolute top-6 left-6 md:top-8 md:left-8 font-accent text-primary-foreground text-4xl md:text-6xl uppercase z-10">
                Boxing
              </h3>
              <img
                src={glovesImg}
                alt="Boxing Gloves"
                className="max-h-[80%] w-auto object-contain relative z-10"
              />
            </div>
          </div>

          {/* Right: Description text */}
          <div className="space-y-6">
            <p className="text-foreground text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
              EIKYO International® is based in Sialkot and powered by global expertise. It develops boxing, martial arts, MMA, and sports gear where enduring quality meets modern performance.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Driven by passion and precision, every EIKYO International® product is designed to empower athletes at every level — from amateurs to professionals — ensuring maximum comfort, durability, and confidence in every movement. Our commitment to superior craftsmanship and cutting-edge materials reflects our dedication to performance without compromise.
            </p>
            <div className="pt-4">
              <p className="font-heading text-primary text-sm font-black uppercase tracking-[0.2em] mb-2">
                Know About Us
              </p>
              <div
                className="text-[100px] md:text-[160px] lg:text-[200px] font-accent leading-none select-none"
                style={{ WebkitTextStroke: "2px hsl(0 100% 50%)", color: "transparent" }}
              >
                2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
