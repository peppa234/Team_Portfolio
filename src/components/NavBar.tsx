import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Home", href: "/", hash: null },
  { label: "Portfolios", href: "/portfolios", hash: null },
  { label: "Contact", href: "/", hash: "#contact" },
];

export const NavBar = (): JSX.Element => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navigationItems[0]) => {
    // If we have a hash and we're on the home page, use smooth scroll
    if (item.hash && isHomePage) {
      e.preventDefault();
      const element = document.querySelector(item.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // If we have a hash but we're NOT on home page, navigate to home with hash
    // The Link component will handle this automatically
  };

  return (
    <header className="w-full py-8 md:py-10 lg:py-12 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-6 sm:gap-8">
          {/* Logo - stays on the left */}
          <Link 
            to="/"
            className="[font-family:'Sora',Helvetica] font-bold text-black text-lg sm:text-xl tracking-[0] leading-normal lg:mr-auto hover:opacity-80 transition-opacity"
          >
            Portfolio.
          </Link>

          {/* Navigation - centered */}
          <nav className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-14 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            {navigationItems.map((item, index) => {
              // Only show active state for Home and Portfolios, not Contact
              // Portfolios is active when on /portfolios OR any individual portfolio page (/portfolio/:slug)
              const isActive = 
                (item.label === "Home" && isHomePage) || 
                (item.label === "Portfolios" && (location.pathname === "/portfolios" || location.pathname.startsWith("/portfolio/")));

              return (
                <Link
                  key={index}
                  to={item.hash ? `${item.href}${item.hash}` : item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`[font-family:'Sora',Helvetica] font-bold text-black text-base sm:text-lg lg:text-xl tracking-[1.80px] leading-normal hover:opacity-80 hover:scale-105 transition-all duration-300 ease-out relative ${
                    isActive ? "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-black after:rounded-full" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
