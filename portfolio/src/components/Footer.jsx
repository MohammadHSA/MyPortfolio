import { ArrowUp } from "lucide-react";

export const Footer = () =>{

    return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        {" "}
        <p className="text-sm text-muter-foreground "> 
            {" "}
            &copy; {new Date().getFullYear()} All rights reserved.</p>
        <a href="#hero" className="p-2 rounder-full bg-primary/10 hove:bg-primary/20 text-primary transition-colors">
            <ArrowUp/>
        </a>
        
        </footer>);
};
