import { MessageSquare, PenTool, CheckCircle, Shield, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We understand your team's needs, including styles, colors, logos, and customization, while offering expert guidance.",
  },
  {
    icon: PenTool,
    title: "Design & Customization",
    description: "Using advanced tools, we create unique designs with personalized names, logos, and artwork. Digital mockups are shared for approval.",
  },
  {
    icon: CheckCircle,
    title: "Approval & Production",
    description: "After approval, we use premium materials and advanced printing techniques to create vibrant, durable sportswear.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Each item undergoes strict quality checks to ensure it matches the approved design.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "We ship on time, worldwide, with full tracking so your team stays game-ready in style.",
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="font-heading text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-6">
            Our Process
          </h2>
          <div className="w-20 h-1.5 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              <div className="font-accent text-primary/10 text-8xl absolute -top-10 left-0 pointer-events-none select-none">
                0{index + 1}
              </div>
              <div className="relative z-10 pt-4 border-t border-black/10 mt-2">
                <h3 className="font-heading font-black text-sm md:text-base text-black uppercase tracking-wider mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-black/60 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 p-8 md:p-16 bg-[#121212] rounded-[40px] text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h2 className="font-heading text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 relative z-10">
            Ready to gear up with EIKYO?
          </h2>
          <a
            href="#contact"
            className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-white px-10 py-4 hover:bg-white hover:text-primary transition-all duration-300 relative z-10"
          >
            Start Your Order
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
