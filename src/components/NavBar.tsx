const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Portfolios", href: "#portfolios" },
  { label: "Contact", href: "#contact" },
];

export const NavBar = (): JSX.Element => {
  return (
    <header className="w-full py-8 md:py-10 lg:py-12 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-6 sm:gap-8">
          {/* Logo - stays on the left */}
          <div className="[font-family:'Sora',Helvetica] font-bold text-black text-lg sm:text-xl tracking-[0] leading-normal lg:mr-auto">
            Portfolio.
          </div>

          {/* Navigation - centered */}
          <nav className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-14 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`[font-family:'Sora',Helvetica] font-bold text-black text-base sm:text-lg lg:text-xl tracking-[1.80px] leading-normal hover:opacity-80 hover:scale-105 transition-all duration-300 ease-out relative ${
                  index === 0 ? "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-black after:rounded-full" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
