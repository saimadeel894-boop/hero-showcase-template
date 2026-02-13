import boxerImg from "@/assets/boxer-hero.png";
import glovesImg from "@/assets/boxing-gloves.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-background flex items-center">
      {/* Large ARBITER text behind boxer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h1 className="font-heading font-black text-[18vw] lg:text-[14vw] leading-none text-stroke-red tracking-tighter whitespace-nowrap">
          ARBITER
        </h1>
      </div>

      {/* Content layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 py-12 lg:py-0">
        {/* Left side */}
        <div className="flex flex-col gap-6 lg:gap-10 lg:w-1/3 text-center lg:text-left">
          <div>
            <p className="font-heading text-foreground text-xs tracking-[0.3em] mb-2 uppercase">
              Combat Sports Equipment
            </p>
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-tight">
              Choice<br />Of<br />Champions
            </h2>
          </div>
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xs">30+</span>
            </div>
            <p className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider">
              Years Of<br />Experience
            </p>
          </div>
        </div>

        {/* Center — Boxer image */}
        <div className="lg:w-1/3 flex justify-center relative">
          <img
            src={boxerImg}
            alt="Professional boxer in fighting stance"
            className="w-64 md:w-80 lg:w-96 object-contain relative z-10 drop-shadow-2xl"
          />
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center lg:items-end gap-8 lg:w-1/3">
          {/* 5K+ customers */}
          <div className="text-center lg:text-right">
            <p className="font-heading font-black text-4xl lg:text-5xl text-foreground">5K+</p>
            <p className="font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Customers
            </p>
            {/* Mini product thumbnails */}
            <div className="flex gap-2 mt-3 justify-center lg:justify-end">
              <div className="w-12 h-12 rounded-lg bg-secondary overflow-hidden">
                <img src={glovesImg} alt="Boxing gloves" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-secondary overflow-hidden">
                <img src={glovesImg} alt="Product" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Rotating badge */}
          <div className="relative w-28 h-28 lg:w-32 lg:h-32">
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
                  • ARBITER INTERNATIONAL • SIALKOT PAKISTAN •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-primary text-3xl font-heading font-bold">♥</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating gloves - left */}
      <img
        src={glovesImg}
        alt=""
        className="hidden lg:block absolute left-0 bottom-8 w-32 opacity-40 -rotate-12 pointer-events-none z-0"
      />

      {/* Floating gloves - right */}
      <img
        src={glovesImg}
        alt=""
        className="hidden lg:block absolute right-4 top-12 w-24 opacity-30 rotate-12 pointer-events-none z-0"
      />
    </section>
  );
};

export default HeroSection;
