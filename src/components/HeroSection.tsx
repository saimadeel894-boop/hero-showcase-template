import boxerImg from "@/assets/boxer-hero.png";
import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import logoImg from "@/assets/eikyo-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-white">
      {/* === LAYER 1: Giant brand text — solid red, behind fighter === */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1]">
        <h1
          className="font-accent leading-[0.85] text-primary tracking-[-0.02em] whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 28vw, 550px)", opacity: 0.85 }}
        >
          EIKYO
        </h1>
      </div>

      {/* === LAYER 2: Center fighter — above text === */}
      <div className="absolute inset-0 flex items-end justify-center z-[2] pointer-events-none">
        <img
          src={boxerImg}
          alt="Professional fighter in fighting stance"
          className="h-[60vh] md:h-[85vh] lg:h-[92vh] w-auto object-contain object-bottom"
        />
      </div>

      {/* === "choice of champions" — left side like reference === */}
      <div className="absolute top-[35%] left-[5%] md:left-[8%] z-[3] pointer-events-none hidden md:block">
        <p className="font-heading text-sm md:text-base font-bold text-foreground lowercase tracking-[0.15em]">
          choice of champions
        </p>
      </div>

      {/* === 5K+ CUSTOMERS — top right === */}
      <div className="absolute top-[12%] right-[5%] md:right-[8%] z-[4]">
        <h3 className="font-heading font-black text-sm md:text-xl text-foreground uppercase tracking-wider">
          5K+ Customers
        </h3>
        <div className="flex -space-x-2 mt-2">
          {[glovesImg, headguardImg, shinGuardsImg, mmaGlovesImg].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-contain bg-secondary border-2 border-white"
            />
          ))}
        </div>
      </div>

      {/* === 10 Years Of Experience — bottom left === */}
      <div className="absolute bottom-[8%] md:bottom-[12%] left-[5%] md:left-[8%] z-[4]">
        <h3 className="font-accent text-4xl md:text-6xl text-foreground leading-none">10+</h3>
        <p className="font-heading text-xs md:text-sm text-foreground/70 mt-1">Years Of Experience</p>
      </div>

      {/* === Floating products — full opacity, clean PNGs like reference === */}
      <img
        src={glovesImg}
        alt=""
        aria-hidden="true"
        className="absolute top-[12%] left-[3%] md:left-[6%] w-20 md:w-36 z-[1] animate-float-1"
      />
      <img
        src={headguardImg}
        alt=""
        aria-hidden="true"
        className="absolute top-[8%] right-[15%] md:right-[20%] w-16 md:w-28 z-[1] animate-float-2 opacity-60"
      />
      <img
        src={uniformImg}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[15%] left-[3%] md:left-[5%] w-20 md:w-36 z-[1] animate-float-3 opacity-80"
      />
      <img
        src={shinGuardsImg}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[30%] right-[3%] md:right-[5%] w-14 md:w-24 z-[1] animate-float-4 opacity-50"
      />

      {/* === Circular brand badge — bottom right === */}
      <div className="absolute bottom-[8%] md:bottom-[10%] right-[5%] md:right-[8%] z-[5]">
        <div className="relative w-24 h-24 md:w-40 md:h-40">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text className="fill-foreground font-heading text-[15px] font-bold uppercase tracking-[0.3em]">
              <textPath href="#circlePath">
                • EIKYO INTERNATIONAL • EIKYO INTERNATIONAL •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logoImg} alt="EIKYO International" className="w-10 h-10 md:w-16 md:h-16 object-contain rounded-full" />
          </div>
        </div>
      </div>

      {/* === Mobile: choice of champions at bottom center === */}
      <div className="absolute bottom-[25%] left-0 right-0 z-[3] pointer-events-none md:hidden text-center">
        <p className="font-heading text-xs font-bold text-foreground lowercase tracking-[0.15em]">
          choice of champions
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
