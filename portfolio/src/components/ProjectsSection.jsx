import { ExternalLink, Github  } from "lucide-react";
import { ArrowRight } from "lucide-react";
const projects = [
    {
        id: 1,
        title: '"The "Stellar" Portfolio Engine"',
        description: 'A portfolio engine built with React and Node.js, designed to provide users with a seamless experience in managing their investments. The engine features real-time data updates, customizable dashboards, and advanced analytics to help users make informed decisions about their portfolios.',
        image: '/projects/Stellar.png',
        tags: ["React","TailwindCSS","Node.js"],
        demoUrl:"#",
        githubUrl:"#",

    },
    {
        id: 2,
        title: 'EV Power Kit Architecture & Logic Engine',
description: "Designed a scalable OOD system for an EV storefront, featuring complex hardware compatibility logic and an automated inventory management engine. Focused on translating multi-layered business requirements into a robust UML class structure.",        image: '/projects/ClassDiagram.png',
        tags: ["OOD", "System Design", "UML", "Logic Engineering"],
        demoUrl: "#",
        githubUrl: "#",

    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured {" "}
                <span className="text-primary">
                     Projects
                </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project is focused on learning a new skill or technology while maintaining quality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project,key)=>
                <div 
                key={key}
                className="group bg-card rounded-ls overflow-hidden shadow-xs card-hover"
                >
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag)=>(
                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/50 text-secondary-forground">
                            {tag}
                            </span>
                        ))}
                        
                        </div>

                    
                    <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                        
                        <p className="text-mute-foreground text-sm mb-4 flex-grow">
                            {project.description}
                        </p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                        <div className="flex space-x-3">
                            <a href={project.demoUrl}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            target="_blank"
                            >
                                <ExternalLink size={20}/>
                            </a>
                            <a href={project.githubUrl}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            target="_blank"
                            >
                                <Github size={20}/>
                            </a>
                            
                        </div>

                    </div>
                    </div>

                    
                </div>
            )}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/MohammadHSA" target="_blank">
                    Check my GitHub <ArrowRight size={16} />
                </a>
                
            </div>
            




        </div>



    </section>;

};