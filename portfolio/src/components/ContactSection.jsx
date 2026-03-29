import { Mail, MapPin, Linkedin, HeartHandshake, Contact } from "lucide-react";
import HandshakeIcon from '../assets/handshake.svg';
import { ContactUs } from '../assets/ContactUs.jsx';



export const ContactSection = () => {
    return <section
    id="contact"
    className="py-24 px-4 relative bg-secondary/30"
    >    
    <div className="container mx-auto max-w-5xl">

    
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">
                    {" "}
                    Contact Information
                </h3>
                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> Email </h4>
                            <a 
                            href="mailto:MohammadHSafar@hotmail.com" 
                            className="text-muter-foreground hover:text-primary transition-colors">
                                MohammadHSafar@hotmail.com
                            </a>
                        </div>

                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> Location </h4>
                            <a 
                            href="https://maps.google.com/?cid=11735618311846409247&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl" 
                            className="text-muter-foreground hover:text-primary transition-colors"
                            target="_Blank">
                                Tempe, AZ, USA
                            </a>
                        </div>

                    </div>
                </div>
                <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center ">
                        <a className="text-muter-foreground hover:text-primary transition-colors"
                            href="https://www.linkedin.com/in/mohammadhsa/"
                            target="_Blank"
                        >
                            <Linkedin/>
                        </a>
                        <a className="text-muter-foreground hover:text-primary transition-colors "
                            href="https://app.joinhandshake.com/profiles/msgzjy"
                            target="_Blank"
                        >
                            <div className="w-8 h-8 bg-[#D1FA52] rounded-md flex items-center justify-center p-1.5 shadow-sm hover:invert transition-colors duration-300">
                                <img 
                                src={HandshakeIcon} 
                                alt="Handshake Profile" 
                                className="w-full h-full object-contain filter brightness-0" 
                                />
                            </div>
                        </a>


                    </div>
                    
                </div>

            </div>
            <ContactUs/>

        </div>
    </div>
    
    
    </section>
};



