import glovesImg from "@/assets/boxing-gloves.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <div className="mb-12">
          <p className="font-heading text-sm md:text-base font-bold text-black/60 uppercase tracking-[0.4em] mb-4">
            At EIKYO International
          </p>
          <p className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed font-medium mb-12">
            Based in Wiesbaden and powered by global expertise, we develop boxing, martial arts, MMA, and sports gear where enduring quality meets modern performance.
          </p>
          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-16 max-w-3xl mx-auto">
            Driven by passion and precision, every EIKYO International® product is designed to empower athletes at every level — from amateurs to professionals — ensuring maximum comfort, durability, and confidence in every movement. Our commitment to superior craftsmanship and cutting-edge materials reflects our dedication to performance without compromise.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-heading text-primary text-sm md:text-base font-black uppercase tracking-[0.2em] mb-2">
            Know About Us
          </h2>
          <div
            className="text-[120px] md:text-[200px] lg:text-[260px] font-accent leading-none text-primary/20 select-none"
            style={{ WebkitTextStroke: "2px hsl(0 100% 50%)", color: "transparent" }}
          >
            2026
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
