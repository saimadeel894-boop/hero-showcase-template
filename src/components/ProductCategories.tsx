import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import trainingRopeImg from "@/assets/training-rope.png";

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Boxing Card */}
          <div className="relative group bg-primary aspect-[4/5] md:aspect-square flex flex-col items-center justify-between p-8 md:p-12 overflow-hidden shadow-2xl">
            <h3 className="font-accent text-white text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none relative z-10 self-start">
              BOXING
            </h3>

            {/* Pedestal & Product */}
            <div className="relative flex-1 w-full flex items-center justify-center">
              {/* Pedestal */}
              <div className="absolute bottom-[10%] w-[80%] aspect-[4/1] bg-white/90 rounded-[50%] blur-[2px] shadow-inner" />
              <img
                src={glovesImg}
                alt="Boxing Gear"
                className="relative z-10 max-h-[70%] w-auto object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4"
              />
            </div>
          </div>

          {/* Martial Arts Card */}
          <div className="relative group bg-primary aspect-[4/5] md:aspect-square flex flex-col items-center justify-between p-8 md:p-12 overflow-hidden shadow-2xl">
            <h3 className="font-accent text-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none relative z-10 self-start">
              Martial Arts
            </h3>

            {/* Pedestal & Product */}
            <div className="relative flex-1 w-full flex items-center justify-center">
              {/* Product inside a dark background box for contrast */}
              <div className="w-[85%] aspect-video bg-[#1A1A1A] rounded-2xl overflow-hidden flex items-center justify-center border border-black/20 relative z-10">
                <img
                  src={uniformImg}
                  alt="Martial Arts Gear"
                  className="max-h-[140%] w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
