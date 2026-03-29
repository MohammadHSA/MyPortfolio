import { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false); 
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_inr0h38', 'template_pw9uo48', form.current, {
        publicKey: 'AoILAg7__pquDbMyD',
      })
      .then(
        () => {
          setIsSent(true);
          e.target.reset();

          setTimeout(() => setIsSent(false), 5000);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (

    
    <form ref={form} onSubmit={sendEmail}
    className="block text-sm font-medium mb-2 space-y-6 bg-card p-8 rounded-lg shadow-xs">
    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

        <label className="block text-sm font-medium mb-2">
            {" "}
            Your Name
        </label>
        
        <input 
        type="text" 
        name="name" 
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
        placeholder="John Doe"

        />
        

      <label>
        {" "}
        Your Email
        </label>
      <input
      type="email"
      name="email"
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
      placeholder="JohnDoe@gmail.com"
      />


      <label className="block text-sm font-medium mb-2">
        {" "}
        Your message</label>
      <textarea
        name="message"
        className="w-full px-4 py-5 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
        placeholder="Hello, I am interested in collaborating with you on a project."
      />

      
      {isSent && (
        <p className="text-green-400 text-sm text-center animate-bounce">
          Message transmitted successfully!
        </p>
      )}
      <input 
        type="submit" 
        value={isSent ? "Message Sent!" : "Send"} 
        disabled={isSent}
        className={`cosmic-button w-full flex items-center justify-center gap-2 ${isSent ? 'opacity-50 cursor-not-allowed' : ''}`}
        
      />

    </form>

    
    
  );
};