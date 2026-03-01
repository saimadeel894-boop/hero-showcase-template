const ContactForm = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-8">
              Contact Us
            </h2>
            <div className="w-20 h-1.5 bg-primary mb-12" />

            <div className="space-y-8">
              <div>
                <h4 className="font-heading font-black text-sm text-black uppercase tracking-wider mb-2">Location</h4>
                <p className="text-black/60 text-sm md:text-base">Wiesbaden, Germany</p>
              </div>
              <div>
                <h4 className="font-heading font-black text-sm text-black uppercase tracking-wider mb-2">Email</h4>
                <p className="text-black/60 text-sm md:text-base">info@eikyo-international.com</p>
              </div>
              <div>
                <h4 className="font-heading font-black text-sm text-black uppercase tracking-wider mb-2">Working Hours</h4>
                <p className="text-black/60 text-sm md:text-base">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-white p-8 md:p-12 shadow-xl rounded-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-black/40">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-0 py-3 bg-transparent border-b border-black/10 text-black placeholder:text-black/20 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-black/40">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-0 py-3 bg-transparent border-b border-black/10 text-black placeholder:text-black/20 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-black/40">Message</label>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b border-black/10 text-black placeholder:text-black/20 focus:outline-none focus:border-primary resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full font-heading font-bold text-sm uppercase tracking-wider bg-primary text-white py-4 md:py-5 hover:bg-black transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
