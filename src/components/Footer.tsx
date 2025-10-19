const footerQuickLinks = [
  { label: "Home", href: "#home" },
  { label: "Team", href: "#team" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const footerPortfolios = [
  { label: "Aicha", href: "#aicha" },
  { label: "Chaima", href: "#chaima" },
  { label: "Mohamed", href: "#mohamed" },
  { label: "Wassim", href: "#wassim" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full bg-black py-16 md:py-20 lg:py-24 animate-fade-in" style={{ animationDelay: "1.1s" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-lg md:text-xl tracking-[0] leading-6 mb-2">
              Quick Links
            </h3>
            {footerQuickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Inter',Helvetica] font-normal text-[#cccccc] text-base md:text-lg lg:text-xl tracking-[0] leading-6 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-lg md:text-xl tracking-[0] leading-6 mb-2">
              Portfolios
            </h3>
            {footerPortfolios.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Inter',Helvetica] font-normal text-[#cccccc] text-base md:text-lg lg:text-xl tracking-[0] leading-6 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="font-bold text-white [font-family:'Inter',Helvetica] text-lg md:text-xl tracking-[0] leading-6 mb-2">
              Contact
            </h3>
          </div>
        </nav>

        <div className="border-t border-[#333333] pt-8 md:pt-12">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#cccccc] text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6">
            © 2025 TEAM4. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
