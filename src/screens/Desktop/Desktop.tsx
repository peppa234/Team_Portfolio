import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";


const teamMembers = [
  {
    name: "Chaima",
    image: "/Chaima.png",
    description: "A 3rd Year AI student passionate about AI",
  },
  {
    name: "Wassim",
    image: "/Wassim.png",
    description: "A 3rd Year AI student passionate about AI",
  },
  {
    name: "Aicha",
    image: "/Aicha.png",
    description: "A 3rd Year AI student passionate about AI",
  },
  {
    name: "Mohamed",
    image: "/Mohamed.png",
    description: "A 3rd Year AI student passionate about AI",
  },
  {
    name: "Wanis",
    image: "/Wanis.png",
    description: "A 3rd Year AI student passionate about AI",
  },
];


export const Desktop = (): JSX.Element => {
  const location = useLocation();

  // Handle hash navigation when landing on the page
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="bg-white w-full overflow-x-hidden">
     <NavBar />

      {/* Hero Section */}
      <section id="home" className="relative w-full py-4 md:py-6 lg:py-8 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Hero Title - "Discover The Bright Minds of Evkeria Team" */}
          <div className="flex justify-center mb-4 md:mb-6 lg:mb-8">
            <div 
              className="font-[Sora] relative w-[350px] h-[120px] max-sm:w-[350px] max-sm:h-[120px] max-lg:w-[800px] max-lg:h-[90px] lg:w-[1094px] lg:h-[121px]"
            >
              <div className="flex flex-wrap items-center justify-center gap-2 h-full">
                {/* Left part - "Discover The" */}
                <span 
                  className="text-[24px] max-lg:text-[36px] lg:text-[48px] font-[700] leading-normal tracking-[0.24px] max-lg:tracking-[0.36px] lg:tracking-[0.48px] text-[#000000] drop-shadow-[0_4px_7.1px_rgba(0,0,0,0.27)] animate-fade-in"
                  style={{ 
                    WebkitTextStrokeWidth: '1px', 
                    WebkitTextStrokeColor: '#000',
                    animationDelay: "0.1s" 
                  }}
                >
                  Discover The
                </span>

                {/* Middle words - "Bright Minds" */}
                <div className="flex items-center gap-2">
                  <span 
                    className="text-[24px] max-lg:text-[36px] lg:text-[48px] font-[400] leading-normal tracking-[4.56px] max-lg:tracking-[6.84px] lg:tracking-[9.12px] text-[#FFFFFF] drop-shadow-[0_4px_7.1px_rgba(0,0,0,0.27)] inline-block animate-fade-in"
                    style={{ 
                      WebkitTextStrokeWidth: '4px', 
                      WebkitTextStrokeColor: '#000',
                      transform: 'rotate(-3.737deg)',
                      animationDelay: "0.2s"
                    }}
                  >
                    Bright
                  </span>
                  <span 
                    className="text-[24px] max-lg:text-[36px] lg:text-[48px] font-[700] leading-normal tracking-[2.64px] max-lg:tracking-[3.96px] lg:tracking-[5.28px] text-[#000000] drop-shadow-[0_4px_7.1px_rgba(0,0,0,0.27)] inline-block animate-fade-in"
                    style={{ 
                      transform: 'rotate(-3.737deg)',
                      animationDelay: "0.25s"
                    }}
                  >
                    Minds
                  </span>
                </div>

                {/* Right part - "of Evkeria Team" */}
                <span 
                  className="text-[24px] max-lg:text-[36px] lg:text-[48px] font-[400] leading-normal tracking-[0.24px] max-lg:tracking-[0.36px] lg:tracking-[0.48px] text-[#000000] drop-shadow-[0_4px_7.1px_rgba(0,0,0,0.27)] animate-fade-in"
                  style={{ 
                    WebkitTextStrokeWidth: '1px', 
                    WebkitTextStrokeColor: '#000',
                    animationDelay: "0.15s"
                  }}
                >
                  of <span className="font-[700]">Evkeria</span> Team
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image with Vectors */}
          <div className="relative flex items-center justify-center mb-4 md:mb-6 lg:mb-8">
            <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10">
              {/* Decorative Vectors - positioned at corners */}
              <img
                className="absolute left-0 bottom-0 w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 animate-fade-in opacity-90 z-10"
                alt="Vector"
                src="/vector-2.svg"
                style={{ animationDelay: "0.35s" }}
              />
              <img
                className="absolute right-0 top-0 w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 animate-fade-in opacity-90 z-20"
                alt="Vector"
                src="/vector-1.svg"
                style={{ animationDelay: "0.35s" }}
              />
              <img
                className="relative z-0 w-full h-auto object-cover animate-fade-in transition-transform duration-500 hover:scale-105"
                alt="Element team spirit"
                src="/558-team-spirit-1.png"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-center max-w-3xl mx-auto [font-family:'Sora',Helvetica] font-normal text-black text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-relaxed animate-fade-in px-4 mt-3 md:mt-4" style={{ animationDelay: "0.3s" }}>
            <span className="font-light">Discover </span>
            <span className="font-bold">G8-TEAM4</span>
            <span className="font-light"> team members through this portfolio</span>
          </p>

        </div>  
      </section>

      {/* Who Are We Section */}
      <section className="relative w-full py-16 md:py-20 lg:py-24 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-black rounded-[3rem] md:rounded-[5rem] lg:rounded-[7rem] shadow-[0px_4px_4px_#00000040,0px_4px_4px_#00000040,-11px_4px_8.9px_#00000040,9px_4px_10.3px_#000000a3] transition-shadow duration-500 hover:shadow-[0px_6px_6px_#00000040,0px_6px_6px_#00000040,-13px_6px_12px_#00000040,11px_6px_14px_#000000a3] py-12 md:py-16 lg:py-20 px-6 sm:px-8 md:px-12 lg:px-16 relative">
            {/* Decorative Vectors */}
            <div className="absolute top-8 right-8 md:top-10 md:right-12 flex flex-col gap-2 md:gap-4">
              <img className="w-8 md:w-10 h-8 md:h-10" alt="Vector" src="/vector-3.svg" />
              <img className="w-8 md:w-10 h-8 md:h-10" alt="Vector" src="/vector-3.svg" />
            </div>

            <h2 className="[text-shadow:0px_4px_25.7px_#ffffff96] [font-family:'Parkinsans',Helvetica] font-normal text-transparent text-center mb-8 md:mb-12 lg:mb-16">
              <span className="inline-block font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight mr-3 md:mr-4">
                Who are
              </span>
              <span className="inline-block font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight">
                WE
              </span>
            </h2>

            <p className="max-w-5xl mx-auto [font-family:'Sora',Helvetica] font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center tracking-tight leading-relaxed mb-8 md:mb-12">
              <span>We are a team of five </span>
              <span className="font-bold">ENSIA</span>
              <span> software engineering students working collaboratively on a semester project</span>
            </p>

            <p className="max-w-5xl mx-auto [font-family:'Sora',Helvetica] font-normal text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center tracking-tight leading-relaxed">
              Each member contributes unique skills in development, design, and project management, aiming to build a functional and user-focused software solution.
            </p>
          </div>
        </div>

        {/* Floating Portrait */}
        <div className="hidden lg:block absolute top-0 right-4 xl:right-12 2xl:right-24">
          <img
            className="w-64 xl:w-80 h-64 xl:h-80 rounded-full object-cover animate-fade-in transition-transform duration-500 hover:scale-105 hover:rotate-3 shadow-xl"
            alt="My notion face"
            src="/my-notion-face-portrait-1.png"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

      
      </section>

      {/* Team Members Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white rounded-[2rem] shadow-[9px_4px_10.3px_#00000026,-5px_4px_13.7px_#00000040,0px_-6px_11.8px_#00000040] animate-fade-in transition-all duration-300 hover:shadow-[12px_8px_18px_#00000033,-8px_8px_20px_#00000050,0px_-8px_16px_#00000050] hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <CardContent className="flex flex-col items-center p-6 md:p-8">
                  <img
                    className="w-full max-w-[12rem] md:max-w-[14rem] h-auto aspect-square object-cover transition-transform duration-300 hover:scale-105 mb-4 md:mb-6"
                    alt={member.name}
                    src={member.image}
                  />

                  <h3 className="[text-shadow:0px_4px_15.7px_#0000002e] [font-family:'Sora',Helvetica] font-bold text-black text-3xl md:text-4xl tracking-wide leading-normal mb-4 md:mb-6">
                    {member.name}
                  </h3>

                  <p className="[font-family:'Sora',Helvetica] font-light text-black text-lg md:text-xl lg:text-2xl text-center tracking-tight leading-relaxed max-w-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* View All Portfolios Button */}
      <div className="w-full py-12 md:py-16 flex justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <Link to="/portfolios" className="w-full max-w-md mx-4">
          <Button className="w-full h-auto py-6 md:py-8 px-8 md:px-10 bg-black rounded-[2rem] shadow-[0px_4px_11.3px_#00000040] hover:bg-black/90 hover:scale-105 hover:shadow-[0px_6px_20px_#00000060] transition-all duration-300">
            <span className="[font-family:'Sora',Helvetica] font-bold text-white text-lg md:text-xl lg:text-2xl text-center tracking-wide leading-relaxed">
              View All Portfolios
            </span>
          </Button>
        </Link>
      </div>

      {/* Amazing Minds Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 animate-fade-in" style={{ animationDelay: "0.9s" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                className="w-full max-w-md lg:max-w-lg object-cover animate-fade-in transition-transform duration-500 hover:scale-105 rounded-lg"
                alt="Team"
                src="/image-1.png"
                style={{ animationDelay: "0.9s" }}
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8 lg:space-y-12">
              <div>
                <h2 className="[text-shadow:0px_4px_10.8px_#00000040] [font-family:'Sora',Helvetica] font-light text-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4 md:mb-6">
                  Discover The
                </h2>
                <h2 className="[text-shadow:0px_4px_10.8px_#00000040] [font-family:'Sora',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight ml-0 md:ml-12 lg:ml-24">
                  Amazing Minds
                </h2>
              </div>

              <p className="[font-family:'Sora',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-relaxed">
                <span className="font-light">Discover our </span>
                <span className="font-bold">Team</span>
                <span className="font-light">, a passionate team of </span>
                <span className="font-bold">ENSIA</span>
                <span className="font-light"> students dedicated to building innovative and impactful </span>
                <span className="font-bold">software solutions.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button className="w-full sm:w-auto h-auto py-4 md:py-5 px-8 md:px-10 bg-black rounded-[2rem] hover:bg-black/90 hover:scale-105 hover:shadow-[0px_6px_20px_#00000060] transition-all duration-300">
                  <span className="[text-shadow:0px_4px_4px_#00000040] font-bold text-white text-base md:text-lg lg:text-xl tracking-wide [font-family:'Sora',Helvetica] leading-normal">
                    Discover More
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-auto py-4 md:py-5 px-8 md:px-10 rounded-[2rem] border-2 md:border-[3px] border-solid border-black hover:bg-black/5 hover:scale-105 hover:shadow-[0px_6px_20px_#00000030] transition-all duration-300"
                >
                  <span className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Sora',Helvetica] font-bold text-black text-base md:text-lg lg:text-xl tracking-wide leading-normal">
                    Contact Us
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
