import boxerImg from "@/assets/boxer-hero.png";
import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import logoImg from "@/assets/eikyo-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-white">
      {/* === LAYER 1: Giant brand text — behind fighter === */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1]">
        <h1
          className="font-accent leading-[0.85] text-primary tracking-[-0.02em] whitespace-nowrap opacity-[0.14]"
          style={{ fontSize: "clamp(60px, 30vw, 600px)" }}
        >
          EIKYO
        </h1>
      </div>

      {/* === LAYER 2: Center fighter === */}
      <div className="absolute inset-0 flex items-end justify-center z-[2] pointer-events-none">
        <img
          src={boxerImg}
          alt="Professional fighter in fighting stance"
          className="h-[65vh] md:h-[90vh] lg:h-[95vh] w-auto object-contain object-bottom drop-shadow-2xl"
        />
      </div>

      {/* === Hero Content Overlay === */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-[3] pointer-events-none px-4 text-center">
        <div className="mt-auto mb-[20vh] md:mb-[15vh]">
          <h2 className="font-heading text-lg md:text-3xl font-black text-black uppercase tracking-widest mb-2">
            Professional Combat Gear
          </h2>
          <p className="font-heading text-xs md:text-sm text-black/60 uppercase tracking-[0.4em]">
            Choice of Champions
          </p>
        </div>
      </div>

      {/* === Floating products — subtle background elements === */}
      <img
        src={glovesImg}
        alt=""
        aria-hidden="true"
        className="absolute top-[15%] left-[5%] w-16 md:w-32 z-[1] animate-float-1 opacity-20"
      />
      <img
        src={headguardImg}
        alt=""
        aria-hidden="true"
        className="absolute top-[10%] right-[10%] w-20 md:w-40 z-[1] animate-float-2 opacity-15"
      />
      <img
        src={uniformImg}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[20%] left-[8%] w-24 md:w-48 z-[1] animate-float-3 opacity-10"
      />

      {/* === Circular brand badge — bottom right === */}
      <div className="absolute bottom-[55px] md:bottom-[70px] right-[12px] md:right-[100px] lg:right-[140px] z-[5]">
        <div className="relative w-20 h-20 md:w-40 md:h-40">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text className="fill-black font-heading text-[15px] font-bold uppercase tracking-[0.3em]">
              <textPath href="#circlePath">
                • EIKYO INTERNATIONAL • EIKYO INTERNATIONAL •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logoImg} alt="EIKYO International" className="w-8 h-8 md:w-16 md:h-16 object-contain rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
