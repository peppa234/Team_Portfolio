import { useParams, Link, Navigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { getTeamMemberBySlug } from "../data/teamData";

/**
 * Portfolio component - Displays individual team member portfolio
 * Uses useParams to get the slug from the URL and loads the corresponding team member data
 * Maintains the same card styling as the landing page for consistency
 */
export const Portfolio = (): JSX.Element => {
  // Get the slug parameter from the URL
  const { slug } = useParams<{ slug: string }>();

  // Load the team member data based on the slug
  const member = slug ? getTeamMemberBySlug(slug) : undefined;

  // If member not found, redirect to portfolios list
  if (!member) {
    return <Navigate to="/portfolios" replace />;
  }

  // Prepare contact cards from member data
  const contactCards = [
    {
      icon: "/frame-1.svg",
      title: "GitHub",
      description: "View my repositories",
      link: member.contactInfo.github,
    },
    {
      icon: "/frame.svg",
      title: "LinkedIn",
      description: "Professional network",
      link: member.contactInfo.linkedin,
    },
    {
      icon: "/frame-2.svg",
      title: "Email",
      description: "Send me a message",
      link: member.contactInfo.email ? `mailto:${member.contactInfo.email}` : undefined,
    },
  ].filter((card) => card.link); // Only show cards with valid links
  return (
    <div className="bg-white w-full min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section with Member Info */}
        <section id="home" className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12">
          <div className="relative bg-black rounded-[3rem] md:rounded-[5rem] lg:rounded-[7rem] shadow-[0px_4px_4px_#00000040,0px_4px_4px_#00000040,-11px_4px_8.9px_#00000040,9px_4px_10.3px_#000000a3] px-6 sm:px-8 md:px-10 lg:px-12 py-8 md:py-12 lg:py-16 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Text Content */}
              <div className="flex-1 w-full">
                <h1 className="[font-family:'Sora',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-tight mb-6 md:mb-8">
                  Hi, I'm {member.name}
                </h1>

                <div className="flex flex-col gap-6">
                  <p className="[font-family:'Sora',Helvetica] font-normal text-[#ffffffcc] text-lg sm:text-xl md:text-2xl tracking-tight leading-relaxed text-left">
                    {member.bio}
                  </p>
                  
                  {/* Member Name & Role */}
                  <div className="mt-4">
                    <h2 className="[font-family:'Sora',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-2">
                      {member.name}
                    </h2>
                    <p className="[font-family:'Sora',Helvetica] font-medium text-[#ffffffcc] text-lg sm:text-xl md:text-2xl">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative w-full lg:w-auto flex justify-center lg:justify-end flex-shrink-0">
                <div className="relative">
                  <img
                    className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-xl"
                    alt={member.name}
                    src={member.image}
                  />
                 
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Portfolios Button */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-6 flex justify-center">
          <Link to="/portfolios">
            <Button className="h-auto py-3 md:py-4 px-6 md:px-8 bg-black rounded-[2rem] shadow-[0px_4px_11.3px_#00000040] hover:bg-black/90 hover:scale-105 hover:shadow-[0px_6px_20px_#00000060] transition-all duration-300">
              <span className="[font-family:'Sora',Helvetica] font-bold text-white text-base md:text-lg tracking-wide leading-relaxed">
                ← Back to All Portfolios
              </span>
            </Button>
          </Link>
        </div>

        {/* Skills Section */}
        <section id="skills" className="px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Sora',Helvetica] font-bold text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-tight">
              My Skills
            </h2>
            <div className="mx-auto mt-4 w-32 sm:w-40 md:w-48 h-1 bg-black rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Technical Skills Card */}
            <Card className="bg-white rounded-3xl shadow-[9px_4px_10.3px_#00000026,-5px_4px_13.7px_#00000040,0px_-6px_11.8px_#00000040] hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="mb-6 md:mb-8">
                  <h3 className="[text-shadow:0px_4px_15.7px_#0000002e] [font-family:'Sora',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl tracking-wide mb-3 md:mb-4">
                    Technical Skills
                  </h3>
                  <div className="w-full max-w-xs h-0.5 bg-black rounded-full"></div>
                </div>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {member.technicalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="[font-family:'Sora',Helvetica] font-semibold text-black text-base sm:text-lg md:text-xl bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Skills Card */}
            <Card className="bg-white rounded-3xl shadow-[9px_4px_10.3px_#00000026,-5px_4px_13.7px_#00000040,0px_-6px_11.8px_#00000040] hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="mb-6 md:mb-8">
                  <h3 className="[text-shadow:0px_4px_15.7px_#0000002e] [font-family:'Sora',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl tracking-wide mb-3 md:mb-4">
                    Professional Skills
                  </h3>
                  <div className="w-full max-w-xs h-0.5 bg-black rounded-full"></div>
                </div>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {member.professionalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="[font-family:'Sora',Helvetica] font-semibold text-black text-base sm:text-lg md:text-xl bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-black py-12 md:py-16 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="[text-shadow:0px_4px_22.8px_#ffffffa1] [font-family:'Sora',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-tight">
              My Projects
            </h2>
          </div>

          {/* Decorative elements - hidden on mobile */}
          <div className="hidden lg:block absolute top-20 right-24 opacity-70">
            <img className="w-10 h-10" alt="Decoration" src="/vector-5.svg" />
          </div>
          <div className="hidden lg:block absolute top-24 right-20 opacity-70">
            <img className="w-10 h-10" alt="Decoration" src="/vector-5.svg" />
          </div>

          <div className="flex flex-col gap-12 md:gap-16 lg:gap-24 max-w-6xl mx-auto">
            {member.projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-12`}
              >
                {/* Project Image */}
                <Card className="w-full lg:w-1/2 aspect-video bg-white rounded-3xl shadow-[9px_4px_10.3px_#00000026,-5px_4px_13.7px_#00000040,0px_-6px_11.8px_#00000040] overflow-hidden">
                  <CardContent className="w-full h-full p-0 flex items-center justify-center">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="[font-family:'Sora',Helvetica] font-semibold text-gray-400 text-lg md:text-xl">
                        Project Image
                      </span>
                    )}
                  </CardContent>
                </Card>

                {/* Project Details */}
                <div className="flex flex-col gap-3 md:gap-4 flex-1 w-full">
                  <h3 className="[text-shadow:0px_4px_10.8px_#00000040] [font-family:'Sora',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
                    {project.title}
                  </h3>
                  <p className="[font-family:'Sora',Helvetica] font-normal text-[#ffffffcc] text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="[font-family:'Sora',Helvetica] font-bold text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-tight mb-4">
              Contact Me
            </h2>
            <p className="[font-family:'Sora',Helvetica] font-normal text-[#363434] text-lg sm:text-xl md:text-2xl tracking-tight leading-relaxed">
              Let&#39;s connect and collaborate on exciting projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {contactCards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-white rounded-3xl shadow-[0px_-6px_11.8px_#00000040,-5px_4px_13.7px_#00000040,9px_4px_10.3px_#00000026] cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="flex flex-col items-center py-8 md:py-10 lg:py-12 px-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-full flex items-center justify-center mb-4 md:mb-6">
                      <img
                        className="w-10 h-10 md:w-12 md:h-12"
                        alt={card.title}
                        src={card.icon}
                      />
                    </div>
                    <h3 className="[font-family:'Sora',Helvetica] font-bold text-black text-xl md:text-2xl text-center tracking-tight leading-tight mb-2 md:mb-4">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Sora',Helvetica] font-normal text-[#666666] text-base md:text-lg text-center tracking-tight leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
