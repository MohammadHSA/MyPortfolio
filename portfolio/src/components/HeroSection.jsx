import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4></section" 
    >
        <div className="container max-w-4xl text-center z-39">
            
            <div className = "spac-y-6">
                <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> 
                    Hi, I am  
                    </span>
                    
                    <span className="text-gradient text-glow opacity-0 animate-fade-in-delay-1">
                        {" "}
                        Mohammad Safar

                    
                    </span>
                    <br />
                    <span className="text-primary opacity-0 animate-fade-in-delay-2"> 
                        A Full-Stack Developer

                    </span>
                    <br />
                    <span className="text-primary  ml-2 opacity-0 animate-fade-in-delay-3"> 
                         and this is my Portfolio!

                    </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 font-semibold">
                    <br />
                    I major in Computer Science with a focus on software engineering.
                    Creating programs to help solve real-world problems is my passion and I strive to help people with my programming skills.
            <br />
                    I specialize in building web applications using modern technologies such as React, Node.js, FastAPI and AWS for databases.
                    My experience from school projects also taught me some cryptography skills as well.
                </p>
                <br />
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button  ">
                         View My Work
                    </a>

                </div>
            </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>


        </section>  );
};