import { Sun, Moon} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const storedtheme=localStorage.getItem('theme');

    useEffect(()=>{

        if(storedtheme==='dark')
            {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
        else{
            setIsDarkMode(false);
            localStorage.setItem('theme', 'light');
        }
    },[]);

    const[isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme=() => {
     if(isDarkMode){
           setIsDarkMode(false);
           document.documentElement.classList.remove('dark');
           localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
            
        }
    }
    return ( 
    

    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
        {isDarkMode ?
        <Sun className="h-6 w-6 text-yellow-300"/> :
        <Moon className="h-6 w-6 text-blue-300"/>}
    </button>
    



);
}