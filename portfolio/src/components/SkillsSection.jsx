import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
  // Programming Languages
  { name: "Python", level: 90, category: "languages" },
  { name: "C#", level: 50, category: "languages" },
  { name: "Java", level: 90, category: "languages" },
  { name: "C++", level: 90, category: "languages" },

  // Data Science & Engineering
  { name: "SQL", level: 60, category: "backend" },

  // Specialized Development
  { name: "WSDL / SOAP", level: 80, category: "backend" },
  { name: "Mobile Development", level: 75, category: "frontend" },
  { name: "Fast API", level: 60, category: "backend" },
  { name: "React Native", level: 60, category: "backend" },


  // Environments & Ops
  { name: "VirtualBox", level: 90, category: "tools" },
  { name: "Linux / Unix", level: 80, category: "tools" },

  // Quality Assurance & Testing
  { name: "Test Case Design", level: 85, category: "testing" },
  { name: "Bug Reporting & Tracking", level: 90, category: "testing" },
  { name: "Jira / GitHub Issues", level: 40, category: "tools" },
  { name: "Unit Testing (PyTest/NUnit)", level: 10, category: "testing" },
];

const categories=["all","languages","backend","frontend","tools","testing"];

export const SkillsSection = () => {
    const[activeCategory, setActiveCategory] = useState("all");

    const filteredSkills=skills.filter((skill)=> activeCategory === "all" || skill.category === activeCategory);
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30"> 
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">

                My <span className="text-primary">Skills</span>
                
            </h2>

             <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key) => (
                    <button key={key}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration capitalize card-hover active:scale-125 active:opacity-80",
                    activeCategory === category 
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
                    onClick={()=>setActiveCategory(category)}

                    >
                        {category}
                    </button>
                 ))}
            </div>   

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key)=> (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className=" font-semibold text-lg">
                                {skill.name}
                            </h3>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{width:skill.level+"%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>

                            </div>
                        </div>
                    </div> 

                ))}

            </div>


        </div>
    </section>
}
    