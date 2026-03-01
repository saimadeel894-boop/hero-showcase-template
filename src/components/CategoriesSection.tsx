import uniformImg from "@/assets/martial-arts-uniform.png";
import glovesImg from "@/assets/boxing-gloves.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 md:py-32 bg-[#121212]">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col gap-24 md:gap-32">
          {/* Vertical Item 1 */}
          <div className="relative group flex flex-col items-center">
            <div className="bg-white rounded-3xl w-full aspect-[4/5] md:aspect-[5/4] flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
              <img src={uniformImg} alt="Product" className="max-h-[110%] w-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute -bottom-10 right-0 md:right-[-40px] font-accent text-white/5 text-[80px] md:text-[120px] pointer-events-none select-none">
              EIKYO
            </div>
          </div>

          {/* Vertical Item 2 */}
          <div className="relative group flex flex-col items-center">
            <div className="bg-white rounded-3xl w-full aspect-[4/5] md:aspect-[5/4] flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
              {/* Product with branding text overlay inside */}
              <div className="absolute inset-0 flex items-center justify-center font-accent text-black/10 text-[60px] md:text-[100px] pointer-events-none select-none">
                BRANDING
              </div>
              <img src={glovesImg} alt="Product" className="max-h-[85%] w-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>

          {/* Vertical Item 3 */}
          <div className="relative group flex flex-col items-center">
            <div className="bg-white rounded-3xl w-full aspect-[4/5] md:aspect-[5/4] flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
              <img src={mmaGlovesImg} alt="Product" className="max-h-[85%] w-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
