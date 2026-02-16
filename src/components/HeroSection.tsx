import boxerImg from "@/assets/boxer-hero.png";
import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import trainingRopeImg from "@/assets/training-rope.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[85vh] overflow-hidden bg-background">
      {/* Floating product images with animations */}
      {/* Top-left: Boxing glove */}
      <img
        src={glovesImg}
        alt=""
        className="absolute top-[8%] left-[12%] w-24 md:w-32 lg:w-40 opacity-[0.85] z-[5] animate-float-1 pointer-events-none select-none"
        aria-hidden="true"
      />
      {/* Red arrow pointing to glove */}
      <svg className="absolute top-[6%] left-[22%] md:left-[20%] w-12 h-12 z-[6] text-primary animate-float-1" viewBox="0 0 40 40" fill="none">
        <path d="M30 5L15 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 20L18 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 20L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>

      {/* Bottom-left: Head guard */}
      <img
        src={headguardImg}
        alt=""
        className="absolute bottom-[18%] left-[8%] w-20 md:w-28 lg:w-36 opacity-[0.75] z-[5] animate-float-3 pointer-events-none select-none"
        aria-hidden="true"
      />
      {/* Red arrow pointing down to 30+ */}
      <svg className="absolute bottom-[42%] left-[6%] w-10 h-16 z-[6] text-primary" viewBox="0 0 30 50" fill="none">
        <path d="M15 0L15 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 40L8 33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 40L22 33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>

      {/* Bottom-right: Martial arts uniform */}
      <img
        src={uniformImg}
        alt=""
        className="absolute bottom-[22%] right-[18%] w-20 md:w-28 lg:w-36 opacity-[0.75] z-[5] animate-float-2 pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* Additional floating products for variety */}
      <img
        src={shinGuardsImg}
        alt=""
        className="absolute top-[55%] right-[5%] w-14 md:w-20 opacity-[0.15] z-0 animate-float-4 pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      />
      <img
        src={mmaGlovesImg}
        alt=""
        className="absolute top-[60%] left-[3%] w-12 md:w-16 opacity-[0.12] z-0 animate-float-5 pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      />
      <img
        src={trainingRopeImg}
        alt=""
        className="absolute top-[5%] right-[35%] w-12 md:w-16 opacity-[0.10] z-0 animate-float-6 pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      />

      {/* Large EIKYO text — solid red, full width behind boxer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1]">
        <h1 className="font-heading font-black text-[28vw] md:text-[22vw] lg:text-[18vw] leading-[0.85] text-primary tracking-[-0.04em] whitespace-nowrap">
          EIKYO
        </h1>
      </div>

      {/* Center boxer image */}
      <div className="absolute inset-0 flex items-end justify-center z-[3] pointer-events-none">
        <img
          src={boxerImg}
          alt="Professional boxer in fighting stance"
          className="w-[65%] md:w-[45%] lg:w-[38%] max-w-[550px] object-contain drop-shadow-2xl mix-blend-multiply"
        />
      </div>

      {/* CHOICE OF CHAMPIONS — below EIKYO text, left-center */}
      <div className="absolute bottom-[20%] md:bottom-[25%] left-1/2 -translate-x-1/2 md:left-[28%] md:translate-x-0 z-[4] pointer-events-none select-none">
        <p className="font-heading font-black text-lg md:text-xl lg:text-2xl text-foreground uppercase tracking-[0.15em]">
          Choice Of Champions
        </p>
      </div>

      {/* 5K+ CUSTOMERS — top right */}
      <div className="absolute top-[6%] right-[4%] md:right-[6%] z-[6] text-right">
        <p className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground">5K+</p>
        <p className="font-heading font-bold text-xs md:text-sm text-foreground uppercase tracking-[0.2em]">
          Customers
        </p>
        {/* Red arrow */}
        <svg className="w-16 h-4 text-primary mt-1 ml-auto" viewBox="0 0 60 15" fill="none">
          <path d="M0 8H50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M50 8L43 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M50 8L43 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        {/* Product thumbnail row */}
        <div className="flex gap-1.5 mt-2 justify-end">
          {[glovesImg, headguardImg, shinGuardsImg, mmaGlovesImg, uniformImg].map((src, i) => (
            <div key={i} className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-secondary overflow-hidden border-2 border-background shadow-sm">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* 30+ Years of Experience — bottom left */}
      <div className="absolute bottom-[4%] left-[4%] md:left-[6%] z-[6]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-heading font-bold text-sm md:text-base">30+</span>
          </div>
          <p className="font-heading text-sm md:text-base font-bold text-foreground uppercase tracking-wider leading-tight">
            Years Of<br />Experience
          </p>
        </div>
      </div>

      {/* Rotating circular badge — bottom right */}
      <div className="absolute bottom-[3%] right-[4%] md:right-[6%] z-[6]">
        <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full animate-spin-slow"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text className="fill-foreground font-heading text-[16px] font-bold uppercase tracking-[0.3em]">
              <textPath href="#circlePath">
                • EIKYO INTERNATIONAL • SIALKOT PAKISTAN •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary text-3xl lg:text-4xl font-heading font-bold">♥</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
