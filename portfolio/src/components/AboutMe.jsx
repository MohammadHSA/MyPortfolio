import { Briefcase, Code, User } from "lucide-react"

export const About = () => {
    return <section id= "about" className="py-24 px-4 relative">
        {"  "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary" Me></span>

            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> 
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                    <p className="text-muter-foreground">
                        Need to insert a paragaph about myself into this section


                        
                        *REMEMBER TO FINISH THIS*
                    </p>
                    <p className="text-muter-foreground">
                        Need to insert a paragaph about myself into this section



                        *REMEMBER TO FINISH THIS*
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
        
                            Get in touch
                        </a>
                        <a href="/resume.pdf" className="cosmic-button-no-background" download="Mohammad Safar CV.pdf">
                            
                            Download CV
                        </a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    Create responsive websites and web applications
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Design user-friendly interfaces and engaging user experiences
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Leadership Program</h4>
                                <p className="text-muted-foreground">
                                    Trained in a leadership program focused on developing communication, teamwork, and problem-solving skills, preparing me to excel in collaborative environments and lead projects effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>

    </section>
}