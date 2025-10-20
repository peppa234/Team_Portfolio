import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { teamMembers } from "../../data/teamData";

/**
 * PortfolioList component - Displays all team members with cards
 * Each card includes a "View portfolio" button that links to the individual portfolio page
 * Uses the same card styling as the landing page for consistency
 */
export const PortfolioList = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <NavBar />

      <main>
        {/* Header Section */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-10 lg:py-12">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Sora',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide leading-tight">
              Team Portfolios
            </h1>
            <p className="[font-family:'Sora',Helvetica] font-normal text-[#363434] text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-relaxed mt-3 md:mt-4 px-4">
              Explore the portfolios of our talented team members
            </p>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={member.slug}
                className="bg-white rounded-[2rem] shadow-[9px_4px_10.3px_#00000026,-5px_4px_13.7px_#00000040,0px_-6px_11.8px_#00000040] animate-fade-in transition-all duration-300 hover:shadow-[12px_8px_18px_#00000033,-8px_8px_20px_#00000050,0px_-8px_16px_#00000050] hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <CardContent className="flex flex-col items-center p-4 sm:p-6 md:p-8">
                  {/* Member Image */}
                  <img
                    className="w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto aspect-square object-cover transition-transform duration-300 hover:scale-105 mb-4 md:mb-6"
                    alt={member.name}
                    src={member.image}
                  />

                  {/* Member Name */}
                  <h3 className="[text-shadow:0px_4px_15.7px_#0000002e] [font-family:'Sora',Helvetica] font-bold text-black text-xl sm:text-2xl md:text-3xl tracking-wide leading-tight mb-2 md:mb-3 text-center">
                    {member.name}
                  </h3>

                  {/* Member Role */}
                  <p className="[font-family:'Sora',Helvetica] font-semibold text-black text-sm sm:text-base md:text-lg text-center tracking-tight mb-3 md:mb-4 lg:mb-6 px-2">
                    {member.role}
                  </p>

                  {/* Member Description */}
                  <p className="[font-family:'Sora',Helvetica] font-light text-black text-base sm:text-lg md:text-xl text-center tracking-tight leading-relaxed mb-4 md:mb-6 lg:mb-8 px-2">
                    {member.description}
                  </p>

                  {/* View Portfolio Button */}
                  <Link to={`/portfolio/${member.slug}`} className="w-full px-2">
                    <Button className="w-full h-auto py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 bg-black rounded-3xl shadow-[0px_4px_11.3px_#00000040] hover:bg-black/90 hover:scale-105 hover:shadow-[0px_6px_20px_#00000060] transition-all duration-300">
                      <span className="[font-family:'Sora',Helvetica] font-bold text-white text-sm sm:text-base md:text-lg tracking-wide leading-relaxed">
                        View portfolio
                      </span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

