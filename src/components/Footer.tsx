import logoImg from "@/assets/eikyo-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={logoImg} alt="EIKYO International" className="h-14 w-auto object-contain brightness-0 invert" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              EIKYO International is a leading manufacturer of premium combat sports equipment, dedicated to empowering athletes worldwide.
            </p>
            <div className="flex gap-4">
              {[
                { label: "FB", href: "https://www.facebook.com/profile.php?id=61576976498498" },
                { label: "IG", href: "https://www.instagram.com/eikyointernational" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 font-heading text-[10px] font-bold"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Catalogue", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-widest mb-8">Categories</h4>
            <ul className="space-y-4">
              {["Boxing", "Martial Arts", "MMA", "Training Gear", "Safety"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-primary font-bold">A</span>
                <p className="text-white/40 text-sm">Wiesbaden, Germany</p>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">E</span>
                <p className="text-white/40 text-sm">info@eikyo-international.com</p>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">W</span>
                <a href="https://eikyoint.com" className="text-white/40 text-sm hover:text-primary transition-colors">www.eikyoint.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-widest font-heading font-bold">
            © 2026 EIKYO International. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-widest font-heading font-bold hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-widest font-heading font-bold hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
