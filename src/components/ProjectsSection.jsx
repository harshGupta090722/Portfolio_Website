import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SocietyOne",
    period: "May 2026 – June 2026",
    description:
      "Full-stack society rental management platform with role-based dashboards for Admin, Landlord, and Tenant. Includes multi-stage verification workflows, document uploads, and a full lease lifecycle system.",
    image: "/projects/landlord1.png",
    tags: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
    githubUrl: "https://github.com/harshGupta090722/SocietyOne",
  },
  {
    id: 2,
    title: "Web-Track",
    period: "Feb 2026 – March 2026",
    description:
      "Full-stack analytics platform (similar to Google Analytics) for tracking and analyzing website visitors in real time. Built backend APIs for event tracking and live user monitoring with PostgreSQL and Drizzle ORM.",
    image: "/projects/web-track.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Clerk", "AWS EC2", "Nginx"],
    githubUrl: "https://github.com/harshGupta090722/web-tracker",
  },
  {
    id: 3,
    title: "BiteExpress",
    period: "June 2026 – Present",
    description:
      "Full-stack food ordering platform with role-based access for Customers, Staff, and Admins. Features real-time order tracking via Apollo GraphQL Subscriptions and Redis, and secure auth with NextAuth + Auth0.",
    image: "/projects/BiteExpress.png",
    tags: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "Redis", "Prisma", "NextAuth"],
    githubUrl: "https://github.com/harshGupta090722/BiteExpress",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                {project.period && (
                  <p className="text-xs text-primary/70 font-medium mb-2">{project.period}</p>
                )}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/harshGupta090722"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};